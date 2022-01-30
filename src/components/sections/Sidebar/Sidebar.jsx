import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaDev,
  FaKeybase
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const resumeURL = "/resume"

const socials = [
  {
    id: 0,
    icon: <FaGithub />,
    link: "https://github.com/SirTangent",
  },
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/phillipsw1/",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/SirTangent",
  },
  {
    id: 3,
    icon: <FaDev />,
    link: "https://devpost.com/SirTangent",
  },
  {
    id: 4,
    icon: <FaKeybase />,
    link: "#",
    disabled: true,
    tip: "Keybase account is being reset..."
  }
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="headshot" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Wyatt Phillips</h1>
        <p className="text-sm text-gray-400 mb-3">
          Engineer, Programmer, & Maker
        </p>
        <a
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link, disabled, tip } = props.social;
  if (disabled) {
    return(
        <li className="m-2">
          <div
              className={
                "w-8 h-8 bg-gray-200 rounded text-gray-400 flex items-center justify-center"
              }
              title={tip}
          >
            {icon}
          </div>
        </li>
    );
  }
  return (
    <li className="m-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={
          "w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
        }
      >
        {icon}
      </a>
    </li>
  );
};
