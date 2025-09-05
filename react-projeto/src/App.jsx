import { useState } from "react";
import "./index.css";
import Profile from "./components/Profile";
import { BrowserRouter } from "react-router-dom";


// o primeiro profile se refere ao nome da função, e o segundo ao nome do componente
export default function App() {

  const [show, setShow] = useState(false);

  function showPaginas() {
    setShow(true)
  }

  function killPaginas() {
    setShow(false)
  }


  return (
    <BrowserRouter basename="/react/">   {/* 👈 envolve toda a aplicação */}
      <div className="app">
        <div className="container">
          <Profile />

          <div className="links-container">
            <a
              href="https://araruna.eloweb.net/protocolo/ouvidoria"
              target="_blank"
              className="link-item"
            >
              <div className="link-content">
                <div className="link-icon">
                  <img
                    src="https://img.icons8.com/?size=48&id=96556&format=png"
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
                  <img
                    src="https://img.icons8.com/?size=48&id=83252&format=png"
                    alt=""
                    className="link-icon"
                  />
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
                  <img
                    src="https://img.icons8.com/?size=48&id=86357&format=png"
                    alt=""
                  />
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
                  <img
                    src="https://img.icons8.com/?size=48&id=86361&format=png"
                    alt=""
                  />
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
                  <img
                    src="https://img.icons8.com/?size=48&id=100624&format=png"
                    alt=""
                  />
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
                  <img
                    src="https://img.icons8.com/?size=48&id=87431&format=png"
                    alt=""
                  />
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
                  <img
                    src="https://img.icons8.com/?size=48&id=106148&format=png"
                    alt=""
                  />
                </div>
                <div className="link-text">
                  <h3 className="link-title">Terra nua</h3>
                  <p className="link-description">ITR</p>
                </div>
                <div className="link-arrow">→</div>
              </div>
            </a>

            <a
              href="https://araruna-saudetransparente.ids.inf.br/saudetransparente/"
              target="_blank"
              className="link-item"
            >
              <div className="link-content">
                <div className="link-icon">
                  <img
                    src="https://img.icons8.com/?size=48&id=112762&format=png"
                    alt=""
                  />
                </div>
                <div className="link-text">
                  <h3 className="link-title">Saúde transparente</h3>
                  <p className="link-description">Visite o site</p>
                </div>
                <div className="link-arrow">→</div>
              </div>
            </a>

            <a
              href="#"
              className="link-item"
              onClick={(e) => {
                e.preventDefault(); // 🚫 evita abrir o link
                showPaginas();
              }}
            >
              <div className="link-content">
                <div className="link-icon">
                  <img
                    src="https://img.icons8.com/?size=48&id=85154&format=png"
                    alt=""
                  />
                </div>
                <div className="link-text">
                  <h3 className="link-title">Páginas da prefeitura</h3>
                  <p className="link-description">Visite</p>
                </div>
                <div className="link-arrow">→</div>
              </div>
            </a>
            <div className="instagram-label"
              style={{ display: show ? "flex" : "none" }}>
              <ul>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""

                /><a href="https://instagram.com/saude.araruna" target="_blank">Saúde</a></li>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""
                /><a href="https://instagram.com/edificarscfv" target="_blank">Edificar</a></li>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""
                /><a href="https://instagram.com/culturaararuna" target="_blank">Cultura</a></li>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""
                /><a href="https://instagram.com/diretoriadeesporteararuna2528k" target="_blank">Esporte</a></li>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""
                /><a href="https://instagram.com/agtrabalhadorararuna" target="_blank">Agência do trabalhador</a></li>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""
                /><a href="https://instagram.com/educacao.araruna" target="_blank">Educação</a></li>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""
                /><a href="https://instagram.com/sala_do_empreendedor_araruna" target="_blank">Sala do empreendedor</a></li>
                <li className="iconzinho"><img
                  src="https://img.icons8.com/?size=48&id=85154&format=png"
                  alt=""
                /><a href="https://instagram.com/assistenciasocialararuna" target="_blank">Assistência social</a></li>
                <button onClick={killPaginas}>Fechar</button>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
