import React, { JSX } from 'react';
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import DocCategoryGeneratedIndexPage from "@theme-original/DocCategoryGeneratedIndexPage";
import type { Props } from "@theme/DocCategoryGeneratedIndexPage";

import styles from "./styles.module.css";

function HintFooter() {
  const docPath = "community/issue/report";
  return (
    <p className={styles.footerTip}>
      <Translate
        values={{
          guideLink: (
            <Link to={`/${docPath}#`} className="text--no-decoration">
              {"Let us know"}
            </Link>
          ),
        }}
      >
        {"Missing something? {guideLink}."}
      </Translate>
    </p>
  );
}

export default function DocCategoryGeneratedIndexPageWrapper(
  props: Props
): JSX.Element {
  return (
    <>
      <DocCategoryGeneratedIndexPage {...props} />
      <HintFooter />
    </>
  );
}
