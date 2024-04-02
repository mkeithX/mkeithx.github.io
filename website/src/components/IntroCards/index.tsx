import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

export type Case = {
  title: string;
  preview: string;
  image: URL;
  description: JSX.Element;
  website: string;
};

function Card(props: Case) {
  return (
    <div className={clsx("col col--4")}>
    <article className="card shadow--md" style={{ height: "100%" }}>
      <div className={clsx("card__image", styles.cardImage)}>
        <img
          src={props.image}
          alt={props.title}
          title={props.title}
          className={styles.cardImage}
        />
      </div>
      <div className="card__body margin-bottom--md">
        <div className={clsx(styles.cardHeader)}>
          <Heading as="h4" className={styles.CardTitle}>
            <Link href={props.website} className={styles.CardLink}>
              {props.title}
            </Link>
          </Heading>
        </div>
        <p className={styles.CardBody}>{props.description}</p>
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          {/* <button
            className="button button--outline button--info button--block"
            onClick={() => window.open(props.website)}
          >
            {"Visit"}
          </button> */}
        </div>
      </div>
    </article>
    </div>
  );
}
export default Card;

// function Card({ image, title, description, link }) {
//   return (
//     <div className="col col--4">
//       <div className="col-demo">
//         <div className="card-demo shadow--md mb-3" style={{ height: '100%' }}>
//           <div className="card">
//             <div className="card__image">
//               <img src={image} alt={title} title={title} />
//             </div>
//             <div className="card__body">
//               <h4>{title}</h4>
//               <small>{description}</small>
//             </div>
//             <div className="card__footer">
//               <Link
//                 className="button button--outline button--info button--block"
//                 to={link}
//               >
//                 Visit
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
