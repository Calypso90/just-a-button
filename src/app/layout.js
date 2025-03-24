import "./globals.css";

export const metadata = {
  title: "Just a Button",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
