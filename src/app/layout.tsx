import "./globals.css";
import FloatHeader from "@/app/components/Headers/FloatHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <FloatHeader />
        {children}
      </body>
    </html>
  );
}
