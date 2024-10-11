import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import CTAButton from "@site/src/components/CTAButton";
import GridFlexRow from "@site/src/components/GridFlexRow";
import ComingSoonImageUrl from "@site/static/img/undraw_bug_fix.svg";
import clsx from "clsx";

function ComingSoon() {
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;
  return (
    <main style={{
      margin: '0 auto',
      padding: '0 20px',
      maxWidth: '1200px'
    }}>
      <div className={clsx('hero-container')}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <h1 style={{ color: 'var(--ifm-color-primary)', fontSize: '48px', textAlign: 'center' }}>
            {"Rolling Out Soon"}
          </h1>
          <ComingSoonImageUrl
            className={clsx(styles.ComingSoon)}
            title="Coming Soon"
            height={250}
          />
        </div>
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <h3>{"Exciting things are on the way!"}</h3>

          </div>
        </div>

      </div>
    </main>
  );
}
export default ComingSoon;
