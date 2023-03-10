import React from "react";
import "../../sass/components/cardProject.sass";
const CardProject = ({ title, text, urlImage, urlProject }) => {
  const teste = 0;
  return (
    <div className="project">
      <div className="project-image"></div>
      <article className="project-article">
        <h1 className="project-article-title">Projeto 1</h1>
        <p className="project-article-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="project-info">
          <a href="http://">Visualizar</a>
          <span className="project-info-date">Mar 26, 2022</span>
        </div>
      </article>
    </div>
  );
};

export default CardProject;
