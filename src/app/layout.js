import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsGoogle from "@/components/Analytics";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best AWS DevOps Training in Hyderabad 2025 | Ameerpet | 100% Placement",
  description: "Top-rated AWS DevOps & Data Engineering Training Institute in Hyderabad, Ameerpet. Expert trainers, hands-on projects, AWS certifications & 100% job placement assistance. Enroll now!",
  keywords: "AWS DevOps training Hyderabad, AWS training Ameerpet, AWS cloud training Hyderabad, DevOps training Hyderabad, AWS data engineering training, AWS certification Hyderabad, cloud computing course Hyderabad, best AWS institute Hyderabad, AWS training with placement, DevOps course Ameerpet, AWS DevOps engineer course",
  authors: [{ name: "AWS DevOps Training Academy Hyderabad" }],
  creator: "AWS DevOps Training Academy Hyderabad",
  publisher: "AWS DevOps Training Academy Hyderabad",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  language: "en",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.awsdevopstraininginhyderabad.com",
    siteName: "AWS DevOps Training Academy Hyderabad",
    title: "Best AWS DevOps Training in Hyderabad 2025 | Ameerpet | 100% Placement",
    description: "Top-rated AWS DevOps & Data Engineering Training Institute in Hyderabad. Expert trainers, hands-on live projects, AWS certifications & 100% job placement assistance.",
    images: [
      {
        url: "https://www.awsdevopstraininginhyderabad.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AWS DevOps Training Academy Hyderabad - Best AWS Training Institute in Ameerpet"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@awscloudhyderabad",
    creator: "@awscloudhyderabad",
    title: "Best AWS DevOps Training in Hyderabad 2025 | 100% Placement",
    description: "Top-rated AWS DevOps & Data Engineering Training in Hyderabad, Ameerpet. Expert trainers, live projects & 100% placement assistance.",
    images: ["https://www.awsdevopstraininginhyderabad.com/og-image.png"]
  },
  alternates: {
    canonical: "https://www.awsdevopstraininginhyderabad.com"
  },
  verification: {
    google: "5uRuR2EN4bowbg4gGF1LW9XkXS0SBgaiC4CVt5J5ta4"
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AWS DevOps Training Academy",
    "description": "Comprehensive AWS training institute in Hyderabad offering complete cloud computing, DevOps engineering, and data engineering courses with 100% placement assistance.",
    "url": "https://www.awsdevopstraininginhyderabad.com",
    "logo": "https://www.awsdevopstraininginhyderabad.com/logo.png",
    "image": "https://www.awsdevopstraininginhyderabad.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5th floor 506, Nilgiri block, ADITYA ENCLAVE, a/a, Satyam Theatre Rd, Kumar Basti, Ameerpet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500073",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4399",
      "longitude": "78.4483"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9885543638",
      "contactType": "Admissions",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Complete AWS Training Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "AWS Cloud Fundamentals",
          "description": "Comprehensive AWS cloud computing training with hands-on projects and certification preparation.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS DevOps Training Academy"
          }
        },
        {
          "@type": "Course",
          "name": "AWS DevOps Engineering",
          "description": "Advanced DevOps training covering CI/CD, containerization, and infrastructure automation.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS DevOps Training Academy"
          }
        },
        {
          "@type": "Course",
          "name": "AWS Data Engineering",
          "description": "Specialized data engineering course focusing on AWS data services and analytics solutions.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS DevOps Training Academy"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/awsdevopstrainingacademy/",
      "https://twitter.com/awscloudhyderabad",
      "https://www.linkedin.com/in/aws-devops-training-234284137",
      "https://www.instagram.com/awsdevopstraining"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <link rel="canonical" href="https://www.awsdevopstraininginhyderabad.com" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:title" content="Best AWS DevOps Training in Hyderabad 2025 | Ameerpet | 100% Placement" />
        <meta property="og:description" content="Top-rated AWS DevOps & Data Engineering Training Institute in Hyderabad. Expert trainers, hands-on live projects, AWS certifications & 100% job placement assistance." />
        <meta property="og:image" content="https://www.awsdevopstraininginhyderabad.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://www.awsdevopstraininginhyderabad.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AWS DevOps Training Academy Hyderabad" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best AWS DevOps Training in Hyderabad 2025 | 100% Placement" />
        <meta name="twitter:description" content="Top-rated AWS DevOps & Data Engineering Training in Hyderabad, Ameerpet. Expert trainers, live projects & 100% placement assistance." />
        <meta name="twitter:image" content="https://www.awsdevopstraininginhyderabad.com/og-image.png" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.4399;78.4483" />
        <meta name="ICBM" content="17.4399, 78.4483" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnalyticsGoogle />
        <Analytics />
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNV84GSL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
