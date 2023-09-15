import Wrapper from '../Wrapper/RecentWork'
import projectOne from '../assets/ProjectsImages/project-1.svg'
import { FaFilePdf } from 'react-icons/fa6'

const RecentWork = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h4 className='title'>my recent work</h4>
        <p className='info'>
          These are my latest projects that I&apos;ve worked on. More coming
          soon.
        </p>
        <div className='projects'>
          <div className='project'>
            <div className='project-section-left'>
              <img src={projectOne} alt='project-one-image' />
            </div>
            <div className='project-section-right'>
              <h4 className='project-title'>Jobs Tracker</h4>
              <p className='info'>
                A simple job tracking software that allows you to perform CRUD
                operations with proper authentication and server side
                pagination.
              </p>
              <p className='stack'>
                Built using <span> MERN </span> stack.
              </p>
              <div className='btn-container'>
                <a
                  href='https://www.notion.so/JOB-TRACKER-MERN-STACK-7bbda1d00a1849fbbbe6deaf860262f0?pvs=4'
                  className='btn btn-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Documentation
                </a>
                <a
                  href='https://mern-jobs-track.onrender.com'
                  className='btn'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Visit site
                </a>
              </div>
            </div>
          </div>
          <a
            href='https://drive.google.com/file/d/12NphbNXiXXmbCf8VGS0gVI3wHcMcK2G4/view?usp=sharing'
            className='btn linkedin'
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>
              <FaFilePdf />
            </span>
            <span>Experience letter</span>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}
export default RecentWork
