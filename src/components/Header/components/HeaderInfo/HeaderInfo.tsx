import CheckIcon from "../../../../assets/icon/CheckIcon.jsx"
import TruckIcon from "../../../../assets/icon/TruckIcon.jsx"
import CreditCardIcon from "../../../../assets/icon/CreditCardIcon.jsx"
import "./HeaderInfo.scss"

function HeaderInfo() {

  return (
    <div className="HeaderInfo">
        <div className="HeaderInfo-container">
            <div className="HeaderInfo-subContainer">
                <CheckIcon />&nbsp;
                <p className="HeaderInfo-text">Compra <b className="corInfo">100% segura</b></p>
            </div>
            <div className="HeaderInfo-subContainer">
                <TruckIcon />&nbsp;
                <p className="HeaderInfo-text"><b className="corInfo">Frete grátis</b> acima de R$ 200</p>
            </div>
            <div className="HeaderInfo-subContainer">
                <CreditCardIcon />&nbsp;
                <p className="HeaderInfo-text"><b className="corInfo">Parcele</b> suas compras</p>
            </div>
        
        </div>
    </div>
    
  )
}

export default HeaderInfo