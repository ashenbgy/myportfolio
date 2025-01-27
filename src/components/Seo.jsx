import Head from "next/head";
// import Script from "next/script";
import { useRouter } from 'next/router';

const SEO = ({ pageTitle, metaDescription, metaKeywords, breadcrumb }) => {
  const router = useRouter();
  const baseUrl = "https://ashenbgy.vercel.app";
  const path = router.asPath === "/" ? "/" : `${router.asPath}.html`;
  const currentUrl = `${baseUrl}${path}`;

  const defaultDescription = "Personal portfolio of Ashen Bhagya, skilled in Java, Spring Boot and Micro-services. Let's connect and bring your ideas to life.";
  const defaultKeywords = "Ashen Bhagya, Software Engineer Sri Lanka, Web Developer Sri Lanka, Java Developer Sri Lanka, Sri Lanka tech portfolio";

  const breadcrumbSchema = breadcrumb.length === 1
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/`
          }
        ]
      }
    : {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${baseUrl}${item.item}`
        }))
      };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{pageTitle}</title>
        <meta httpEquiv='content-language' content='en-gb' />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={metaDescription || defaultDescription} />
        <meta name="keywords" content={metaKeywords || defaultKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Favicon and Icons */}
        <link rel="apple-touch-icon" sizes="76x76" href={`${baseUrl}/apple-touch-icon.png`} />
        <link rel="apple-touch-icon" sizes="192x192" href={`${baseUrl}/android-chrome-192x192.png`} />
        <link rel="apple-touch-icon" sizes="512x512" href={`${baseUrl}/android-chrome-512x512.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${baseUrl}/favicon-16x16.png`} />
        <link rel="manifest" href={`${baseUrl}/site.webmanifest`} />
        <link rel="mask-icon" href={`${baseUrl}/safari-pinned-tab.svg`} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={pageTitle || "Ashen Bhagya Personal Portfolio"} />
        <meta property="og:description" content={metaDescription || defaultDescription} />
        <meta property="og:image" content={`${baseUrl}/assets/img/hero/ashen-bgy.jpg`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ashen Bhagya Personal Portfolio" />
        
        {/* Twitter Card meta tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle || "Personal Portfolio"} />
        <meta name="twitter:description" content={metaDescription || defaultDescription} />
        <meta name="twitter:image" content={`${baseUrl}/#`} />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:creator" content="@user" /> */}

        {/* Schema.org Breadcrumb */}
        {breadcrumbSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        )}
      </Head>
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></Script> */}
      {/* <Script id="google-analytics" dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_ID');
        `,
      }} /> */}
    </>
  );
};

export default SEO;
