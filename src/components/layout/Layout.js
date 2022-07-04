import MainNavigation from 'components/layout/MainNavigation'

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  )
}

export default Layout
