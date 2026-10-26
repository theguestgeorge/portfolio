import './Footer.css'

import emailIcon from "../../assets/contacts/email-icon.png";
import githubIcon from "../../assets/contacts/github-icon.png";
import linkedInIcon from "../../assets/contacts/linkedin-icon.jpg";

const contacts = [
  {
    name: "GitHub",
    href: "https://github.com/theguestgeorge",
    icon: githubIcon,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/george-e-guest",
    icon: linkedInIcon,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:george.guest@outlook.com",
    icon: emailIcon,
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="footer-content">
        <h2 id="footer-title">Get in touch</h2>
        <ul className="contacts-grid">
          {contacts.map((contact) => (
            <li key={contact.name}>
              <a
                className="itemContainer"
                href={contact.href}
                {...(contact.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <img src={contact.icon} alt="" aria-hidden="true" />
                <span>{contact.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© {year} George Guest. Built with React, TypeScript, and Vite.</p>
      </div>
    </footer>
  );
}
