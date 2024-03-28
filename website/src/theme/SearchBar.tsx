import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import type SearchBarType from '@theme/SearchBar';
import type {WrapperProps} from '@docusaurus/types';
import { DocSearch } from '@docsearch/react';

{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />  */}



type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): JSX.Element {
  return (
    <>
    <DocSearch
      appId="X2M5FPT6G9"
      indexName="mkeithxio"
      apiKey="55634a57a78abcd476d22a48eb543486"
      placeholder='Search MKX...'
      resultsFooterComponent={({ state }) => {
        return <h3>{state.context.nbHits} {"match(s) found"}</h3>;
      }}
      maxResultsPerGroup="7"
      insights
    />
      <SearchBar {...props} />
    </>
  );
}
