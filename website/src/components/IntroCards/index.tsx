import React from 'react';

import Link from '@docusaurus/Link';

function Card({ image, title, description, link }) {
  return (
    <div className="col col--4">
      <div className="col-demo">
        <div className="card-demo shadow--md" style={{ height: '100%' }}>
          <div className="card">
            <div className="card__image">
              <img src={image} alt={title} title={title} />
            </div>
            <div className="card__body">
              <h4>{title}</h4>
              <small>{description}</small>
            </div>
            <div className="card__footer">
              <Link
                className="button button--outline button--info button--block"
                to={link}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
