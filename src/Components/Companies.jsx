import { LazyLoadImage } from 'react-lazy-load-image-component'
import Wrapper from '../Wrapper/Companies'
import fitbotsOkrs from '../assets/CompanyLogos/fitbotsOkrs.svg'

const Companies = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h3 className='info '>
          I&apos;m proud to have worked with some awesome companies:
        </h3>
        <div className='company'>
          <LazyLoadImage src={fitbotsOkrs} effect='blur' />

          <p className='description'>
            A goal-setting / strategy execution framework.
          </p>
          <a
            href='https://www.fitbots.com/'
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit site
          </a>
        </div>
      </div>
    </Wrapper>
  )
}
export default Companies
