export default function Projects() {
  return (
    <section id="projects" className="w-full text-teal-200">
      <div className=" container border m-auto border-secondaryColor p-8">
        <div>
          <h2 className="text-4xl text-center mb-8 ">
            Explore some of my projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="image">
              <img
                className="lazy"
                src="./img/notenestProject.png"
                alt="erms project"
              />
            </div>
            <h3 className="text-3xl text-teal-300">NoteNest (make nots)</h3>
            <p className="text-teal-400">
              Created entirely by me, this book review app allows users to share
              their thoughts and summaries using EJS templates and Passport for
              secure OAuth authentication.
            </p>
            <div className="Project_links">
              <a
                href="https://notenest.tiven.xyz/"
                target="_blank"
                rel="noopener"
              >
                [View Project]
              </a>
              |
              <a
                href="https://github.com/rajwindersxxx/notebook-Site.git"
                target="_blank"
                rel="noopener"
              >
                [Git Hub]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
