import { useState, useEffect } from "react";
import Link from "next/link"
import styles from "./about.module.css"
import Skills from "../../Components/Skills";

const About = () => {
  const skills = ["HTML", "CSS", "SASS","Tailwind CSS","Bootstrap","Styled Components", "Material UI", "Javascript", 
  "React.js", "Node.js", "express.js","SQL", "PostgreSQL"]
  const [appear, setAppear] = useState(false)

  useEffect(()=>{
    setAppear(true)
  },[])
  const apearanim =(i)=>{
    return {
      // opacity: appear? 1: 0,
      // background: appear? "white": "black",
      
      marginLeft: appear? 0: "-300%",
      transition: `ease-in ${i/5}s`
    }
  }
  return (
    <main className={styles.aboutpg} id="about">
        <h1>About Me</h1>
        
        <section className={styles.abouttxt}>
          <p >
            I am a passionate Software Engineer and Frontend Developer currently seeking roles in frontend development. I have a strong interest in web engineering, JavaScript, and Ecommerce. I’m currently honing my skills in JavaScript, Reactjs, and Nodejs.

            I love sharing knowledge and am a firm believer in the power of documentation. I’ve been creating frontend designs and mockups using React.js, HTML, CSS, plain JavaScript, Node.js, MongoDB, SQL (PostgreSQL), RestFul APIs, and Typescript. You can check out some of my work on my 
          <Link href="https://github.com/TesleemOla">GitHub</Link>.
          I am always open to collaborating on open-source projects, participating in hackathons, and exploring internships and entry-level opportunities.
          </p>
          <p>
            My job interests include roles as a Software Engineer, Front Engineer, UI Engineer, or Backend development (Intern or Junior level). If you’d like to get in touch, feel free to contact me via 
            <Link href="mailto:oladepotesleem5@gmail.com">email</Link> or 
          <Link href="https://www.linkedin.com/in/tesleemoladepo/">LinkedIn</Link>.


            As a frontend developer, I take pleasure in crafting digital entities that inhabit the internet, be it websites, applications,
            or anything in between. 
          </p>
          <p className={styles.skpara}>
            {
              skills.map((skill,i)=> <Skills key={i} item={skill} styler={apearanim(i)} className={styles.skills}  />)
            }
          </p>
        </section>
        <section className={styles.abouttxt}>
          <p className={styles.exp}>Experience</p>
          <div>
            <p>IKOOK</p>
            <p>London, UK (Remote)</p>
            <div>
            <p>Frontend Intern <span>Oct 2022 - February 2023</span></p>
            <p>Frontend Developer <span>March 2023 - October 2023</span></p>

            </div>
          </div>
        </section>
        
        </main>
    
  )
}
export default About;
