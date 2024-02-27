import './styles/footer.css'
import chest from '../assets/chest footer.png';
import diamond from '../assets/diamonds footer.png';
import { FaInstagram } from 'react-icons/fa';
import { RiDiscordLine } from 'react-icons/ri';
import { LuTwitter } from 'react-icons/lu';
import { AiOutlineYoutube } from 'react-icons/ai';
export const Footer:React.FC = () => {
  return (
    <footer>
        <div className="left">
            <img loading='lazy' src={chest} alt="" />
        </div>
        <div className='middle'>
            <div className="midSub">
             <a href="https://www.instagram.com/abay.dev_?igsh=N3duZGsyeXh3Mnk="><FaInstagram className='Ficon'/></a>
             <a href="https://discord.com/invite/735yzR4w"> <RiDiscordLine className='Ficon'/></a>
             <a href=""><LuTwitter className='Ficon'/></a>
             <a href=""><AiOutlineYoutube className='Ficon'/></a>
            </div>

            <div className="midtext">
                <span>Privacy</span><span>term of use</span>
            </div>
        </div>
        <div className="right">
            <img loading='lazy' src={diamond} alt="" />
        </div>
    </footer>
  )
}
