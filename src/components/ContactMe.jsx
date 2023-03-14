import React from "react";
import "../sass/components/widgets/contactMe.sass";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";

const schema = yup.object({
  name: yup
    .string("O campo deve conter apenas letras")
    .required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  phone: yup.string().required("O telefone é obrigatório"),
  subject: yup
    .string()
    .min(2, "o assunto deve ter no mínimo duas letras")
    .required("O assunto é obrigatório"),
  message: yup
    .string()
    .min(2, "A mensagem deve ter no mínimo duas letras")
    .required("A mensagem é obrigatória"),
});
const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function sendEmail(data) {
    console.log(data);
  }
  console.log(errors);
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
        <div className="field">
          <input
            type="text"
            className="contact-input"
            placeholder="Nome"
            {...register("name")}
          />
          <span className="errorMessage">{errors.name?.message}</span>
        </div>
        <div className="field">
          <input
            type="text"
            className="contact-input"
            placeholder="E-mail"
            {...register("email")}
          />
          <span className="errorMessage">{errors.email?.message}</span>
        </div>

        <div className="field">
          <input
            type="text"
            id=""
            className="contact-input"
            placeholder="Assunto"
            {...register("subject")}
          />
          <span className="errorMessage msgSubject">
            {errors.subject?.message}
          </span>
        </div>
        <div className="field">
          <InputMask
            type="text"
            className="contact-input"
            placeholder="Telefone"
            mask="(99) 99999-9999"
            {...register("phone")}
          />
          <span className="errorMessage msgSubject">
            {errors.phone?.message}
          </span>
        </div>
        <div className="field">
          <textarea
            id=""
            cols="30"
            rows="3"
            placeholder="Mensagem"
            {...register("message")}
          ></textarea>
          <span className="errorMessage msgMessage">{errors.message?.message}</span>
        </div>
        <input type="submit" className="button-send" value="Enviar" />
      </form>
    </section>
  );
};

export default ContactMe;
