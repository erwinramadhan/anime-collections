import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import GlobalStyles from '@/styles/global';

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  const cache = createCache({ key: 'css', prepend: true });
  cache.compat = true;

  return (
    <ApolloProvider {...{ client }}>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Component {...pageProps} />
      </CacheProvider>
    </ApolloProvider>
  )
}
