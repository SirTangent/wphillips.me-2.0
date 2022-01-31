import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaDev,
    FaKeybase
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const resumeURL = "/media/PhillipsWyatt-Resume.pdf"

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
      <aside className="sticky top-0 -mt-40 mb-6">
          <div className="shadow-md rounded-md bg-white md:mx-8 lg:mx-4 mb-8 p-6">
              <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
                  <img src={profile} alt="headshot" className="w-full" />
              </div>
              <div className="text-center">
                  <h1 className="text-xl text-gray-800 font-bold mb-1">Wyatt Phillips</h1>
                  <p className="text-sm text-gray-400 mb-3">
                      Engineer, Programmer, & Maker
                  </p>
                  {/*  TODO: Make resume link as new tab*/}
                  <a
                      href={resumeURL}
                      className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
                  >
                      View Resume
                  </a>
                  <ul className="flex flex-wrap justify-center">
                      {socials.map((social, id) => (
                          <SocialIcon social={social} key={id} />
                      ))}
                  </ul>
              </div>
              <div className="text-start py-4">
                  <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
                      <span>😊</span> About Me
                  </h3>
                  <div className="text-gray-400 text font-light leading-relaxed">
                      <p>
                          I'm a recent engineering graduate from <a href="https://wit.edu/" className="underline"> Wentworth Institute of Technology</a> who finds everyday passion with building things from electronics to web applications.
                      </p>
                  </div>
              </div>
          </div>

          <div className="shadow-md rounded-md bg-white md:mx-8 lg:mx-4 mb-8 p-6 text-center">
              <h3 className="text-md mb2 uppercase font-medium text-gray-800">
                  Contact Info
              </h3>
              <p className="font-thin text-sm pt-2"><a href="mailto:wphillips@128.dev">wphillips@128.dev</a> | (781) 820-0808 | OctocatPerson#7689</p>
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
