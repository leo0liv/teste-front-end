import "./Banner.scss"

function Banner() {

  return (
    
    <section className="Banner">
        <div className="Banner-container">
            <h1 className="Banner-title">Venha conhecer nossas <span className="break-line">promoções</span></h1>
            <p className="Banner-info"><span className="Color-promocao">50% Off</span> nos produtos</p>
            <button className="Banner-button">Ver produto</button>
        </div>
    </section>
  )
}

export default Banner