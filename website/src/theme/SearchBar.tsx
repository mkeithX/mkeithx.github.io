import React from "react";
import SearchBar from "@theme-original/SearchBar";
import type SearchBarType from "@theme/SearchBar";
import type { WrapperProps } from "@docusaurus/types";
import { DocSearch } from "@docsearch/react";

type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocSearch
        appId="X2M5FPT6G9"
        indexName="mkeithxio"
        apiKey="55634a57a78abcd476d22a48eb543486"
        placeholder="Search MKX..."
        resultsFooterComponent={({ state }) => (
          <h3>
            {state.context.nbHits}{" "}
            {state.context.nbHits === 1 ? "match found" : "matches found"}
          </h3>
        )}
        getMissingResultsUrl={({ query }) => {
          return `https://github.com/kitiplex/iuiu/issues/new/choose?title=Missing%20Documentation%20for%20${query}`;
        }}
        maxResultsPerGroup={7}
        insights
      />
      <SearchBar {...props} />
    </>
  );
}
