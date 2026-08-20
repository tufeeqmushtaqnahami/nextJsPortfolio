import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider";
import { Analytics } from "@vercel/analytics/next"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Tufeeq Mushtaq | Frontend Developer",
    template: "%s | Tufeeq Mushtaq",
  },

  description:
    "Tufeeq Mushtaq is a Frontend Developer and B.Sc. IT graduate specializing in React, Next.js, JavaScript, and modern responsive web development.",

  keywords: [
    "Tufeeq Mushtaq",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Development",
    "Web Development",
    "Tufeeq Mushtaq Portfolio",
  ],

  authors: [
    {
      name: "Tufeeq Mushtaq",
    },
  ],

  creator: "Tufeeq Mushtaq",
  publisher: "Tufeeq Mushtaq",
  category: "technology",

  alternates: {
    canonical: "https://your-domain.com",
  },

  openGraph: {
    title: "Tufeeq Mushtaq | Frontend Developer",
    description:
      "Portfolio of Tufeeq Mushtaq — Frontend Developer specializing in React, Next.js, JavaScript, and modern web development.",
    url: "https://your-domain.com",
    siteName: "Tufeeq Mushtaq Portfolio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Tufeeq Mushtaq | Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tufeeq Mushtaq | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, JavaScript, and modern responsive web development.",
    images: ["/hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}