import "./CantactForm.css";
import React from 'react';

const CantactForm = () => {
  return (
    <div className="section">
      <div className="container grid-container contact-content">
        <div>
          <h1 className="heading-secondary">
           <span>Címünk</span>
          </h1>

          <h4>
          Cím: 1124 Budapest, Zsámbéki utca 10.
          </h4> 

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.9109150170852!2d19.01097821207001!3d47.49164879578801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741de8249c9985f%3A0x85d5017a159c9330!2zQnVkYXBlc3QsIFpzw6FtYsOpa2kgdS4gMTAsIDExMjQ!5e0!3m2!1shu!2shu!4v1716032936117!5m2!1shu!2shu"
            width="600"
            height="250"
            allowfullscreen=""
            loading="lazy"
            title="Description of iframe content"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <p>
          Megközelítés tömegközlekedéssel: </p>
          <p>
          <ul className="list">
              <li>A 59-es és 59/A-s villamosokkal </li>
              <li>A 102-es, 105-ös, 112-es buszokkal az Apor Vilmos téri megállóig</li>
              <li>A 212- es busszal a Kiss János altábornagy utcai megállóig</li>

          </ul>
          </p>
          <p>
            <span className="special-word">Telefonunk:</span> 
            <ul>
              <li>+36 1 20 20 168</li>
              <li>+36 30 43 77 220</li>
          </ul>

          </p>

          <p>
            <span className="special-word">Email: </span> praxis@bogdangyenes.hu
          </p>
        </div>

        <div className="separator">
          <h1 className="heading-secondary">
          Üzenet <span>küldése</span>
          </h1>

          <form>
            <div className="form-field name-email">
              <div>
                <label>Vezetéknév</label>
                <input type="text" name="lastname" />
              </div>

              <div>
                <label>Keresztnév</label>
                <input type="email" name="firstname" />
              </div>
            </div>

            <div className="form-field name-email">
              <div>
                <label>Telefonszám</label>
                <input type="text" name="mobile" />
              </div>

              <div> 
                <label>Születési dátuma</label>
                <input type="date" name="date" style={{ fontSize: '18px' }}/>
              </div>
            </div>

            <div className="form-field name-email">
              <div>
                <label>Cím</label>
                <input type="text" name="address" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" name="email" />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Üzenet</label>
                <textarea type="text" name="message" />
              </div>
            </div>
          </form>

          <button>Küldés</button>
        </div>
      </div>
    </div>
  );
};

export default CantactForm;