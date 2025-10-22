import CrownIcon from "../../../../assets/icon/CrownIcon.jsx"
import "./Navbar.scss"

function Navbar() {

  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <ul className="Navbar-categories">
                <li><a href="#" className="Navbar-text">TODAS CATEGORIAS</a></li>
                <li><a href="#" className="Navbar-text">SUPERMERCADO</a></li>
                <li><a href="#" className="Navbar-text">LIVROS</a></li>
                <li><a href="#" className="Navbar-text">MODA</a></li>
                <li><a href="#" className="Navbar-text">LANÇAMENTOS</a></li>
                <li><a href="#" className="Navbar-text"><span className="Color-oferta">OFERTAS DO DIA</span></a></li>
                <li><a href="#" className="Navbar-text"><CrownIcon/>&nbsp;ASSINATURA</a></li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar