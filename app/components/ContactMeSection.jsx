import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";

export default function ContactMeSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <MdMail />
        <a href="mailto:chauquach.dev@gmail.com">
          <p>chauquach.dev@gmail.com</p>
        </a>
      </div>
      <div className="flex flex-row items-center gap-2">
        <FaGithub />
        <a href="https://github.com/chauquach1">
          <p>chauquach1</p>
        </a>
      </div>
      <div className="flex flex-row items-center gap-2">
        <RxLinkedinLogo />
        <a href="https://www.linkedin.com/in/chauquach/">
          <p>in/chauquach</p>
        </a>
      </div>
    </div>
  );
}
