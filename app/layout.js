export const metadata = {
    title: 'Tribute Page',
    description: 'A tribute to someone special',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }