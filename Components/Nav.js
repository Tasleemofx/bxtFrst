import anime from 'animejs';
import Link from 'next/link'
import styles from "./Styles/nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"
import { useState} from "react"
import { useRouter } from "next/router"

const Nav = () => {
  const router = useRouter()

  // const navanimation = anime({
  //   target: 'nav',
  //   opacity: 0,
  //   duration: 800,
  //   delay: 0
  // });
  const [isOpen, setIsOpen] = useState(false)
  const [links, setLinks] = useState(["Home", "About", "Projects", "Contact"])


  return (
    <nav className={styles.navbar}>
      <Link href="/" classname={styles.logo}>
        <h1>{"<Tesleem/>"}</h1>
      </Link>
      <div className={styles.navbarsm}>
        {!isOpen?

        <GiHamburgerMenu onClick={()=> setIsOpen(!isOpen)} className={styles.open}/>:
        <div>

            <FaTimes onClick={() => setIsOpen(!isOpen)} className={styles.close} />
          
          <div className={styles.dropdown} >
            {
              links.map((item,i)=> {

                return <Link key ={i} href={item === "Home"? "/": `/${item}` } >
                  
                  <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                    {item}
                  </div>
                </Link>
              })
            }

          </div> 
         
        </div>
}
      </div>
      <div className={styles.navbarlg}>
        {
          links.map((item, i) => {
            
            return <Link key={i} href={item === "Home" ? "/" : `/${item}`}>
              <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                {item}
              </div>
            </Link>
          })
        }
      </div>
        
    </nav>
  )
}

export default Nav