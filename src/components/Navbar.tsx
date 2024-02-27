import './styles/navbar.css'
import { RiDiscordLine } from 'react-icons/ri' 
import {FiTwitter } from 'react-icons/fi'
import { useCallback , useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAnimation} from 'framer-motion'
import { useInView } from 'framer-motion'
export const Navbar:React.FC = () => {

  const isMobile = window.innerWidth <760;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const burgerRef = useRef<HTMLDivElement>(null);
  const rightsectionRef = useRef<HTMLDivElement | null>(null);
  const navStickyRef = useRef<HTMLDivElement>(null);
  const rightSectionControls = useAnimation();
  const inView = useInView(rightsectionRef)

  const handleBurger:React.UIEventHandler= ()=>{
    if(!isOpen){
      burgerRef.current!.classList.add('open');
      rightsectionRef.current!.classList.add('rightSection2');
      isMobile?rightSectionControls.start({ x: '0' }):null;
      setIsOpen(true) 
    }else{
      burgerRef.current!.classList.remove('open');
      rightsectionRef.current!.classList.remove('rightSection2');
      isMobile?rightSectionControls.start({ x: '-100%' }):null;
      setIsOpen(false)
    }
  }
  const handleScroll = useCallback(() => {
    const scrollWatcher = document.createElement('div');
    scrollWatcher.setAttribute('data-scroll-watcher', '');

    navStickyRef.current?.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
      
      navStickyRef.current?.classList.toggle('sticky', !entries[0].isIntersecting);
    });

    navObserver.observe(scrollWatcher);
  }, []);

  useEffect(() => {
    handleScroll(); 
  }, );

  useEffect(() => {
    if (inView) {
      rightSectionControls.start({ opacity: 1, x: 0 });
    }
  }, [inView, rightSectionControls]);

  

  return (
    <nav className='navbar' 
    ref={navStickyRef}
    >
        <div className="logoContainer">
           <span>CRIPZY</span>
           <div className='burger-menu '
           ref={burgerRef} 
           onClick={handleBurger}>
            <div className='burger'></div>
           </div>
        </div>
        <motion.div 
        className="rightSection"
        initial={{ opacity: 0, x: isMobile ? '-100%' : 0 }}
        animate={rightSectionControls}
        exit={{ opacity: 0, x: '-100%' }}
        ref={rightsectionRef}>
            <ul className='navLinks'>
                <li><Link to={'/'} onClick={handleBurger} >Home</Link></li>
                <li><a onClick={handleBurger} href="#market">Market</a></li>
                <li><a onClick={handleBurger} href="#features">Features</a></li>
                <li><a onClick={handleBurger} href="#join">Join</a></li>
            </ul>

             <div className='navConnect'>
                <FiTwitter className='Nicon'/>
                <RiDiscordLine className='Nicon'/>
             </div>
        </motion.div>
    </nav>
  )
}

