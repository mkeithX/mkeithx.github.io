import React from "react";
import CTAButton from "/src/components/CTAButton";
import GridFlexRow from "@site/src/components/GridFlexRow";

export default function NotFoundContent({className}) {
  return (
    <main style={{
      margin: '0 auto',
      padding: '0 20px',
      maxWidth: '1200px'
    }}>
      <div className={'hero-container'}>

        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <h1 style={{color: 'var(--ifm-color-primary)', fontSize: '2.5rem', textAlign: 'center'}}>
                <br></br>
             {"Four Zero Four"}
            </h1>
            <p>Nothing to see here.</p>
            <GridFlexRow type={'evenly'}>
              <CTAButton
                href={'/'}
                label={'Go Back'}
                type={'secondary'}
              />
            </GridFlexRow>
          </div>
        </div>
        <br></br>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <img
            src={'/img/undraw_taken.svg'}
            width={280}
            alt={'404 - Page Not Found'}
          />
        </div>
      </div>
    </main>
  );
}