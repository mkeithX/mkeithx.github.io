import React, { JSX, useEffect } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";

import cannyScript from "./cannyScript";
import styles from "./styles.module.css";

const BOARD_TOKEN = '212cce93-f9e4-78a5-56a5-18f493ee8e9e';
function useCannyTheme() {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? "light" : "dark";
}

function CannyWidget({ basePath }: { basePath: string }) {
  useEffect(() => {
    cannyScript();
  }, []);

  const theme = useCannyTheme();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { Canny } = window as any;
    Canny("render", {
      boardToken: BOARD_TOKEN,
      basePath,
      theme,
    });
  }, [basePath, theme]);
  return (
    <main
      key={theme}
      className={clsx("container", "margin-vert--lg", styles.main)}
      data-canny
    />
  );
}

export default function FeatureRequests({
  basePath,
}: {
  basePath: string;
}): JSX.Element {
  return (
    <Layout title="Feature Request" description="Share your ideas & Help Us Build What’s Next.">
      <CannyWidget basePath={basePath} />
    </Layout>
  );
}
