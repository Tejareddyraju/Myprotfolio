import React from 'react'
import './Contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>   <div className='about'>
      <h1>Contact me</h1>
    </div>
      <div className='mySelf'>
        <h2>About MySelf.</h2>
        <p>I am a passionate individual with a keen interest in building web applications and continuously learning new technologies. My technical skills include proficiency in JavaScript, React.js, Python, and SQL, allowing me to develop innovative and efficient solutions. I thrive on challenges and enjoy solving complex problems, leveraging my problem-solving skills to create impactful solutions. Outside of the technical realm, I find joy in extracurricular activities such as watching movies and playing games, which provide relaxation and inspiration. I am always eager to expand my knowledge, collaborate with like-minded individuals, and contribute positively to any project or team.</p>
      </div>
      <div className='icon-contacts'>
       
        <div className='icons'>
          <p><a href='whatsapp://send?phone=+916302112451' target='_blank' rel='noreferrer'><FaWhatsapp className='wats' /></a></p>
          <p><a href='whatsapp://send?phone=+916302112451' target='_blank' rel='noreferrer'>6302112451</a></p>
        </div>
        <div className="icons-2">
          <p><a href="mailto:tejareddyraju7@gmail.com"><BiLogoGmail className='wats' /></a></p>
          <p><a href="mailto:tejareddyraju7@gmail.com">tejareddyraju7@gmail.com</a></p>
        </div>
      </div>
    <div className="footer">
      <h2>Thank You For Visiting !</h2>
    </div>
    </>
  )
}

export default Contact