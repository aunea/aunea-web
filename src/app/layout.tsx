import '@aunea/ui-layout/styles.css';
import './globals.css';

export const metadata = {
    title: 'AUNE-A',
    description: 'Personal assistant platform',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="app-content">
            {children}
        </div>
        </body>
        </html>
    );
}
