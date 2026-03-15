import './globals.css'

export const metadata = {
  title: 'NEON ZEN | AI Agency',
  description: 'AI-Driven Agency with Asia-Inspired Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
