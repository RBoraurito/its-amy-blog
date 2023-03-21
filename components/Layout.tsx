import { Footer } from './Footer'
import { Header } from './Header'
import { LangSwitcher } from './LangSwitcher'

export const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <style jsx>
      {`
        .layout {
          grid-template-rows: auto 1fr auto;
        }
      `}
    </style>
    <div className="layout min-h-screen grid relative">
      <Header />
      <main>{children}</main>
      <Footer />
      <LangSwitcher classname="bottom-6 right-6 sm:bottom-10 sm:right-10 fixed" />
    </div>
  </>
)
