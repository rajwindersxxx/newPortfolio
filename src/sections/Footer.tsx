export default function Footer() {
  return (
    <footer className="text-teal-300 glassBackground border-t-[1px]  w-full  z-50 p-4">
      <div className="flex justify-between container flex-col py-4 px-4 m-auto items-center gap-4">
        <p className="">
          &copy; <span className="year"></span> Rajwinder Singh. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/rajwinder-singh-93651b218/" target="_blank" rel="noopener">
            [LinkedIn]
          </a>
          |
          <a href="https://github.com/rajwindersxxx" target="_blank" rel="noopener">
            [Git Hub]
          </a>
        </div>
      </div>
    </footer>
  );
}
