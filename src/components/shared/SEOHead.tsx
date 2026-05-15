import { useTranslation } from '@/i18n';
import { LayoutId } from '@/types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { useEffect } from 'react';

/**
 * SEOHead Component
 * 
 * Manages SEO metadata, Open Graph, Twitter Cards, and Structured Data.
 * Uses React 19's native metadata hoisting capabilities.
 * 
 * @param layout - LayoutId
 */


export default function SEOHead({ layout }: { layout: LayoutId }) {
  const { locale, t } = useTranslation();
  const isAr = locale === 'ar';
  const siteUrl = 'https://typehue.com';
  const siteLocaleUrl = `${siteUrl}/${locale}`;
  const layoutPath = layout === 'homepage' ? '' : `/${layout}`;
  const layoutUrl = `${siteLocaleUrl}${layoutPath}`;
  const oppositeLocale = isAr ? 'en' : 'ar';
  const oppositeUrl = `${siteUrl}/${oppositeLocale}${layoutPath}`;
  
  const siteTitle = t('homepage.seo.title');

  const title = t(`${layout}.seo.title`);
  const description = t(`${layout}.seo.description`);
  const keywords = t(`${layout}.seo.keywords`);

  useEffect(() => {
    document.title = title;
  }, [title]);
  // Structured Data
const getStructuredData = () => {
  const author = {
    "@type": "Person",
    "name": "Ammar Sultan",
    "url": "https://ammar-sultan.com",
    "sameAs": [
      "https://github.com/ammar-sultan-89",
      "https://www.linkedin.com/in/ammar-sultan/"
    ]
  };

  if (layout === 'homepage') {
    return {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "TypeHue",
      "url": siteLocaleUrl,
      "description": description,
      "applicationCategory": "DeveloperApplication",
      "genre": "Typography and Color Testing",
      "browserRequirements": "Requires JavaScript and HTML5",
      "softwareVersion": "1.0.0",
      "operatingSystem": "All",
      "inLanguage": locale,
      "isAccessibleForFree": true,
      "license": "https://opensource.org/licenses/MIT",
      "author": author,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
  }

  if (layout === 'docs') {
    return [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": title,
        "description": description,
        "url": layoutUrl,
        "inLanguage": locale,
        "author": author,
        "publisher": {
          "@type": "Person",
          "name": "Ammar Sultan"
        },
        "isAccessibleForFree": true,
        "license": "https://opensource.org/licenses/MIT"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": siteTitle,
            "item": siteLocaleUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": layoutUrl
          }
        ]
      }
    ];
  }

  // Other Layouts like Dashboard — noindex anyway, minimal breadcrumb only
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": siteTitle,
        "item": siteLocaleUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": layoutUrl
      }
    ]
  };
};
  const ogImageUrl = `${siteUrl}/typehue-og.png`;
  
  return createPortal(
    <>
      {/* Primary Meta Tags */}
      {/* <title>{title}</title> */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ammar Sultan" />
      <meta name="robots" content={layout !== "homepage" && layout !== "docs" ? "noindex, nofollow" : "index, follow"} />

      {/* Canonical and Hreflang */}
      <link rel="canonical" href={layoutUrl} />
      <link rel="alternate" hrefLang={locale} href={layoutUrl} />
      <link rel="alternate" hrefLang={oppositeLocale} href={oppositeUrl} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={layoutUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="TypeHue" />
      <meta property="og:locale" content={isAr ? 'ar_AR' : 'en_US'} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={layoutUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@AmmarSultan89" /> 
      <meta name="twitter:image" content={ogImageUrl} />

     {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(
          Array.isArray(getStructuredData())
            ? getStructuredData()
            : [getStructuredData()]
        )}
      </script>
    </>, document.head
  );
}
