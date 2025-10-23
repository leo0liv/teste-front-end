import "./Categories.scss"

interface OptionsProps {
  nome: string;
  url: string;
  cor: string;
}

function Options({ nome, url, cor }: OptionsProps) {
  const estilo = {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    width: "61px",
    height: "61px"
  };

  const estiloCor = {
    color:`${cor}`
  }

  return (
    <div className="Categories-card">
      <div className="Categories-icon">
        <div className="Categories-img" style={estilo}></div>
      </div>
      <div className="Categories-title">
        <span  className="Categories-text" style={estiloCor}>{nome}</span>
      </div>
    </div>
  )
}

export default Options