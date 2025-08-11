import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { SpaceAnimation } from '@/components/space-animation';

export const metadata: Metadata = {
  title: "Princefolio - Prince Kumar | Full Stack Developer",
  description:
    "Explore Prince Kumar’s portfolio – Full Stack Developer (MERN Stack), DSA enthusiast with 2+ years of experience and 20+ completed freelance projects.",
  keywords: [
    "Princefolio",
    "Prince Kumar",
    "prince kumar portfolio",
    "Princekrcoder",
    "princekrcoder",
    "Prince Portfolio",
    "Prince Web Developer",
    "Prince Full Stack Developer",
    "MERN Developer",
    "Freelance Web Developer",
    "DSA Expert",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Princefolio - Prince Kumar | Full Stack Developer",
    description:
      "Explore my MERN stack projects, resume, and open-source work. 600+ DSA problems solved and 20+ freelance projects delivered.",
    url: "https://princefolio-iota.vercel.app",
    siteName: "Princefolio",
    images: [
      {
        url: "https://princefolio-iota.vercel.app/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Princefolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Princefolio - Prince Kumar | Full Stack Developer",
    description:
      "Visit Prince Kumar’s portfolio website – MERN Developer & DSA Enthusiast with 600+ problems solved.",
    images: ["https://princefolio-iota.vercel.app/og-image-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <meta name="keywords" content="Princefolio, Prince Kumar, prince kumar portfolio, Princekrcoder, MERN Developer, DSA Expert, Frontend Developer" />
        <link rel="canonical" href="https://princefolio-iota.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prince Kumar",
    "url": "https://princefolio-iota.vercel.app",
    "sameAs": [
      "https://github.com/Princekrcoder",
      "https://www.linkedin.com/in/princekrcoder/"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer / TCS"
    }
  })
}} />

      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background')}>
        <SpaceAnimation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
