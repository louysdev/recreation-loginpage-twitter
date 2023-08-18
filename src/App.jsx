import "./App.css";
import { ButtonTwitter } from "./components/elements/ButtonTwitter";
import { Footer } from "./components/sections/Footer";
import { AppleIcon } from "./icons/AppleIcon";
import { GoogleIcon } from "./icons/GoogleIcon";
import { TwitterLogo } from "./icons/TwitterLogo";

export function App() {
  return (
    <article className="tw-loginpage">
      {/*Logo principal (Primera mitad)*/}
      <header className="tw-loginpage-logo">
        <TwitterLogo fill="#fff" width="60%" height="60%" />
      </header>

      {/*Contenido principal (Segunda mitad)*/}
      <section className="tw-loginpage-content">
        <h1 className="tw-loginpage-mainTitle">Lo que esta pasando ahora</h1>
        <h2>Únete Hoy</h2>

        {/*Botones de registro*/}
        <section className="tw-loginpage-sections">
          <ButtonTwitter text="Registrarse con Google">
            <GoogleIcon width="20" height="20" />
          </ButtonTwitter>

          <ButtonTwitter text="Registrarse con Apple">
            <AppleIcon width="20" height="20" />
          </ButtonTwitter>

          {/*Separador*/}
          <section className="separador-container">
            <span className="separador-line"></span>
            <span>o</span>
            <span className="separador-line"></span>
          </section>

          <ButtonTwitter styleButton="tw-button-create" text="Crear cuenta" />

          {/*Terminos y condiciones*/}
          <p className="tw-loginpage-terms">
            Al registrarte, aceptas los{" "}
            <a className="tw-text-decoration" href="#">
              Términos de servicio
            </a>{" "}
            y la{" "}
            <a className="tw-text-decoration" href="#">
              Política de privacidad
            </a>
            , incluida la política de{" "}
            <a className="tw-text-decoration" href="#">
              Uso de Cookies
            </a>
            .
          </p>
        </section>

        {/*Botones de inicio de sesion*/}
        <section className="tw-loginpage-sections">
          <h3>¿Ya tienes una cuenta?</h3>
          <ButtonTwitter styleButton="tw-button-login" text="Iniciar sesion" />
        </section>
      </section>

      {/* Footer*/}
      <Footer />
    </article>
  );
}
