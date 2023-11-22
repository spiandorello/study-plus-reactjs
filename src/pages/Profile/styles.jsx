import styled from 'styled-components'


export const Container = styled.div`
  background: #fff;
  padding-bottom: 2rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  border-bottom: 1px solid #444;
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;

  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid #444;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  right: 0;
  left: 0;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  
  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;
