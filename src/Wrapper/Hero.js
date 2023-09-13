import styled from 'styled-components'

const StyledHeroWrapper = styled.section`
  .container {
    margin-top: 7rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      color: #141c3a;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: var(--letter-spacing);
      line-height: 1.2;

      @media screen and (max-width: 675px) {
        font-size: 1.5rem;
      }
    }

    .show-menu {
      display: flex;
      flex-direction: column;
      margin-top: -5rem;
      margin-bottom: 5rem;
      gap: 1rem;

      @media screen and (min-width: 951px) {
        display: none;
      }
      @media screen and (max-width: 400px) {
        .btn {
          padding: 0.5rem 1rem;
        }
      }
    }

    .info {
      margin-top: 2rem;
      font-size: 1.2rem;
      letter-spacing: var(--letter-spacing);
      color: var(--grey-500);
      line-height: 1.5;

      @media screen and (max-width: 675px) {
        font-size: 1rem;
      }
    }

    .avatar-img {
      margin-top: 4rem;
      width: 15%;
      min-width: 70px;
      display: block;
    }

    .hero-img {
      margin-top: 4rem;
      width: 50%;
      min-width: 250px;
      margin-bottom: 1rem;
      display: block;
    }
  }
`

export default StyledHeroWrapper
