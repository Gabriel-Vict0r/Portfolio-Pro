import React from 'react'
import CardProject from './cardProjects/CardProject'
import { projects } from "../Copy/copy";
import '../sass/components/projects.sass'
import Swiper, {Navigation} from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  
  direction: 'vertical',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 100,
  slidesPerView: 2
});
// swiper.slideNext();

function Projects() {
  return (
    <section className="swiper" ref={swiper}  >
      <div className="swiper-wrapper">
      <CardProject
        title={projects[0].title}
        text={projects[0].text}
        urlImage="src\img\projects\bg_project1.svg"
        urlProject={projects[0].urlProject}
      />
      <CardProject
        title={projects[0].title}
        text={projects[0].text}
        urlImage={projects[0].urlImage}
        urlProject={projects[0].urlProject}
        reverse={true}
      />
      <CardProject
        title={projects[0].title}
        text={projects[0].text}
        urlImage={projects[0].urlImage}
        urlProject={projects[0].urlProject}
        reverse={true}
      />
      <CardProject
        title={projects[0].title}
        text={projects[0].text}
        urlImage={projects[0].urlImage}
        urlProject={projects[0].urlProject}
        reverse={true}
      />
      <CardProject
        title={projects[0].title}
        text={projects[0].text}
        urlImage={projects[0].urlImage}
        urlProject={projects[0].urlProject}
        reverse={true}
      />
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </section>
  );
}

export default Projects