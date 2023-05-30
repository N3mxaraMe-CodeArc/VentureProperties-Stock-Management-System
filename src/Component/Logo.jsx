import FaceBook from '../assets/logos/facebook.png'
import Whatsapp from '../assets/logos/whatsapp.png'
import Linkdin from '../assets/logos/linkedin.png'
import './css/Logo.css'

function Logo() {
  return ( 
    <div className='icon-tab'>
      <a className='icon' href="#"><img src={FaceBook} alt="" /> </a>
      <a className='icon' href="#"><img src={Whatsapp} alt="" /> </a>
      <a className='icon' href="#"><img src={Linkdin} alt="" /> </a>
    </div>
   );
}

export default Logo;