import React from 'react';
import { Layout } from '../components/Layout/Layout';

import Demo from '../components/Demo';
import { PageProps } from 'gatsby';

// Check if window is defined (so if in the browser or in node.js).
// https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-window-is-defined
const isBrowser = typeof window !== "undefined"



export default function HomePage({location}:PageProps) {

  // `gatsby build` will fail trying to build this component for
  // server-side rendering if window is undefined, so we check to
  // make sure we're in the browser before rendering.
  
  

  if (!isBrowser) {
    return null;
  }

  const email = String( !location.state?.user) ? '' : String( location.state?.user);
  console.log(`node environment is: ${process.env.NODE_ENV}`)
  return (
    <Layout>      
      <Demo email={email} />
    </Layout>
  );
}