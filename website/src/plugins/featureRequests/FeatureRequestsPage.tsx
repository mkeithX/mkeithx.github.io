import React, { useEffect } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";

import cannyScript from "./cannyScript";
import styles from "./styles.module.css";

const BOARD_TOKEN = "bb007af8-3e9b-aec6-3288-4edadfd67459";
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
      key={theme} // widget needs a full reset: unable to update the theme
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
    <Layout title="Feature Request" description="Share your ideas...">
      <CannyWidget basePath={basePath} />
    </Layout>
  );
}
