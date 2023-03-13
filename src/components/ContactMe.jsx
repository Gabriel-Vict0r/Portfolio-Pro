import React from "react";
import "../sass/components/contactMe.sass";
const ContactMe = () => {
  return (
    <section className="contact">
      <img src="src\img\contactMe\Elemento.svg" alt="" className="element-form"/>
      <div className="light-form"/>
      <form action="" method="post" className="contact-form">
        <h2>Contate-me</h2>
        <input
          type="text"
          name="name"
          id=""
          className="contact-input"
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          id=""
          className="contact-input"
          placeholder="E-mail"
        />
        <input
          type="text"
          name="assunto"
          id=""
          className="contact-input"
          placeholder="Assunto"
        />
        <input
          type="phone"
          name="telefone"
          id=""
          className="contact-input"
          placeholder="Celular"
        />
        <textarea
          name="mensagem"
          id=""
          cols="30"
          rows="3"
          placeholder="Mensagem"
        ></textarea>
        <input
          type="submit"
          name="enviar"
          id=""
          className="button-send"
          value="Enviar"
        />
      </form>
    </section>
  );
};

export default ContactMe;
