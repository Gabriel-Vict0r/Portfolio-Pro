import React from "react";
import "../sass/components/widgets/start.sass";
import Typed from "typed.js";
import { useEffect, useRef} from "react";
function Start() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["desenvolvedor web"],
      typeSpeed: 100,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="first-content">
      <div className="svg-light-left"></div>
      <article className="copy">
        <img src="src\img\start\Circulo1-left.svg" alt="" className="circle" />
        <h1 className="copy-title">
          Olá, meu nome é Gabriel Victor, um
          <span className="copy-title-highlight" ref={el}></span>
        </h1>
        <p className="copy-text">
          Junte-se a mim para criarmos juntos projetos incríveis que irão
          impactar positivamente sua empresa e seus usuários.
        </p>
      </article>
      <img
        src="src\img\start\Computador.svg"
        alt="Computador"
        className="computer"
      />
      <div className="svg-light-right"></div>
    </section>
  );
}

export default Start;