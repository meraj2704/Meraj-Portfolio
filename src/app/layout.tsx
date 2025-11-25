import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import StarsCanvas from "../components/canvas/StarCanvas";
import WrapProviders from "./WrapProviders";
import { Footer } from "../components/common/Footer";
import { Toaster } from "sonner";

const personalInfo = {
  name: "Meraj Hossain",
  title: "Full Stack Developer",
  specialties: [
    "Express.js",
    "React",
    "Next.js",
    "Nest.js",
    "PostgreSQL",
    "Git",
  ],
  currentRole: "Jr. Full Stack Developer at ATI Limited",
  yearsExperience: "1.5+ years",
  location: "Dhaka, Bangladesh",
  email: "merajhossain15901@gmail.com",
  phone: "+8801684088348",
  resumeUrl: "/Meraj_Resume.pdf",
  socialLinks: {
    github: "https://github.com/meraj2704",
    linkedin: "https://www.linkedin.com/in/meraj-hossain-6566b8231/",
    hackerRank: "https://www.hackerrank.com/profile/mh1669101",
    codeChef: "https://www.codechef.com/users/ije_2704",
    leetCode: "https://leetcode.com/u/r0TFSzt8Ho",
  },
};

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: `${personalInfo.name} is a ${personalInfo.title} with ${personalInfo.yearsExperience} of experience, specializing in ${personalInfo.specialties.join(
    ", "
  )}. Based in ${personalInfo.location}.`,
  generator: "Next.js 16",
  applicationName: `${personalInfo.name} Portfolio`,
  keywords: [
    "Meraj Hossain",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Express.js",
    "Nest.js",
    "Tailwind CSS",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.socialLinks.linkedin }],
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: `${personalInfo.name} is a ${personalInfo.title} with ${personalInfo.yearsExperience} of experience, specializing in ${personalInfo.specialties.join(
      ", "
    )}.`,
    url: "https://your-website.com",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/meraj.jpeg", // replace with your own image
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: `${personalInfo.name} is a ${personalInfo.title} based in ${personalInfo.location}.`,
    images: ["/meraj.jpeg"], // replace with your own image
    creator: "@meraj2704",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": personalInfo.name,
              "jobTitle": personalInfo.title,
              "worksFor": {
                "@type": "Organization",
                "name": "ATI Limited",
              },
              "url": "https://your-website.com",
              "sameAs": Object.values(personalInfo.socialLinks),
              "email": personalInfo.email,
              "telephone": personalInfo.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": personalInfo.location,
                "addressCountry": "Bangladesh",
              },
              "knowsAbout": personalInfo.specialties,
            }),
          }}
        />
      </head>
      <body className="relative">
        <Toaster />
        <WrapProviders>
          <div className="fixed left-0 right-0 top-0 bottom-0 z-[-1] pointer-events-none">
            <StarsCanvas />
          </div>
          <div className="flex flex-col min-h-[100dvh] text-foreground">
            {/* <Header /> */}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </WrapProviders>
      </body>
    </html>
  );
}
