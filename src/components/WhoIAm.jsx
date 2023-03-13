import React from 'react'
import '../sass/components/WhoIAm.sass'
const WhoIAm = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img src="src/img/whoIAm/Luz 1-left.svg" alt="" className='about-image-imgDecoration'/>
        <img src="src/img/whoIAm/Foto do Expert.svg" alt="" />
      </div>
      <article className="about-text">
        <img
          src="src\img\whoIAm\Circulo-right.svg"
          alt=""
          className="about-text-circle"
        />
        <h2>Quem eu sou</h2>
        <p>
          Desenvolvedor Web apaixonado por transformar ideias em soluções
          digitais eficientes e inovadoras. Formado pelo IFBA - campus Barreiras
          e com mais de 2 anos de experiência, ofereço habilidades sólidas em
          HTML, CSS, JavaScript e suas bibliotecas.
        </p>
      </article>
    </section>
  );
}

export default WhoIAm