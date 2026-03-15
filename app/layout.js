
export const metadata = {
  title: 'Neon Zen Agency',
  description: 'AI & Design Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#050505' }}>{children}</body>
    </html>
  )
}
