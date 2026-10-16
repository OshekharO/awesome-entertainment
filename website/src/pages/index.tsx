import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home(): React.JSX.Element {
  return <Redirect to="/docs/intro" />;
}
