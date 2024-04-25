import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import MDXComponents from "@theme-original/MDXComponents";
import Code from '@theme/MDXComponents/Code';

import Highlight from '@site/src/components/Highlight';

library.add(fab, fas);

interface Components {
  [key: string]: React.ComponentType<any>;
}

const components: Components = {
  ...MDXComponents,
  Highlight,
  FAIcon: FontAwesomeIcon,
  Code,
};

export default components;
