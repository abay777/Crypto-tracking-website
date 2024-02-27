import './styles/features.css';
import { motion } from 'framer-motion';
import sparkle from '../assets/sparkles.png'
import { TfiWallet } from 'react-icons/tfi'
import { MdSelectAll } from 'react-icons/md'
import { GiCoins } from 'react-icons/gi'
import image from '../assets/feature hero.png'
import piggy from '../assets/piggy feature.png'
import { GiReceiveMoney,GiCash,GiStack } from 'react-icons/gi'
import { useInView } from 'framer-motion';
import {  useRef } from 'react';

export const Features:React.FC = () => {

    const ref=useRef(null)
    const isInView = useInView(ref);


  return (
    <motion.div
    ref={ref}
    initial={{opacity:0,y:200}}
    animate={isInView?{ opacity: 1 ,y:0} : { opacity: 0 ,y:200}}
    transition={{duration:2}}>
    <div className="featureHeads" id='features'>
    <img loading='lazy' src={sparkle} alt="" />
    <h2 className='featureHead' >Features</h2>
    <img loading='lazy' src={piggy} alt="" />
    </div>
    <section className="featuresContainer">
      <div className="cardsContainerLeft aside">
        <div className="card">
                <div className="iconContainer">
                    <TfiWallet className='icon' style={{color:'white'}}/>
                </div>
                <div className="textAreas">
                    <span>Connect your wallet</span>
                    <span>Use Trust Wallet, Metamask or to connect to the app.</span>
                </div>
            </div>
            <div className="card">
                <div className="iconContainer">
                    <MdSelectAll className='icon' style={{color:'white'}}/>
                </div>
                <div className="textAreas">
                    <span>SELECT YOUR QUANTITY</span>
                    <span>Upload your crypto and set a title, description and price.</span>
                </div>
            </div>

            <div className="card">
                <div className="iconContainer">
                    <GiCoins className='icon' style={{color:'white'}}/>
                </div>
                <div className="textAreas">
                    <span>CONFIRM TRANSACTION</span>
                    <span>Earn by selling your crypto on our marketplace.</span>
                </div>
            </div>


      </div>

       <img src={image} alt="" />

      <div className="cardsContainerRight aside">
        <div className="card">
                <div className="iconContainer">
                    <GiReceiveMoney className='icon'style={{color:'white'}}/>
                </div>
                <div className="textAreas">
                    <span>RECEIVE YOUR OWN NFTS</span>
                    <span>Invest all your crypto at one place on one platform.</span>
                </div>
            </div>
            <div className="card">
                <div className="iconContainer">
                    <GiCash className='icon' style={{color:'white'}}/>
                </div>
                <div className="textAreas">
                    <span>TAKE A MARKET TO SELL</span>
                    <span>Discover, collect the right crypto collections to buy or sell.</span>
                </div>
            </div>

            <div className="card">
                <div className="iconContainer">
                    <GiStack className='icon' style={{color:'white'}}/>
                </div>
                <div className="textAreas">
                    <span>DRIVE YOUR COLLECTION</span>
                    <span>We make it easy to Discover, Invest and manage.</span>
                </div>
            </div>


      </div>
    </section>

    </motion.div>
  )
}
