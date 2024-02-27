import { useRef } from 'react'
import './styles/join.css'
import { useInView,motion } from 'framer-motion'

export const Join:React.FC = () => {
 const ref = useRef<HTMLDivElement>(null)
 const isInView = useInView(ref)

  return (
   <>
   <motion.section
     ref={ref}
     initial={{opacity:0,y:-100}}
     animate={isInView?{opacity:1,y:0}:{opacity:0,y:-100}}
     transition={{duration:1.5}}
     className="headings" id='join'>
      <div className="subJoin">
          <span>Join us via</span>
          <span className='last'>Discord</span>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <radialGradient id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8c9eff"></stop><stop offset=".368" stopColor="#889af8"></stop><stop offset=".889" stopColor="#7e8fe6"></stop><stop offset="1" stopColor="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse>
          </svg>
      </div>
      <svg className='crpcoin' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#ffc107" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#fff8e1" d="M17,34V14h8.199c2.41,0,4.234,0.465,5.48,1.395s1.867,2.293,1.867,4.086c0,0.98-0.25,1.844-0.746,2.59c-0.5,0.746-1.195,1.293-2.086,1.641c1.016,0.258,1.816,0.773,2.402,1.555C32.703,26.043,33,26.992,33,28.121c0,1.922-0.609,3.379-1.828,4.367S28.219,33.98,25.965,34H17z M21,22h4.363c2.063-0.035,3.098-0.824,3.098-2.445c0-0.906-0.262-1.559-0.785-1.957S26.328,17,25.199,17H21V22z M21,25v6h4.844C26.805,31,29,30.531,29,28.391S27.883,25.027,26,25H21z"></path><path fill="#fff8e1" d="M20 11h3v5h-3V11zM25 11h3v5h-3V11zM20 32h3v5h-3V32zM25 32h3v5h-3V32z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className='crpcoin2' x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
          <path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z"></path><path fill="#5c64c7" d="M25,2l14,22l-14,8V2z"></path><path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z"></path><path fill="#5c64c7" d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"></path><path fill="#2a3192" d="M25,18l14,6l-14,8V18z"></path>
      </svg>
      <span>Invest and manage all your crypto at one place.</span>
      <button><a href="https://discord.com/invite/735yzR4w">Join now</a></button>
   </motion.section>
   </>
  )
}
