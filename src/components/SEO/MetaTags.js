import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>NAATS Corp - Innovative Technology Solutions</title>
      <meta name="title" content="NAATS Corp - Innovative Technology Solutions" />
      <meta name="description" content="Innovating products that drive efficiency, scalability, and user satisfaction. We craft cutting-edge solutions with quality and performance at the core." />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://naatscorp-cmp.vercel.app/" />
      <meta property="og:title" content="NAATS Corp - Innovative Technology Solutions" />
      <meta property="og:description" content="Innovating products that drive efficiency, scalability, and user satisfaction. We craft cutting-edge solutions with quality and performance at the core." />
      <meta property="og:image" content="https://naatscorp-cmp.vercel.app/assets/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://naatscorp-cmp.vercel.app/" />
      <meta property="twitter:title" content="NAATS Corp - Innovative Technology Solutions" />
      <meta property="twitter:description" content="Innovating products that drive efficiency, scalability, and user satisfaction. We craft cutting-edge solutions with quality and performance at the core." />
      <meta property="twitter:image" content="https://naatscorp-cmp.vercel.app/assets/logo.png" />
    </Helmet>
  );
};

export default MetaTags; 