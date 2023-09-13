import Wrapper from '../Wrapper/UserInfo'
import UseAnimations from 'react-useanimations'
import activity from 'react-useanimations/lib/activity'
import airplay from 'react-useanimations/lib/airplay'
import infinity from 'react-useanimations/lib/infinity'
const UserInfo = () => {
  return (
    <Wrapper>
      <div className='user-info '>
        <h4>Hi, I&apos;m Sahil. Nice to meet you.</h4>
        <p className='text'>
          A creative front-end developer who specializes in building interactive
          user experiences and beautiful interfaces with React. Part of this
          process is writing thorough documentation and helping both users and
          other developers solve problems. I do this by primarily utilizing
          React, but love learning new languages, perfecting the small details
          of the web, and optimizing them for the best performance. I have a
          total experience of 4 years and working/professional experience of 2
          years in HTML, CSS, JavaScript, React, Redux and have also worked with
          NodeJs, ExpressJs, MongoDB, Mongoose for building several Api&apos;s,
          Thank you .
        </p>
      </div>
      <div className='services'>
        <div className='service service-one'>
          <UseAnimations
            animation={airplay}
            size={70}
            strokeColor='#7510F7'
            className='animate-icon'
          />

          <div className='title'>build projects</div>
          <p className='description '>
            Practicing building projects fosters practical application of
            knowledge and hones problem-solving skills, enhancing overall
            proficiency and confidence in the subject matter.
          </p>
        </div>
        <div className='service service-two'>
          <UseAnimations
            animation={infinity}
            size={70}
            strokeColor='#7510F7'
            fillColor='#7510F7'
            className='animate-icon'
          />
          <div className='title'>test the product</div>
          <p className='description '>
            Testing is crucial as it ensures software reliability, identifies
            and rectifies defects, and guarantees functionality meets
            requirements, ultimately delivering a robust and dependable product.
          </p>
        </div>
        <div className='service service-three'>
          <UseAnimations
            animation={activity}
            size={70}
            strokeColor='#7510F7'
            className='animate-icon'
          />
          <div className='title'>Debug It</div>
          <p className='description '>
            Debugging is essential as it rectifies errors and faults in code,
            enhancing program functionality, stability, and overall performance
            for a seamless user experience.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default UserInfo
