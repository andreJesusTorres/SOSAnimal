import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="contenedor-logo-redes">
            <div className="logo">
              <img
                src="images/logo.svg"
                alt="Logo SOS Animal Fray Bentos"
                className="logo-img"
              />
              <div className="logo-text">
                <h4>
                  SOS Animal
                  <br />
                  Fray Bentos
                </h4>
              </div>
            </div>
            <div className="redes">
              <div className="contact-info">
                <h2>Sigamos en contacto</h2>
                <div className="social-icons">
                  <a
                    href="mailto:animalsos2020@gmail.com"
                    className="btn-contact"
                  >
                    <img
                      src="images/mail.svg"
                      alt="Correo electrónico"
                    />
                  </a>
                  <a
                    href="https://wa.me/59892336700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/whatsapp.svg" alt="Whatsapp" />
                  </a>
                  <a
                    href="https://www.youtube.com/@sosanimal2438"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/youtube.svg" alt="YouTube" />
                  </a>
                  <a
                    href="https://www.facebook.com/SOSAnimalFrayBentos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/facebook.svg" alt="Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/sos_animal_2020/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/instagram.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navegacion-general">
          <div className="navegacion-CTA">
            <p>Porque cada vida importa, luchamos por ellos</p>
            <Link to="/adoptions" className="btn-primary">Adopciones</Link>
            <Link to="/collaborations" className="btn-secondary">Donaciones</Link>
          </div>
          <div className="navegacion-enlaces">
            <Link to="/">
              Inicio
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/collaborations">
              ¿Cómo colaborar?
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/contact">
              Información útil
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/about">
              Sobre nosotros
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/adoptions">
              Adopciones
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="navegacion-ayuda">
            <a className="no-hover">AYUDA</a>
            <div className="enlaces-ayuda">
              <Link to="/contact">Preguntas frecuentes</Link>
              <Link to="/contact">Números de emergencia</Link>
              <Link to="/contact">Charlas educativas</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ubicacion-derechos">
        <div className="ubicacion">
          <p>Fray Bentos, Río Negro, Uruguay</p>
          <p>
            <img
              src="images/perrito.svg"
              alt="Perro mini"
              className="perro-mini"
            />
          </p>
        </div>
        <div className="derechos">
          <p>2023 @ SOS Animal. All rights reserved</p>
          <div className="creditos">
            <p>
              Mountiel font designed by{" "}
              <a
                href="https://www.freepik.com"
                className="freepik"
                style={{ color: "$secondary-700" }}
              >
                FREEPIK
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
