
import React, { JSX } from 'react';
import BrowserWindow from './index';

export default function IframeWindow({ url }: { url: string }): JSX.Element {
  return (
    <div style={{ padding: 10 }}>
      <BrowserWindow
        url=""
        style={{
          minWidth: 'min(100%,45vw)',
          width: 996,
          maxWidth: '100%',
          overflow: 'hidden',
        }}
        bodyStyle={{ padding: 0 }}
      >
        <iframe
          id="iframe"
          src={url}
          title="/test"
          style={{ display: 'block', width: '100%', height: 500 }}
        />
      </BrowserWindow>
    </div>
  );
}
