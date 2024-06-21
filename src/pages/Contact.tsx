import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";
import SecureNavbar from "../components/SecureNavbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rt00d6e",
        "template_ytxk307",
        form.current,
        "JBkqlgXXxXYm9yAEa"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  return (
    <>
    <SecureNavbar name="contact" />
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" onClick={showToastMessage} />
        <ToastContainer />
      </form>
    </div>
    <Footer />
    </>
  );
};

