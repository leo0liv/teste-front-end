import Options from "./Options"
import "./Categories.scss"

function Categories() {

  return (
    <section className="Categories">
      <div className="Categories-container">
        <Options nome="Tecnologia" url="../../../public/categories/TecnologiaIcon.png" cor="#3019B2" />
        <Options nome="Supermercado" url="../../../public/categories/SupermercadoIcon.png" cor="#4E4E4E" />
        <Options nome="Bebidas" url="../../../public/categories/BebidasIcon.png" cor="#4E4E4E" />
        <Options nome="Ferramentas" url="../../../public/categories/FerramentasIcon.png" cor="#4E4E4E" />
        <Options nome="Saúde" url="../../../public/categories/SaudeIcon.png" cor="#4E4E4E" />
        <Options nome="Esporte e Fitness" url="../../../public/categories/EsporteIcon.png" cor="#4E4E4E" />
        <Options nome="Moda" url="../../../public/categories/ModaIcon.png" cor="#4E4E4E" />
      </div>
    </section>
  )
}

export default Categories