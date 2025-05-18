import * as ClientRedirects from '@docusaurus/plugin-client-redirects';

const redirects: ClientRedirects.Options['redirects'] = [
  {
    from: ['/feedback', '/docs/next/feedback'],
    to: '/feature-requests',
  },
  { from: ['/posts', '/updates'], to: '/blog' },
  { from: ['/home'], to: '/' },
  { from: '/showcase', to: '/projects' },
  { from: '/docs/devops/troubleshoot/windows-network-issues', to: '/docs/how-tos/fix-connectivity' },
  { from: '/docs/devops/troubleshoot/powershell', to: '/docs/gists/powershell' },
  { from: '/docs/devops/troubleshoot/windows-hardware-issues', to: '/docs/how-tos/fix-windows-hardware-issues' },
  { from: '/docs/devops/guides-and-workarounds', to: '/docs/how-tos' },
  { from: ['/test', '/dogfooding', '/dogfood'], to: '/tests' },
  { from: ['/docs/aka-ms'], to: '/docs/system-administration/ms-admin-portals'},
  { from: ['/docs/cli'], to: '/docs/system-administration/cli' },
  { from: ['/docs/mailbox-archive'], to: '/docs/system-administration/ms-exchange/mailbox-archive' },
  { from: ['/docs/devops/admin-center/emergency-accounts'], to: '/docs/system-administration/ms-entra/emergency-access' },
];
export default redirects;
