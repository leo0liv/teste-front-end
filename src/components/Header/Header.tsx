import HeaderInfo from "./components/HeaderInfo/HeaderInfo"
import Menu from "./components/Menu/Menu"
import Navbar from "./components/Navbar/Navbar"

function Header() {

  return (
    <header>
      <HeaderInfo />
      <Menu />
      <Navbar />
    </header>
  )
}

export default Header