//css
import "./ContactPage.css";
//material ui
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const ContactPage = () => {
  return (
    <>
      <section className="contact-container">
        <div className="section-title">
          <h2 className="contact-title">Información de Contacto</h2>
        </div>
        <div className="contact-item">
          <h2 className="item-title">Email</h2>
          <div className="contact-icon">
            <EmailIcon />
          </div>
          <div className="contact-info">thiagovignettes@gmail.com</div>
        </div>

        <div className="contact-item">
          <h2 className="item-title">Linkedin</h2>
          <div className="contact-icon">
            <LinkedInIcon />
          </div>

          <div className="contact-info">
            <a
              className="contact-link"
              target="_blank"
              href="https://www.linkedin.com/in/thiago-vignettes-a43501288/"
            >
              Ver mi perfil de Linkedin
            </a>
          </div>
        </div>
      </section>
      <div className="sep"></div>
    </>
  );
};
