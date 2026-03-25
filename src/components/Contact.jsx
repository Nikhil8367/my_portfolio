import Button from "./Buttons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section id="contact" className="fade-in">
        <h2>Get In Touch</h2>

        <p>
          I'm always interested in hearing about new projects, opportunities,
          and ways to collaborate. Whether you have a question or just want to
          say hello, feel free to reach out!
        </p>

        <div className="contact-buttons">

          <Button
            text={
              <>
                <FaEnvelope style={{ marginRight: "8px" }} />
                Email
              </>
            }
            transport="https://mail.google.com/mail/?view=cm&fs=1&to=repalle.nikhil693@gmail.com"
          />

          <Button
            text={
              <>
                <FaGithub style={{ marginRight: "8px" }} />
                GitHub
              </>
            }
            transport="https://github.com/Nikhil8367"
          />

          <Button
            text={
              <>
                <FaLinkedin style={{ marginRight: "8px" }} />
                LinkedIn
              </>
            }
            transport="https://www.linkedin.com/in/nikhil-repalle-283879293/"
          />

        </div>
      </section>

      <footer>
        <p>
          &copy; 2026 <strong>Nikhil Repalle</strong> - All Rights Reserved |
          Full-Stack Developer & Problem Solver
        </p>
        <p style={{ marginTop: "10px", fontSize: "0.9em", opacity: 0.7 }}>
          Crafting elegant solutions, one line of code at a time.
        </p>
      </footer>
    </>
  );
}
