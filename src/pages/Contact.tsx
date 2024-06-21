//@ts-nocheck
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import SecureNavbar from "../components/SecureNavbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
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
          showToastMessage('Success! Your message has been sent.');
        },
        (error) => {
          console.log(error.text);
          showToastMessage('Error! Something went wrong.', true);
        }
      );
  };

  const showToastMessage = (message, isError = false) => {
    if (isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <SecureNavbar name="contact" />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={showToastMessage}
              >
                Send
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}
