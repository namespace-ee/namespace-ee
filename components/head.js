import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

import stylesheet from '../styles/index.scss';

const defaultTitle = 'Namespace OÜ - Creating applications that matter';
const defaultDescription =
  'Full service digital agency based in Tallinn. We are Python, API and React.js experts. Creating applications that matter.';
const defaultOGURL = 'https://namespace.ee';
const defaultOGImage = 'https://namespace.ee/images/namespace.png';

const Head = props => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>{props.title || defaultTitle}</title>
    <meta name="description" content={props.description || defaultDescription} />

    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* Favicon */}
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    {/* Google fonts */}
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700&amp;subset=latin-ext" rel="stylesheet" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
