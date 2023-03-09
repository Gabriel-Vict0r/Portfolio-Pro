import React from 'react'
import '../../sass/components/cardProject.sass'
const CardProject = ({title, text, urlImage, urlProject, reverse}) => {
  return (
    <div className="project">
      <div className={`project-images ${title}`}>
        <img src={urlImage} alt=""/>
          <a href={urlProject}>Ver Projeto</a>
      </div>
      <article className="project-copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    </div>
  );
}

export default CardProject