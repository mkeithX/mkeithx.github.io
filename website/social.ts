interface SocialProfile {
    label: string;
    href: string;
  }
  
  interface SocialProfiles {
    linkedin: SocialProfile;
    github: SocialProfile;
    facebook: SocialProfile;
    kitiplex: SocialProfile;
    cloudflare: SocialProfile;
    entra: SocialProfile;
    crawlers: SocialProfile;
    metadev: SocialProfile;
    m365dev: SocialProfile;
  }
  
  const socialProfiles: SocialProfiles = {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mkeithtan"
    },
    github: {
      label: "GitHub",
      href: "https://github.com/mkeithx"
    },
    facebook: {
      label: "Facebook",
      href: "https://fb.com/mkeithx"
    },
    kitiplex: {
      label: "Kitiplex",
      href: "https://github.com/kitiplex"
    },
    cloudflare: {
      label: "Cloudflare",
      href: "https://dash.cloudflare.com"
    },
    entra: {
      label: "Login",
      href: "https://aka.ms/my-account"
    },
    crawlers: {
      label: "Algolia",
      href: "https://crawler.algolia.com/admin"
    },
    metadev: {
      label: "Meta",
      href: "https://developers.facebook.com/" 
    },
    m365dev: {
      label: "M365 Dev",
      href: "https://developer.microsoft.com/en-us/microsoft-365/profile"
    }
  };
  
  export default socialProfiles;