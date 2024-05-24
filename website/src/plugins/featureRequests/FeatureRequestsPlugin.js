import path from 'path';
import {normalizeUrl, posixPath} from '@docusaurus/utils';


export default function FeatureRequestsPlugin(context) {
  return {
    name: 'feature-requests-plugin',
    async contentLoaded({actions}) {
      const basePath = normalizeUrl([context.baseUrl, '/feature-requests']);
      const paths = await actions.createData(
        'paths.json',
        JSON.stringify(basePath),
      );

      const aliasedSource = (source) =>
        `@generated/${posixPath(
          path.relative(context.generatedFilesDir, source),
        )}`;

      actions.addRoute({
        path: basePath,
        exact: false,
        component: '@site/src/plugins/featureRequests/FeatureRequestsPage',
        modules: {
          basePath: aliasedSource(paths),
        },
      });
    },
  };
}