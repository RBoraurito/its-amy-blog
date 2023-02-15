import Footer from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <style jsx>
      {`
        .layout {
          grid-template-rows: auto 1fr auto;
        }
      `}
    </style>
    <div className="layout min-h-screen grid">
      <Header />
      {children}
      <Footer />
    </div>
  </>
)
