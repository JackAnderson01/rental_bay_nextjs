import { Inter, Sansita } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rentalbay",
  description: "An e-commerce website to rent out range of items.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <GlobalContextProvider>
          <div>
            {children}

          </div>

        </GlobalContextProvider>
      </body>
    </html>
  );
}
