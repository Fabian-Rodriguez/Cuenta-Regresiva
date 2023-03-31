import './globals.css'

export const metadata = {
  title: 'BLOCKGOR',
  description: 'BLOCKGOR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
