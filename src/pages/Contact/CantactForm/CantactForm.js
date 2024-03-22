import React from "react";
import "./CantactForm.css";

import bgImage from "../../../assets/cake.jpg";

const CantactForm = () => {
  return (
    <div className="section">
      <div className="container grid-container contact-content">
        <div>
          <h1 className="heading-secondary">
            get in <span>touch</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet,{" "}
            <span className="special-word">consectetuer</span> adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient.
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.748501056347!2d19.05393087587909!3d47.49481259569088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc43dba32125%3A0x60530820b4b6b65e!2sBudapest%2C%20Vitkovics%20Mih%C3%A1ly%20u.%203-5%2C%201052!5e0!3m2!1shu!2shu!4v1711101488342!5m2!1shu!2shu"
            width="600"
            height="250"
            allowfullscreen=""
            loading="lazy"
            title="Description of iframe content"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque{" "}
            <span className="special-word">penatibus</span> et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.
          </p>

          <p>
            Nulla consequat massa quis enim. Donec pede justo,{" "}
            <span className="special-word">fringilla</span> vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae, justo.
          </p>
        </div>

        <div>
          <h1 className="heading-secondary">
            Mail <span>us</span>
          </h1>

          <form>
            <div className="form-field name-email">
              <div>
                <label>Name</label>
                <input type="text" name="name" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" name="email" />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Subject</label>
                <input type="text" name="subject" />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Message</label>
                <textarea type="text" name="message" />
              </div>
            </div>
          </form>

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CantactForm;
