import * as ClientRedirects from '@docusaurus/plugin-client-redirects';

const redirects: ClientRedirects.Options['redirects'] = [
  // {
  //   from: ['/community/resources', '/docs/next/resources'],
  //   to: '/community/',
  // },
  {
    from: ['/feedback', '/docs/next/feedback'],
    to: '/feature-requests',
  },
  { from: ['/posts', '/updates'], to: '/blog' },
  { from: ['/home'], to: '/' },
  { from: '/showcase', to: '/projects' },
  { from: '/docs/repo/python-starters', to: '/docs/examples/setup/python-starters' },
  { from: '/docs/repo/flask-tutorials', to: '/docs/examples/setup/flask-tutorials' },
  { from: '/docs/devops/troubleshoot/windows-network-issues', to: '/docs/how-tos/fix-connectivity' },
  { from: '/docs/devops/troubleshoot/powershell', to: '/docs/gists/powershell' },
  { from: '/docs/devops/troubleshoot/windows-hardware-issues', to: '/docs/how-tos/fix-windows-hardware-issues' },
  { from: '/docs/devops/guides-and-workarounds', to: '/docs/how-tos' },
  // { from: '', to: '' },
];
export default redirects;
