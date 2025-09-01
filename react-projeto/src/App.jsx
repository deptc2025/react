import "./index.css";
import Profile from "./components/Profile"
import imagwm from './assets/imagwm.jpeg';
// o primeiro profile se refere ao nome da função, e o segundo ao nome do componente


export default function App() {
  return (
    <div className="app">
      <div className="container">

        <Profile/>

        
        <div className="links-container">
          <a
            href="https://araruna.eloweb.net/protocolo/ouvidoria"
            target="_blank"
            className="link-item"
          >
            <div className="link-content">
              <div className="link-icon">
                <img src="https://img.icons8.com/?size=48&id=96556&format=png" 
                alt=""
                className="link-icon"
                 />
              </div>

              <div className="link-text">
                <h3 className="link-title">Ouvidoria</h3>
                <p className="link-description">Faça seu protocolo</p>
              </div>

              <div className="link-arrow">→</div>
            </div>
          </a>

          <a
            href="https://araruna.eloweb.net/portaltransparencia/1/"
            target="_blank"
            className="link-item"
          >
            <div className="link-content">
              <div className="link-icon">
                <img src="https://img.icons8.com/?size=48&id=83252&format=png" 
                alt="" 
                className="link-icon"/>
              </div>

              <div className="link-text">
                <h3 className="link-title">Portal da transparência</h3>
                <p className="link-description">Acesse</p>
              </div>

              <div className="link-arrow">→</div>
            </div>
          </a>

          <a
            href="https://www.sigo.pr.gov.br/cidadao/3131"
            target="_blank"
            className="link-item"
          >
            <div className="link-content">
              <div className="link-icon">
                <img src="https://img.icons8.com/?size=48&id=86357&format=png" alt="" />
              </div>

              <div className="link-text">
                <h3 className="link-title">Ouvidoria da saúde</h3>
                <p className="link-description">Faça seu protocolo</p>
              </div>

              <div className="link-arrow">→</div>
            </div>
          </a>

          <a
            href="https://araruna.eloweb.net/portal-contribuinte/consulta-debitos"
            target="_blank"
            className="link-item"
          
          >
            <div className="link-content">
              <div className="link-icon">
                <img src="https://img.icons8.com/?size=48&id=86361&format=png" alt="" />
              </div>

              <div className="link-text">
                <h3 className="link-title">IPTU</h3>
                <p className="link-description">Acesse online</p>
              </div>

              <div className="link-arrow">→</div>
            </div>
          </a>
          <a
            href="https://araruna.eloweb.net/portal-contribuinte/consulta-debitos"
            target="_blank"
            className="link-item"
          >
            <div className="link-content">
              <div className="link-icon">
                <img src="https://img.icons8.com/?size=48&id=100624&format=png" alt="" />
              </div>

              <div className="link-text">
                <h3 className="link-title">Licitações</h3>
                <p className="link-description">Acesse</p>
              </div>

              <div className="link-arrow">→</div>
            </div>
          </a>

          <a
            href="https://docs.google.com/forms/d/1Jiw0jhrZQ0mSvr91ivlNkz7B4UzQe-ewQWQz4in1PxQ/viewform?edit_requested=true"
            target="_blank"
            className="link-item"
          >
            <div className="link-content">
              <div className="link-icon">
                <img src="https://img.icons8.com/?size=48&id=87431&format=png" alt="" />
              </div>

              <div className="link-text">
                <h3 className="link-title">Orçamento participativo</h3>
                <p className="link-description">Preencha o formulário</p>
              </div>

              <div className="link-arrow">→</div>
            </div>
          </a>

          <a
            href="https://www.controlemunicipal.com.br/inga/sistema/arquivos/65/060825111409_vtn_2025_pdf.pdf"
            target="_blank"
            className="link-item"
          >
            <div className="link-content">
              <div className="link-icon">
                <img src="https://img.icons8.com/?size=48&id=106148&format=png" alt="" />
              </div>

              <div className="link-text">
                <h3 className="link-title">Terra nua</h3>
                <p className="link-description">ITR</p>
              </div>

              <div className="link-arrow">→</div>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
}
