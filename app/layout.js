import "../styles/globals.css"
import Navbar from "../components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
