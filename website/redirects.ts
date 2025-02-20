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
  { from: ['/docs/tutorials','/docs/examples'], to: '/docs/learn' }
];
export default redirects;
