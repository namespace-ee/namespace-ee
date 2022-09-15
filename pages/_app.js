import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { get } from 'lodash';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import { initGA, logPageView } from '../utils/ga';

import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const cookies = parseCookies();
  const language = get(cookies, 'language', 'et');

  useEffect(() => {
    initGA();
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!router.asPath.includes('?')) {
      logPageView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', logPageView);
    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, [router.events]);

  useEffect(() => {
    async function load(language) {
      const { messages } = await import(`../locale/${language}/messages.po`);

      i18n.load(language, messages);
      i18n.activate(language);
    }

    load(language);
  }, [language]);

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  );
};

export default App;
