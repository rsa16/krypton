import { Lato } from "next/font/google";
import Background from "@/components/Background";
import "./globals.css";

const lato = Lato({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Krypton",
  description:
    "A web-based encryption tool with a touch of modern UI, nothing special to it. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="background">
          <Background/>
          <div className="underBlob"></div>
        </div>

        <main className={lato.className}>{children}</main>
      </body>
    </html>
  );
}
