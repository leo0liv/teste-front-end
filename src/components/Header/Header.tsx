import HeaderInfo from "./components/HeaderInfo/HeaderInfo"
import Menu from "./components/Menu/Menu"
import Navbar from "./components/Navbar/Navbar"
import './Header.scss'

function Header() {

  return (
    <header className="Header-container">
      <div className="Header-container-center">
        <HeaderInfo />
        <Menu />
        <Navbar />
      </div>
      
    </header>
  )
}

export default Header