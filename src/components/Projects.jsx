import React from "react";
import CardProject from "./cardProjects/CardProject";
import { projects } from "../Copy/copy";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../sass/components/widgets/projects.sass";
import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  // const [repositores, setRepositories] = useState([]);
  // const url = "https://api.github.com/users/Gabriel-vict0r/repos";
  // useEffect(() => {
  //   fetch(url, {
  //     headers: { Authorization: "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" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setRepositories(data))
  //     .catch(error => console.log(error))
  // }, []);
  return (
    <section className="projects">
      {/* <img
        src="src\img\projects\Elemento 1.svg"
        alt=""
        className="element-bg"
      />
      <img src="src\img\projects\Luz.svg" alt="" className="light-bg" /> */}
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={1}
        navigation
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3,
          },
          // 767: {
          //   slidesPerView: 2
          // }
        }}
      >
        {/* <img
          src="src\img\projects\Rectangle Background.svg"
          alt=""
          className="retangle-bg"
        /> */}
        {/* {repositores.map((repository) => (
          <SwiperSlide>
            <CardProject
              title={repository.name}
              text={repository.description}
              urlImage="src\img\projects\bg_project1.svg"
              urlProject={repository.html_url}
              data_project={2022}
              key={repository.id}
            />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </section>
  );
}

export default Projects;
