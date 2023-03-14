import React from "react";
import "../sass/components/widgets/contactMe.sass";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
  }
  return (
    <section className="contact">
      <img
        src="src\img\contactMe\Elemento.svg"
        alt=""
        className="element-form"
      />
      <div className="light-form" />
      <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <h2>Contate-me</h2>
        <input
          type="text"
          name="name"
          className="contact-input"
          placeholder="Nome"
          ref={register({
            required: true,
            maxLengh: 80,
            pattern: /^[A-Za-z]+$/i,
          })}
          // onChange={(e) => setName(e.target.value)}
          // value={name}
        />
        <input
          type="email"
          name="email"
          id=""
          className="contact-input"
          placeholder="E-mail"
          ref={register({required: true, maxLengh: 80})}
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />
        <input
          type="text"
          name="assunto"
          id=""
          className="contact-input"
          placeholder="Assunto"
          ref={register({required: true, maxLengh: 100})}
          // onChange={(e) => setSubject(e.target.value)}
          // value={subject}
        />
        <input
          type="tel"
          name="telefone"
          className="contact-input"
          placeholder="Celular"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <textarea
          name="mensagem"
          id=""
          cols="30"
          rows="3"
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
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
