import clsx from "clsx";
import React, { FunctionComponent } from "react";
import Image from "@theme/IdealImage";

import DiscoverIcon from "./icon-discover.svg"
import styles from "./styles.module.css";

export interface ProjectData {
  title: string;
  description: string;
  url: string;
  image: string;
}

export const Project: FunctionComponent<ProjectData> = ({
  title,
  description,
  url,
  // role,
  image,
}) => {
  return (
    <div className={clsx("col col--4", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__image", styles.image)}>
          <Image img={image} alt={description} title={title} />
        </div>
        <div className="card__body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a
            href={url}
            target="_blank"
            className="button button--primary button--outline"
          >
            <span className="button__icon">
              <DiscoverIcon />
            </span>
            {"Explore"}
          </a>
        </div>
      </div>
    </div>
  );
};