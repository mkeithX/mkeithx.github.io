import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import DocCategoryGeneratedIndexPage from "@theme-original/DocCategoryGeneratedIndexPage";
import type { Props } from "@theme/DocCategoryGeneratedIndexPage";

import styles from "./styles.module.css";

function HintFooter() {
  const docPath = "docs/devops/guides-and-workarounds";
  return (
    <p className={styles.footerTip}>
      <Translate
        values={{
          guideLink: (
            <Link to={`/${docPath}#`}>
              <Translate>Navigate to this page</Translate>
            </Link>
          ),
        }}
      >
        {"Looking for guides & workarounds? {guideLink} to learn more."}
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
