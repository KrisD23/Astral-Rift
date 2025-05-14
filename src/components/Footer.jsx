import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/krisd23", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/krisd23/", icon: <FaLinkedin /> },
  { href: "https://krishandwivedi.netlify.app/", icon: <FaGlobe /> },
  { href: "https://x.com/krisd23_", icon: <FaTwitter /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©KD 2025.This is a demo website for a portfolio.
        </p>

        <div className="flex justify-center gap-4   md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
