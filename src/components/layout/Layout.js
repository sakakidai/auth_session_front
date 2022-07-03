import MainNavigation from 'components/layout/MainNavigation'

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <MainNavigation />
        {children}
      </main>
    </>
  )
}

export default Layout
