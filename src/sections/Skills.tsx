export default function Skills() {
  const skillData = [
    {
      title: 'Frontend skills',
      description: `with expertise in HTML5, CSS3, and JavaScript (ES6+), bringing ideas
            to life on the web. Skilled in utilizing popular frameworks like
            jQuery and React for dynamic, interactive experiences, and adept
            with responsive design through Tailwind CSS and Bootstrap to ensure
            visually appealing layouts across devices. and have explored
            creative tools like Figma and Affinity Design`,
      tags: [
        'html5',
        'css3',
        'javascript',
        'tailwindCss',
        'react',
        'netlify',
        'affinityDesign',
        'motion',
        'rechart',
      ],
      img: './img/computer.gif',
      id: 1
    },
    {
      title: 'Backend skills',
      description: `server-side development with PHP, MySQL, and PostgreSQL, enabling
            robust data management and efficient database interactions. Skilled
            in building scalable, secure APIs with Node.js and Express,
            providing seamless backend support for web applications.`,
      tags: [
        'nodejs',
        'mySql',
        'postgresql',
        'apache',
        'aws',
        'cloudflare',
        'express',
      ],
      img: './img/backend.gif',
      id: 2
    },
    {
      title: 'Other skills',
      description: `Familiar with essential development tools and environments,
            including Git and GitHub for version control, and Visual Studio Code
            for efficient code editing. Experienced with npm , debian linux and
            Apache server. Additionally, I have foundational knowledge in Web3,
            Motoko as well as libraries like Leaflet for map integration.
            Familiar with AI tools like ChatGPT and GitHub Copilot for coding
            assistance and enhancing productivity`,
      tags: [
        'git',
        'vscode',
        'gitHub',
        'aws',
        'cloudflare',
        'msOffice',
        'chatGpt',
      ],
      img: './img/skills.gif',
      id: 3
    },
  ];
  return (
    <section
      id="skills"
      className="skills_section container min-h-screen text-teal-200 mx-auto bg-backgroundColor/85 py-4"
    >
      <h2 className="text-4xl text-center mb-8">Skills and Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 p-8 items-center justify-center">
        {skillData.map((data) => (
          <>
            <div className={`${data.id === 2 ? 'md:justify-self-end' : ''}`}>
              <img src={data.img} alt="image" className="w-full rounded-md lg:w-[32rem] opacity-85" />
            </div>
            <div className={`flex flex-col gap-4 ${data.id === 2 ? 'md:row-start-2' : ''}`}>
              <h3 className="text-3xl">{data.title}</h3>
              <p className={`text-teal-400 mb-16`}>{data.description}</p>
              <div className="flex gap-2 flex-wrap ">
                {data.tags.map((tag) => (
                  <span className="px-2 bg-backgroundColor border-[1px] border-teal-900 rounded-md text-sm">#{tag}</span>
                ))}
              </div>
            </div>
          </>
        ))}
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
