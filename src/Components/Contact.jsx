import { useNavigation } from 'react-router-dom'
import Wrapper from '../Wrapper/Contact'
// import avatar from '../assets/contact.svg'
import { FaHandsHelping } from 'react-icons/fa'

const Contact = () => {
  const navigation = useNavigation()
  console.log(navigation)
  return (
    <Wrapper>
      <img
        src='https://res.cloudinary.com/dshhmplrj/image/upload/v1694604816/contact_owl0wg.svg'
        alt='avatar-img'
        className='avatar'
      />
      <h4>
        Thank you for taking the time to reach out.
        <FaHandsHelping className='hand-shake' />
      </h4>
      <form
        action='https://formsubmit.co/18ea6f73da8aa212de1871c813755b2b'
        method='POST'
        className='form'
      >
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name :
          </label>
          <input
            type='text'
            className='form-input'
            required
            name='name'
            id='name'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email :
          </label>
          <input
            type='email'
            className='form-input'
            required
            name='email'
            id='email'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='message' className='form-label'>
            Message :
          </label>
          <textarea
            placeholder='Leave a message here please'
            name='message'
            id='message'
            className='form-textarea'
          ></textarea>
        </div>

        <button type='submit' className='btn submit'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}
export default Contact
