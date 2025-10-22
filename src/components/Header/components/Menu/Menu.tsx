import Logo from "../../../../assets/logo/Logo.jsx"
import SearchIcon from "../../../../assets/icon/SearchIcon.jsx"
import BoxIcon from "../../../../assets/icon/BoxIcon.jsx"
import HeartIcon from "../../../../assets/icon/HeartIcon.jsx"
import UserIcon from "../../../../assets/icon/UserIcon.jsx"
import ShopCartIcon from "../../../../assets/icon/ShopCartIcon.jsx"
import "./Menu.scss"



function Menu() {

  return (
      <div className="Menu-container">
            <div className="Logo-container">
              <Logo />
            </div>
            <div className="search-container">
              <input className="input-search" type="text" placeholder="O que você está buscando?" />
              <span className="search-icon">
                <SearchIcon />
              </span>
            </div>
            <div className="Icon-container">
              <div>
                <BoxIcon />
              </div>
              <div>
                <HeartIcon />
              </div>
              <div>
                <UserIcon />
              </div>
              <div>
                <ShopCartIcon />
              </div>
            </div>
      </div>
  )
}

export default Menu