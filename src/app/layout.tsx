import './globals.css';

export const metadata = {
  title: 'AUNE-A',
  description: 'Personal assistant platform',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      {children}
      </body>
      </html>
  );
}
