import React from 'react'
import './Contact.css'
import msg_icon from "../../../assets/msg-icon.png"
import mail_icon from "../../../assets/mail-icon.png"
import phone_icon from "../../../assets/phone-icon.png"
import location_icon from "../../../assets/location-icon.png"
import white_arrow from "../../../assets/white-arrow.png"

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b74dbe6-14f2-4e21-ab3d-4297486de75c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad voluptatem alias ipsa fuga officiis qui aspernatur magnam suscipit! Assumenda fugit eum harum quis temporibus, quibusdam expedita, dicta saepe quae cum atque maxime, ipsam quo aliquam nulla iste hic quos!</p>
            <ul>
                <li><img src={mail_icon} alt="" />Edusity@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +91 5468645863</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile number' required/>
                <label htmlFor="">Write your messages here</label>
                <textarea name="message" id=""rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact