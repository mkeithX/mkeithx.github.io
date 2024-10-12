import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import DocCategoryGeneratedIndexPage from "@theme-original/DocCategoryGeneratedIndexPage";
import type { Props } from "@theme/DocCategoryGeneratedIndexPage";

import styles from "./styles.module.css";

function HintFooter() {
  const docPath = "community";
  return (
    <p className={styles.footerTip}>
      <Translate
        values={{
          guideLink: (
            <Link to={`/${docPath}#`} className="text--no-decoration">
              {/* <Translate>Navigate to this page</Translate> */}
              {"Submit an issue"}
            </Link>
          ),
        }}
      >
        {"Missing something? {guideLink} to help us improve."}
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
