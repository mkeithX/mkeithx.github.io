
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";


function TopBanner() {
    const announcedVersion = useDocusaurusContext().siteConfig.customFields
      ?.announcedVersion as string;
  
    return (
      <div className={styles.topBanner}>
        <div className={styles.topBannerTitle}>
          {'🎉\xa0'}
          <Link
            to={'blog'}
            className={styles.topBannerTitleText}>
            <Translate
              id="homepage.banner.launch.newVersion"
              values={{newVersion: announcedVersion}}>
              {'A New Version of SpaceHub is out!️'}
            </Translate>
          </Link>
          {'\xa0🥳'}
        </div>
        {/*
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style={{flex: 1, whiteSpace: 'nowrap'}}>
            <div className={styles.topBannerDescription}>
              We are on{' '}
              <b>
                <Link to="https://www.producthunt.com/posts/docusaurus-2-0">
                  ProductHunt
                </Link>{' '}
                and{' '}
                <Link to="https://news.ycombinator.com/item?id=32303052">
                  Hacker News
                </Link>{' '}
                today!
              </b>
            </div>
          </div>
          <div
            style={{
              flexGrow: 1,
              flexShrink: 0,
              padding: '0.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <ProductHuntCard />
            <HackerNewsIcon />
          </div>
        </div>
        */}
      </div>
    );
  };
  export  default TopBanner;