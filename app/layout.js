export const metadata = {
  title: 'Neon Zen Agency',
  description: 'AI & Design Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
