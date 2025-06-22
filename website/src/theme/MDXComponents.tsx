import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import MDXComponents from "@theme-original/MDXComponents";
import Code from '@theme/MDXComponents/Code';
import Highlight from '@site/src/components/Highlight';
import ComingSoon from "../components/ComingSoon";

import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';

library.add(fab, fas);

interface Components {
  [key: string]: React.ComponentType<any>;
}

const components: Components = {
  ...MDXComponents,
  Highlight,
  FAIcon: FontAwesomeIcon,
  Code,
  ComingSoon,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  CardImage,
  Columns,
  Column,
};

export default components;
