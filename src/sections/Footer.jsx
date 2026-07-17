import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-5 pb-6 text-center text-sm text-neutral-400 c-space sm:flex-row sm:flex-wrap sm:text-left">
      <div className="mb-2 h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent sm:mb-4" />
      <div className="flex flex-wrap justify-center gap-2">
        <p>Terms & Conditions</p>
        <p aria-hidden="true">|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social) => (
          <a
            href={social.href}
            key={social.name}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="flex size-11 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
          >
            <img src={social.icon} className="size-5" alt="" />
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Mohamed Abdulla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
