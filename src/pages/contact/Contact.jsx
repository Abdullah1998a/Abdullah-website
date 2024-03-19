import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Success } from "../components";
import "./contact.css";

export default function Contact({ content }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    error_name: {
      error_text: "",
      error_show: false,
    },
    error_email: {
      error_text: "",
      error_show: false,
    },
    error_message: {
      error_text: "",
      error_show: false,
    },
  });
  const {
    header_contact,
    form_labels: { name, email, message, sendBtn },
    success_message,
    form_errors: { error_name_text, error_email_text, error_message_text },
  } = content;
  const patterns = {
    NAME: /^[a-zأ-يًٌَُِّْ ]{2,30}$/i,
    EMAIL: /^([a-z\d.-]+)@([a-z\d-]{2,8})\.([a-z]{2,8})$/,
    MESSAGE: /^[a-zأ-يًٌَُِّْ \d]{2,200}$/i,
  };
  const handleData = (event) => {
    if (event.target.name === "fullName") {
      if (!patterns.NAME.test(event.target.value)) {
        setError((prevError) => {
          return {
            ...prevError,
            error_name: {
              error_text: error_name_text,
              error_show: true,
            },
          };
        });
      } else {
        setError((prevError) => {
          return {
            ...prevError,
            error_name: {
              error_text: "",
              error_show: false,
            },
          };
        });
      }
    }
    if (event.target.name === "email") {
      if (!patterns.EMAIL.test(event.target.value)) {
        setError((prevError) => {
          return {
            ...prevError,
            error_email: {
              error_text: error_email_text,
              error_show: true,
            },
          };
        });
      } else {
        setError((prevError) => {
          return {
            ...prevError,
            error_email: {
              error_text: "",
              error_show: false,
            },
          };
        });
      }
    }
    if (event.target.name === "message") {
      if (!patterns.MESSAGE.test(event.target.value)) {
        setError((prevError) => {
          return {
            ...prevError,
            error_message: {
              error_text: error_message_text,
              error_show: true,
            },
          };
        });
      } else {
        setError((prevError) => {
          return {
            ...prevError,
            error_message: {
              error_text: "",
              error_show: false,
            },
          };
        });
      }
    }
    setData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let formValues = [...formData.values()];
    if (formValues.includes("")) {
      if (data.fullName === "") {
        setError((prevError) => {
          return {
            ...prevError,
            error_name: {
              error_text: error_name_text,
              error_show: true,
            },
          };
        });
      }
      if (data.email === "") {
        setError((prevError) => {
          return {
            ...prevError,
            error_email: {
              error_text: error_email_text,
              error_show: true,
            },
          };
        });
      }
      if (data.message === "") {
        setError((prevError) => {
          return {
            ...prevError,
            error_message: {
              error_text: error_message_text,
              error_show: true,
            },
          };
        });
      }
    } else {
      let data = Object.fromEntries(formData);
      setData(data);
      setShow(true);
      setTimeout(() => {
        window.scrollTo(0, 0);
        navigate("/");
      }, 4000);
    }
  };
  return (
    <section className="contact">
      <header>
        <h1>{header_contact[0]}</h1>
        <span>{header_contact[1]}</span>
      </header>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className={error.error_name.error_show ? "active" : null}>
          <label htmlFor="fullName">{name}</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            onInput={handleData}
            value={data.fullName}
            autoFocus
            required
          />
          <span>
            {error.error_name.error_show && error.error_name.error_text}
          </span>
        </div>
        <div className={error.error_email.error_show ? "active" : null}>
          <label htmlFor="email">{email}</label>
          <input
            type="email"
            name="email"
            id="email"
            onInput={handleData}
            value={data.email}
            required
          />
          <span>
            {error.error_email.error_show && error.error_email.error_text}
          </span>
        </div>
        <div className={error.error_message.error_show ? "active" : null}>
          <label htmlFor="message">{message}</label>
          <textarea
            name="message"
            id="message"
            onInput={handleData}
            value={data.message}
            required
          ></textarea>
          <span>
            {error.error_message.error_show && error.error_message.error_text}
          </span>
        </div>
        <button
          type="submit"
          className={
            error.error_name.error_show ||
            error.error_email.error_show ||
            error.error_message.error_show
              ? "error"
              : null
          }
        >
          {sendBtn}
        </button>
      </form>
      {show && (
        <Success
          fullName={data.fullName}
          setData={setData}
          setShow={setShow}
          thank={success_message[0]}
        >
          {success_message[1]}
        </Success>
      )}
    </section>
  );
}
