import React from 'react'
import CardProject from './cardProjects/CardProject'
import {projects} from "../Copy/copy";
function Projects() {
  return (
    <section className="projects">
      <CardProject
        title={projects[0].title}
        text={projects[0].text}
        urlImage={projects[0].urlImage}
        urlProject={projects[0].urlProject}
      />
    </section>
  );
}

export default Projects