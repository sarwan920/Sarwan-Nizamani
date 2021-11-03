import React, { useRef , useState} from "react";
import "./Contact.css";
import Fade from "react-reveal";

import emailjs from "emailjs-com";
import { ClipLoader } from 'react-spinners'

const Contact = () => {
  const form = useRef();
  const [loading , setLoading] = useState(false);
  const [ emailSent , setEmailSent ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
   setLoading(true);

    emailjs
      .sendForm(
        "service_snvj7xf",
        "template_878tgyg",
        form.current,

        "user_SFVgJ1n5Pat1U1wHM586b"
      )
      .then(
        (result) => {
          // alert("Your Message has been Sent!");
          setLoading(false);
          document.getElementById("myForm").reset();
          setEmailSent(true);

          setTimeout(()=>{
            setEmailSent(false);
          },10000)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="heading">
          <Fade bottom>
            <h1>Contact Me</h1>
          </Fade>
        </div>

        <form  id="myForm" ref={form} onSubmit={sendEmail} autocomplete="off">
        {/* <form id="myForm" ref={form} autocomplete="off"> */}
          <input
            autoComplete="off"
            required
            placeholder="Full Name"
            type="text"
            name="full_name"
          />

          <input
            placeholder="Email"
            required
            autoComplete="off"
            type="email"
            name="email"
          />

          <input
            type="phone"
            autoComplete="off"
            placeholder="Phone No"
            name="phone"
          />

          <textarea
            rows="8"
            required
            autoComplete="off"
            typeof="text"
            placeholder="Message"
            name="message"
          />
          {/* <input  type="submit" value="Send" /> */}
            { emailSent && <p>You message has been recieved!</p>}
          <button type="submit" value="Send" style={{display:"flex" , flexDirection:"row" , justifyContent:"center" }} className="contact__button" >
          { loading && <ClipLoader  loading={loading} size={30} />}
           {!loading && "Submit"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
