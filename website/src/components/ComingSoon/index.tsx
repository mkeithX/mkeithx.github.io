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
        <div className={'hero-container'}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <ComingSoonImageUrl 
            className={clsx(styles.ComingSoon)}
            title="Stay tuned"
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
              <h2 style={{color: 'var(--ifm-color-primary)', fontSize: '48px', textAlign: 'center'}}>
               {"Rolling out soon"}
              </h2>
              <h3>{"Exciting things are on the way!"}</h3>
              {/* <h3>{"Stay tuned."}</h3> */}
              {/* <GridFlexRow type={'evenly'}>
                <CTAButton
                  href={'/'}
                  label={'Go Back'}
                  type={'secondary'}
                />
              </GridFlexRow> */}
            </div>
          </div>

        </div>
      </main>
);
}
export default ComingSoon;