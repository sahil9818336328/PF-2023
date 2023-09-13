/* eslint-disable react/prop-types */
import Wrapper from '../Wrapper/Hero'
import hero from '../assets/hero.svg'
import avatar from '../assets/avatar.svg'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { showMenu, setShowMenu } = useGlobalContext()
  return (
    <Wrapper>
      <div className='container'>
        {showMenu && (
          <div className='show-menu'>
            <a href='https://github.com/sahil9818336328'>Github</a>
            <Link
              to='/contact'
              className='btn'
              onClick={() => setShowMenu(false)}
            >
              say hello
            </Link>
          </div>
        )}
        <h3>Front-end, JavaScript & MERN Developer</h3>
        <p className='info'>
          A web developer who is making the Internet a more beautiful and
          positive place!
        </p>
        <img src={avatar} alt='avatar' className='avatar-img' />
        <img src={hero} alt='hero-image' className='hero-img' />
      </div>
    </Wrapper>
  )
}
export default Hero
