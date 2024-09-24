import * as ClientRedirects from '@docusaurus/plugin-client-redirects';

const redirects: ClientRedirects.Options['redirects'] = [
    {
        from: ["/community/resources", "/docs/next/resources"],
        to: "/community/",
      },
      {
        from: ["/feedback", "/docs/next/feedback"],
        to: "/feature-requests",
      },
      { from: ["/posts", "/updates"], to: "/blog" },
      { from: ["/home"], to: "/" },
      { from: "/showcase", to: "/projects" },
];
export default redirects;