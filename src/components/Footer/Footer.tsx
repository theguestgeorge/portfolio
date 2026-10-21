const contacts = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: "github-icon",
    target: "_blank",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: "linkedin-icon",
    target: "_blank",
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: "email-icon",
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
              target={contact.target}
              rel={contact.target ? "noreferrer" : undefined}
            >
              <svg className="icon" aria-hidden="true">
                <use href={`/icons.svg#${contact.icon}`} />
              </svg>
              <p>{contact.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
