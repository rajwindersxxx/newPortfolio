import { GitHubIcon, LinkedInIcon } from './Icons';

export default function SocialLinks() {
  return (
    <ul className="flex gap-4 justify-end  px-4 lg:w-48">
      <li>
        <a
          href="https://github.com/rajwindersxxx"
          aria-label="Visit GitHub"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon className="fill-teal-200  hover:fill-teal-100 w-6 h-6" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/rajwinder-singh-93651b218/"
          aria-label="Visit LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon className="fill-teal-200 hover:fill-teal-100 w-6 h-6" />
        </a>
      </li>
    </ul>
  );
}
