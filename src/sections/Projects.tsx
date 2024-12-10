export default function Projects() {
  return (
    <section id="projects" className="Projects_section container">
      <div className="project_block">
        <div>
          <h2>Explore some of my projects</h2>
        </div>
        <div className="grid grid_col-3">
          <div className="project">
            <div className="image">
              <img className="lazy" src="./src/images/notenestProject.png" alt="erms project" />
            </div>
            <h3>NoteNest (make nots)</h3>
            <p>
              Created entirely by me, this book review app allows users to share their thoughts and summaries using EJS
              templates and Passport for secure OAuth authentication.
            </p>
            <div className="Project_links">
              <a href="https://notenest.tiven.xyz/" target="_blank" rel="noopener">
                [View Project]
              </a>
              |
              <a href="https://github.com/rajwindersxxx/notebook-Site.git" target="_blank" rel="noopener">
                [Git Hub]
              </a>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img className="lazy" src="./src/images/maptyProject.png" alt="erms project" />
            </div>
            <h3>Mapty Workout Tracker</h3>
            <p>
              This workout tracker, developed as part of a course challenge, uses HTML, SCSS, and JavaScript. I added
              features like local storage, weather integration, error handling, api calls and editing options to enhance
              functionality.
            </p>
            <div className="Project_links">
              <a href="https://mapty.tiven.xyz/" target="_blank" rel="noopener">
                [View Project]
              </a>
              |
              <a href="https://github.com/rajwindersxxx/maptyChallange.git" target="_blank" rel="noopener">
                [Git Hub]
              </a>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img className="lazy" src="./src/images/ermsProject.png" alt="erms project" />
            </div>
            <h3>Employee management</h3>
            <p>
              Fully developed by me, this PHP-based application manages employee records. It incorporates HTML, CSS,
              JavaScript, and Bootstrap for a responsive design.
            </p>
            <div className="Project_links">
              <a href="http://ermsproject.atwebpages.com/" target="_blank" rel="noopener">
                [View Project]
              </a>
              |
              <a href="https://github.com/rajwindersxxx/employeemanagement.git" target="_blank" rel="noopener">
                [Git Hub]
              </a>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img className="lazy" src="./src/images/omifoodProject.png" alt="erms project" />
            </div>
            <h3>Product Landing Page</h3>
            <p>
              A clean, stylish landing page created with HTML, CSS, and a bit of JavaScript, showcasing product
              promotion.
            </p>
            <div className="Project_links">
              <a href="https://ommifoodapp.netlify.app/" target="_blank" rel="noopener">
                [View Project]
              </a>
              |
              <a href="https://github.com/rajwindersxxx/Simon-Game-Challenge.git" target="_blank" rel="noopener">
                [Git Hub]
              </a>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img className="lazy" src="./src/images/gameProject.png" alt="erms project" />
            </div>
            <h3>Memory Challenge Game</h3>
            <p>
              A course challenge where players replicate growing patterns. Built using HTML, CSS, and JavaScript, with
              materials provided by the instructor.
            </p>
            <div className="Project_links">
              <a href="https://siamongame.tiven.xyz" target="_blank" rel="noopener">
                [View Project]
              </a>
              |
              <a href="https://github.com/rajwindersxxx/Simon-Game-Challenge" target="_blank" rel="noopener">
                [Git Hub]
              </a>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img className="lazy" src="./src/images/KeeperProject.png" alt="erms project" />
            </div>
            <h3>Keeper App</h3>
            <p>Developed using React, this is the note-taking app allows users to create and save notes.</p>
            <div className="Project_links">
              <a href="https://keeperapp.tiven.xyz/" target="_blank" rel="noopener">
                [View Project]
              </a>
              |
              <a href="https://github.com/rajwindersxxx/keeper-app" target="_blank" rel="noopener">
                [Git Hub]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
