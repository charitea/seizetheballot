import './globals.css'

export const metadata = {
  title: 'Tribute Page',
  description: 'A tribute to someone special',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}