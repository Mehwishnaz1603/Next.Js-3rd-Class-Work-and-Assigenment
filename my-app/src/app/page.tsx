import Link from "next/link";
import Image from "next/image";

import  image  from "https://img.freepik.com/premium-photo/3d-rendered-photo-cute-hijab-girl_804007-11190.jpg";

export default function header() {
  return (
    <div className="main-Container">
<div className="Header">
  <ul>
    <li> <Link href="/home"> Home </Link></li>
    <li> <Link href="/about"> About </Link></li>
    <li> <Link href="/contact-us"> Contact Us </Link></li>
    <li> <Link href="/skills"> Skills </Link></li>

  </ul>
  </div>
    
    <div className="parentContainer">
      <div className="childContainer">
       Hey ,
       <br />
       My Name Is <span className="span"> MehwishNaz </span>
       <br /> 
       I am Next Js Developer
       
       <div className="intro">
       
       <p>
      Hello! I am Mehwish Naz, a passionate Next.js developer with a knack for creating dynamic, high-performance web applications. <br />
      With a strong foundation in JavaScript and React, I specialize in building scalable, user-friendly interfaces that enhance <br />
      user experiences. I love leveraging Next.js's powerful features like server-side rendering and static site generation to <br />
      optimize performance and SEO. <br />
      With 2 years of experience in web development, I have successfully delivered projects across various domains,collaborating <br />
      closely with designers and stakeholders to bring ideas to life. Whether it’s crafting responsive layouts or implementing complex 
      functionalities, <br />
      I thrive on solving challenges and staying up-to-date with the latest trends in the JavaScript ecosystem. 

</p>
</div>
      </div>
      <div className="image">
        <img src="https://img.freepik.com/premium-photo/3d-rendered-photo-cute-hijab-girl_804007-11190.jpg" alt="Error" />
      </div>
    </div>
  
</div>

 );
} 
