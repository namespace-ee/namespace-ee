import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { get } from 'lodash';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
  const cookies = parseCookies();
  const language = get(cookies, 'language', 'et');

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
