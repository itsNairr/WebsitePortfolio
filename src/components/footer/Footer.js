import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';
import { useForm } from 'react-hook-form';
const { discordSend } = require('./discordSend.js')

const Footer = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const OnSubmit = (data, e) => {
    console.log(data)
    discordSend(`----------\n\nBeep Boop! You have recieved a new message from ${data.name}.\n\nThey have said:\n\n${data.message}\n\nTheir email is: ${data.email}\n\n----------`);
    alert("Sent Successfully!");
    e.target.reset();
}

  return (
    <div className="Footer">
      <div className="Contact">
        <div className="cText">Contact me!</div>
        <div className="SMText">Send a message.</div>
        <div className="DText">Send me a message directly!</div>
        <div className="CRText">Copyright © 2023 Hari Nair </div>
        <div className="Line1"></div>
        <div className="Line2"></div>
        <div className="LinkedIn"><SocialIcon url="https://www.linkedin.com/in/hari-nair-0a1627251/_blank" rel="noreferrer" target="_blank" bgColor='transparent' fgColor='white'/></div>
        <div className="GitHub"><SocialIcon url="https://github.com/itsNairr" rel="noreferrer" target="_blank" bgColor='transparent' fgColor='white'/></div>
        <div className="Instagram"><SocialIcon url="https://www.instagram.com/harinairr/" rel="noreferrer" target="_blank" bgColor='transparent' fgColor='white'/></div>
        <div className="Mail"><SocialIcon url="mailto:hariknair139@gmail.com" rel="noreferrer" target="_blank" bgColor='transparent' fgColor='white'/></div> 
        <form
        onSubmit={handleSubmit(OnSubmit)}
        >
        <textarea  //Name
        placeholder="Enter name" 
        maxLength={50} 
        className="nameBox" 
        type="text"
        {...register("name")}
        />
        <textarea //Email
        placeholder="Enter email" 
        maxLength={50} 
        className="emailBox" 
        type="text"
        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
        /> 
        {errors.email && <span class="Error">Invalid Email, Try again!</span>}
        <textarea //Message
        type="text" 
        rows="20" 
        cols="50" 
        placeholder="Enter message" 
        maxLength={1000} 
        className="messageBox"
        {...register("message")}
         />
        <button className="Send" >
        Send
        </button> 
       </form>
      </div>
    </div>
  )
}

export default Footer