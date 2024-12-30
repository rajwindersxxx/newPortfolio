import { GitHubIcon, LinkedInIcon } from './Icons';

export default function SocialLinks() {
  return (
    <ul className="flex justify-end gap-4 px-4 lg:w-48">
      <li>
        <a
          href="https://github.com/rajwindersxxx"
          aria-label="Visit GitHub"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon className="h-6 w-6 fill-teal-200 hover:fill-teal-100" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/rajwinder-singh-93651b218/"
          aria-label="Visit LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon className="h-6 w-6 fill-teal-200 hover:fill-teal-100" />
        </a>
      </li>
    </ul>
  );
}
