import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_2f7eucd",        // ✅ Service ID
        "template_jf567e9",       // ✅ Template ID
        formRef.current,
        "pYnJDuspmKnRxV3xo"       // ✅ Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          formRef.current.reset();
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="contact" data-reveal>
      <SectionHeader
        title="Contact Me"
        subtitle="Let’s connect — feel free to send me a message"
      />

      {/* CONTACT FORM */}
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {status && <p className="form-status">{status}</p>}
      </form>

      {/* CONTACT DETAILS */}
      <div className="contact-box">
        <p>
          📧 Email:
          <a href="mailto:yogeswariboreddi@gmail.com">
            yogeswariboreddi@gmail.com
          </a>
        </p>

        <p>
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/yogeswari-boreddi-2161022a7/"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/B-YOGESWARI"
            target="_blank"
            rel="noreferrer"
          >
            View Repositories
          </a>
        </p>
      </div>
    </section>
  );
}