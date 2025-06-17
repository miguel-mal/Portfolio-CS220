import React from "react";

function Body() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <p>B.S. in Computer Science, University of Somewhere (2015 - 2019)</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Experience</h2>
        <p>Software Engineer at TechCorp (2020 - Present)</p>
        <p>Intern at WebSolutions (2019 - 2020)</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <ul className="list-disc pl-5">
          <li>Portfolio Website - A personal site to showcase projects</li>
          <li>Task Manager App - A productivity app built with React</li>
        </ul>
      </section>
    </div>
  );
}

export default Body;
