import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';
import { useForm } from 'react-hook-form';
const { discordSend } = require('./discordSend.js')

const Footer = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const OnSubmit = (data) => {
    alert("Sent Successfully!");
    console.log(data)
    discordSend(`----------\n\nBeep Boop! You have recieved a new message from ${data.name}.\n\nThey have said:\n\n${data.message}\n\nTheir email is: ${data.email}\n\n----------`);
}

  return (
    <div class="Footer">
      <div class="Contact">
        <div class="cText">Contact me!</div>
        <div class="SMText">Send a message.</div>
        <div class="DText">Send me a message directly!</div>
        <div class="CRText">Copyright © 2023 Hari Nair </div>
        <div class="Line1"></div>
        <div class="Line2"></div>
        <div class="LinkedIn"><SocialIcon url="https://www.linkedin.com/in/hari-nair-0a1627251/_blank" target="_blank" bgColor='transparent' fgColor='white'/></div>
        <div class="GitHub"><SocialIcon url="https://github.com/itsNairr" target="_blank" bgColor='transparent' fgColor='white'/></div>
        <div class="Instagram"><SocialIcon url="https://www.instagram.com/harinairr/" target="_blank" bgColor='transparent' fgColor='white'/></div>
        <div class="Mail"><SocialIcon url="mailto:hariknair139@gmail.com" target="_blank" bgColor='transparent' fgColor='white'/></div> 
        <form
        onSubmit={handleSubmit(OnSubmit)}
        >
        <textarea  //Name
        placeholder="Enter name" 
        maxLength={50} 
        class="nameBox" 
        type="text"
        {...register("name")}
        />
        <textarea //Email
        placeholder="Enter email" 
        maxLength={50} 
        class="emailBox" 
        type="text"
        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
        /> 
        {errors.email && <span class="Error">Invalid Email, Try again!</span>}
        <textarea //Message
        type="text" 
        rows="20" 
        cols="50" 
        placeholder="Enter message" 
        multiline={true} 
        numberOfLines={10} 
        maxLength={1000} 
        class="messageBox"
        {...register("message")}
         />
        <button class="Send" >
        Send
        </button> 
       </form>
      </div>
    </div>
  )
}

export default Footer