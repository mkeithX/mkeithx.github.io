import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Tip';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconDocusaurus from '@site/static/img/docusaurus-logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb,faTrafficLight } from '@fortawesome/free-solid-svg-icons'

const infimaClassName = 'alert alert--docusaurus';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faLightbulb} />,
  title: (
    <Translate
      id="theme.admonition.docusaurus"
      description="The default label used for the Docusaurus admonition (:::docusaurus)">
      Did you know...
    </Translate>
  ),
};

export default function AdmonitionTypeDocusaurus(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}