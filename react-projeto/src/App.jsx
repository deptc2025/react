import { useState } from "react";
import "./index.css";
import Profile from "./components/Profile";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [show, setShow] = useState(false);

  function showPaginas() {
    setShow(true);
  }

  function killPaginas() {
    setShow(false);
  }

  // Lista das páginas da prefeitura
  const paginasPrefeitura = [
    {
      href: "https://instagram.com/saude.araruna",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Saúde",
      description: "Instagram da Saúde"
    },
    {
      href: "https://instagram.com/edificarscfv",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Edificar",
      description: "Instagram do Edificar"
    },
    {
      href: "https://instagram.com/culturaararuna",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Cultura",
      description: "Instagram da Cultura"
    },
    {
      href: "https://instagram.com/diretoriadeesporteararuna2528k",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Esporte",
      description: "Instagram do Esporte"
    },
    {
      href: "https://instagram.com/agtrabalhadorararuna",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Agência do trabalhador",
      description: "Instagram da Agência do Trabalhador"
    },
    {
      href: "https://instagram.com/educacao.araruna",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Educação",
      description: "Instagram da Educação"
    },
    {
      href: "https://instagram.com/sala_do_empreendedor_araruna",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Sala do empreendedor",
      description: "Instagram da Sala do Empreendedor"
    },
    {
      href: "https://instagram.com/assistenciasocialararuna",
      icon: "https://img.icons8.com/?size=48&id=85154&format=png",
      title: "Assistência social",
      description: "Instagram da Assistência Social"
    }
  ];

  return (
    <BrowserRouter basename="/react/">
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
              href="#"
              className="link-item"
              onClick={(e) => {
                e.preventDefault();
                setShow((prev) => !prev);
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

            {/* Aba de páginas da prefeitura */}
            <div
              className="instagram-label"
              style={{
                display: show ? "flex" : "none",
                position: "relative",
                flexDirection: "column",
                width: "100%"
              }}
            >
              <button
                onClick={killPaginas}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 24,
                  zIndex: 2,
                }}
                aria-label="Fechar"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"
                  alt="Fechar"
                  style={{ width: 24, height: 24 }}
                />
              </button>
              <div style={{ marginTop: 32, width: "100%" }}>
                {paginasPrefeitura.map((pagina, idx) => (
                  <a
                    key={idx}
                    href={pagina.href}
                    target="_blank"
                    className="link-item"
                    style={{ width: "100%" }}
                  >
                    <div className="link-content">
                      <div className="link-icon">
                        <img
                          src={pagina.icon}
                          alt=""
                          className="link-icon"
                        />
                      </div>
                      <div className="link-text">
                        <h3 className="link-title">{pagina.title}</h3>
                        <p className="link-description">{pagina.description}</p>
                      </div>
                      <div className="link-arrow">→</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

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
              href="https://google.com/maps?rlz=1C1JJTC_pt-PTBR1177BR1177&gs_lcrp=EgZjaHJvbWUqDwgBEC4YJxivARjHARjqAjIJCAAQIxgnGOoCMg8IARAuGCcYrwEYxwEY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gIyFAgIEAAYQhhDGLQCGOoCGIAEGIoFMhQICRAAGEIYQxi0AhjqAhiABBiKBTIUCAoQABhCGEMYtAIY6gIYgAQYigUyFAgLEAAYQhhDGLQCGOoCGIAEGIoF0gEJMjE4MGowajE1qAIMsAIB8QWoeij08pyg0g&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KclgiN7Qb-2UMfjhtzd2nUP3&daddr=Rua+Prefeito+Hermes+Campos+Teixeira,+390+-+Araruna,+PR,+87260-000"
              target="_blank"
              className="link-item"
            >
              <div className="link-content">
                <div className="link-icon">
                  <img
                    src="https://img.icons8.com/?size=48&id=c0kUjxdWTRsk&format=png"
                    alt=""
                  />
                </div>
                <div className="link-text">
                  <h3 className="link-title">Endereço</h3>
                  <p className="link-description">Nossa localização</p>
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
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}