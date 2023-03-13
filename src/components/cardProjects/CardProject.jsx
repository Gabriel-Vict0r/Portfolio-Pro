import React from "react";
import "../../sass/components/cardProject.sass";
const CardProject = ({ title, text, urlImage, urlProject, data_project }) => {
  const teste = 0;
  return (
    <div className="project">
      <div className="project-image"></div>
      <article className="project-article">
        <h1 className="project-article-title">{title}</h1>
        <p className="project-article-text">{text}</p>
        <div className="project-info">
          <a href={urlProject} target="_blank">
            Visualizar
          </a>
          <span className="project-info-date">{data_project}</span>
        </div>
      </article>
    </div>
  );
};

export default CardProject;
