import {
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-icons">
        <a
          href="https://calendly.com/postmaster-matthieu-griffon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCalendarAlt />
        </a>
        <a href="mailto:postmaster@matthieu-griffon.fr">
          <FaEnvelope />
        </a>
        <a href="tel:06.25.67.31.25">
          <FaPhone />
        </a>
        <a
          href="https://github.com/MatthieuGriffon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/griffon-matthieu-6336a2265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>© 2024 Matthieu Griffon</p>
    </footer>
  );
}

export default Footer;
