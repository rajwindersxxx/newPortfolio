export default function Footer() {
  return (
    <footer className="glassBackground z-50 w-full border-t-[1px] p-4 text-teal-300">
      <div className="container m-auto flex flex-col items-center justify-between gap-4 px-4 py-4">
        <p className="">
          &copy; <span className="year"></span> Rajwinder Singh. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/rajwinder-singh-93651b218/"
            target="_blank"
            rel="noopener"
          >
            [LinkedIn]
          </a>
          |
          <a
            href="https://github.com/rajwindersxxx"
            target="_blank"
            rel="noopener"
          >
            [Git Hub]
          </a>
        </div>
      </div>
    </footer>
  );
}
