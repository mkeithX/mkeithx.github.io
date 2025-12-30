# Create log directory and log helper
$logFile = "$env:ProgramData\GSAInstall\install.log"
New-Item -ItemType Directory -Path (Split-Path $logFile) -Force | Out-Null

function Write-Log {
    param([string]$message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Add-Content -Path $logFile -Value "$timestamp - $message"
}

try {
    $ErrorActionPreference = 'Stop'
    Write-Log "Starting Global Secure Access client installation."

# IPv4 preferred via DisabledComponents registry value
    $ipv4RegPath    = "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip6\Parameters"
    $ipv4RegName    = "DisabledComponents"
    $ipv4RegValue   = 0x20  # Prefer IPv4 over IPv6
    $rebootRequired = $false

# Ensure the key exists
    if (-not (Test-Path $ipv4RegPath)) {
        New-Item -Path $ipv4RegPath -Force | Out-Null
        Write-Log "Created registry key: $ipv4RegPath"
    }

# Get current value if present
    $existingValue = $null
    $valueExists = $false
    try {
        $existingValue = Get-ItemPropertyValue -Path $ipv4RegPath -Name $ipv4RegName -ErrorAction Stop
        $valueExists = $true
    } catch {
        $valueExists = $false
    }

# Determine if we must change it
    $expected = [int]$ipv4RegValue
    $needsChange = -not $valueExists -or ([int]$existingValue -ne $expected)

if ($needsChange) {
        if (-not $valueExists) {
            # Create as DWORD when missing
            New-ItemProperty -Path $ipv4RegPath -Name $ipv4RegName -PropertyType DWord -Value $expected -Force | Out-Null
            Write-Log ("IPv4Preferred value missing. Created '{0}' with value 0x{1} (dec {2})." -f $ipv4RegName, ([Convert]::ToString($expected,16)), $expected)
        } else {
            # Update if different
            Set-ItemProperty -Path $ipv4RegPath -Name $ipv4RegName -Value $expected
            Write-Log ("IPv4Preferred value differed. Updated '{0}' from 0x{1} (dec {2}) to 0x{3} (dec {4})." -f $ipv4RegName, ([Convert]::ToString([int]$existingValue,16)), [int]$existingValue, ([Convert]::ToString($expected,16)), $expected)
        }
        $rebootRequired = $true
    } else {
        Write-Log ("IPv4Preferred already set correctly: {0}=0x{1} (dec {2}). No change." -f $ipv4RegName, ([Convert]::ToString($expected,16)), $expected)
    }

# Resolve installer path
    $ScriptRoot = if ($PSScriptRoot) { $PSScriptRoot } else { Split-Path -Parent $MyInvocation.MyCommand.Path }
    $installerPath = Join-Path -Path $ScriptRoot -ChildPath "GlobalSecureAccessClient.exe"
    Write-Log "Running installer from $installerPath"

if (Test-Path $installerPath) {
        $installProcess = Start-Process -FilePath $installerPath -ArgumentList "/quiet" -Wait -PassThru

if ($installProcess.ExitCode -eq 1618) {
            Write-Log "Another installation is in progress. Exiting with code 1618."
            exit 1618
        } elseif ($installProcess.ExitCode -ne 0) {
            Write-Log "Installer exited with code $($installProcess.ExitCode)."
            exit $installProcess.ExitCode
        }

Write-Log "Installer completed successfully."
    } else {
        Write-Log "Installer not found at $installerPath"
        exit 1
    }

if ($rebootRequired) {
        Write-Log "Reboot required due to registry value creation or update."
        exit 3010  # Soft reboot required
    } else {
        Write-Log "Installation complete. No reboot required."
        exit 0
    }
}
catch {
    Write-Log "Fatal error: $_"
    exit 1603
}