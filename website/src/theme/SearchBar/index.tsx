import React from 'react';
// import SearchBar from '@theme-original/SearchBar';
import type SearchBarType from '@theme/SearchBar';
import type {WrapperProps} from '@docusaurus/types';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';
// import '@styles/DocSearch.css';

type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): JSX.Element {
  return (
    <div>
      <DocSearch
        apiKey="b63e590c0b5a9ab7c0930991ea785aeb"
        indexName="mkeithx"
        appId="XVSOLYZXNV"
        placeholder="What's on your mind?"

        getMissingResultsUrl={({ query }) => {
          
          return `https://github.com/mkeithX/mkeithx.github.io/issues/new?title=${query}`;
        
        }}
        
        resultsFooterComponent={({ state }) => {
          return <h3>{(state.context.nbHits as number)} Match found</h3>;
        }}

        maxResultsPerGroup={7}
        insights={true}
      />
    </div>
  );
}

export {default as SearchBar} from '@theme-original/SearchBar';