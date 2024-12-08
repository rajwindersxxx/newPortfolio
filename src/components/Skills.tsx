export default function Skills() {
  return (
    <section id="skills" className="skills_section container">
      <h2>Skills and Experiences</h2>
      <div className="grid grid_col-2 skills_container">
        <div className="skill_description">
          <h3>Frontend skills</h3>
          <p>
            with expertise in HTML5, CSS3, and JavaScript (ES6+), bringing ideas
            to life on the web. Skilled in utilizing popular frameworks like
            jQuery and React for dynamic, interactive experiences, and adept
            with responsive design through Tailwind CSS and Bootstrap to ensure
            visually appealing layouts across devices. and have explored
            creative tools like Figma and Affinity Design
          </p>
          <div className="skills_tags">
            <span className="tag">#html5</span>
            <span className="tag">#css3</span>
            <span className="tag">#javascript</span>
            <span className="tag">#jquery</span>
            <span className="tag">#tailwindCss</span>
            <span className="tag">#react</span>
            <span className="tag">#bootstrap</span>
            <span className="tag">#netlify</span>
            <span className="tag">#figma</span>
            <span className="tag">#affinityDesign</span>
          </div>
        </div>
        <div className="skill_image">
          <img src="./src/images/computer.gif" alt="image" className="lazy" />
        </div>
        <div className="skill_image">
          <img src="./src/images/backend.gif" alt="image" className="lazy" />
        </div>
        <div className="skill_description">
          <h3>Backend skills</h3>
          <p>
            server-side development with PHP, MySQL, and PostgreSQL, enabling
            robust data management and efficient database interactions. Skilled
            in building scalable, secure APIs with Node.js and Express,
            providing seamless backend support for web applications.
          </p>

          <div className="skills_tags">
            <span className="tag">#nodejs</span>
            <span className="tag">#php</span>
            <span className="tag">#mySql</span>
            <span className="tag">#postgreSql</span>
            <span className="tag">#restAPI</span>
            <span className="tag">#apache</span>
            <span className="tag">#linux</span>
            <span className="tag">#cloudflare</span>
            <span className="tag">#aws</span>
          </div>
        </div>
        <div className="skill_description">
          <h3>Other skills</h3>
          <p>
            Familiar with essential development tools and environments,
            including Git and GitHub for version control, and Visual Studio Code
            for efficient code editing. Experienced with npm , debian linux and
            Apache server. Additionally, I have foundational knowledge in Web3,
            Motoko as well as libraries like Leaflet for map integration.
            Familiar with AI tools like ChatGPT and GitHub Copilot for coding
            assistance and enhancing productivity
          </p>

          <div className="skills_tags">
            <span className="tag">#git</span>
            <span className="tag">#github</span>
            <span className="tag">#vscode</span>
            <span className="tag">#leaflet</span>
            <span className="tag">#msOffice</span>
            <span className="tag">#debian</span>
            <span className="tag">#chatgpt</span>
            <span className="tag">#githubCopilot</span>
          </div>
        </div>
        <div className="skill_image">
          <img src="./src/images/skills.gif" alt="image" className="lazy" />
        </div>
      </div>
      <p className="section_description">
        With a solid foundation in web applications, I have hands-on experience
        building projects using HTML, CSS, JavaScript, and backend skills in
        Nodejs and PostgreSQL. I find backend development especially
        fascinating, from creating logical flows to designing efficient SQL
        databases.
      </p>
      <div className="skill_set">
        <h3>Confident In</h3>
      </div>
      <div className="best_skills lazy icons">
        <img
          src="./src/icons/html5-plain-wordmark.svg"
          alt="html"
          width="40px"
          height="40px"
        />
        <img
          src="./src/icons/css3-plain-wordmark.svg"
          alt="css"
          width="40px"
          height="40px"
        />
        <img
          src="./src/icons/javascript-original.svg"
          alt="js"
          width="40px"
          height="40px"
        />
        <img
          src="./src/icons/nodejs-original-wordmark.svg"
          alt="node"
          width="40px"
          height="40px"
        />
        <img
          src="./src/icons/postgresql-plain-wordmark.svg"
          alt="postgres"
          width="40px"
          height="40px"
        />
      </div>
    </section>
  );
}
