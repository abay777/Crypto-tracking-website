import './styles/topsection.css'
import { motion } from 'framer-motion'
import neonbit from '../assets/Screen-Shot-2015-11-04-at-11.07.29-removebg-preview.png'
import bitcoins from '../assets/bitcoin.png'
import coins from '../assets/coins.png'


export const TopSection:React.FC = () => {
  return (
    <motion.section className="topsectionContainer" 
       id='home'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}>

       <div className="topsubContainer">
       <img className='img' loading='lazy'  src={neonbit} alt="loading" />
       <h1>Explore the Future of Finance <span>Navigate 
        and Invest in Digital Assets.</span> </h1>
        <img className='img2' loading='lazy' src={bitcoins} alt="loading" />
        <img src={coins} className='coins'  alt="loading" />
       </div>
       
    </motion.section>

  )
}

