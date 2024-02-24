import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";

const contactItems = {
  email: {
    href: "mailto:chauquach.dev@gmail.com",
    icon: <MdMail />
  },
  linkedin: {
    href: "https://www.linkedin.com/in/chauquach",
    icon: <RxLinkedinLogo />
  },
  github: {
    href: "https://github.com/chauquach1",
    icon: <FaGithub />
  }
}

export default function ContactMeSection() {
  return (
    <div className="absolute bottom-7 right-7 flex flex-col text-3xl gap-2 text-right">
      {Object.keys(contactItems).map((item, index) => {
        return (
          <a
            key={index}
            href={contactItems[item].href}
            target="_blank"
            className="flex flex-row justify-end items-center gap-2 hover:text-blue-300"
          >
            {contactItems[item].icon}
          </a>
        );
      }
      )}
    </div>
  );
}
