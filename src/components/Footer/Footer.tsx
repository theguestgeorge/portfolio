
import emailIcon from "../../assets/contacts/email-icon.png";
import githubIcon from "../../assets/contacts/github-icon.png";
import linkedInIcon from "../../assets/contacts/linkedin-icon.jpg";

const contacts = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: githubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/george-e-guest",
    icon: linkedInIcon,

  },
  {
    name: "Email",
    href: "george.guest@outlook.com",
    icon: emailIcon,
  },
];

export default function Footer() {
  return (
    <footer>
      <ul className="skills-grid">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <a
              className="itemContainer"
              href={contact.href}
            >
              <img className="icon" aria-hidden="true" src={contact.icon} />
              <p>{contact.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
