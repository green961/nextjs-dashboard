import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
// import path from '@/app/ui/gl'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
