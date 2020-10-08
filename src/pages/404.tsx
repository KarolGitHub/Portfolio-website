import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Hoc/Layout/Layout';
import SEO from '../components/SEO/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Page Not Found</h1>
    <p>
      <Link to="/">Return to home page</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
