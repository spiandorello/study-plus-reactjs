import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 2rem;
`

export const Banner = styled.div`
  background: red;
  margin-bottom: 1rem;
  border-radius: 1rem;
  

  display: flex;
  padding: 2rem 1rem;
  gap: 2rem;
`

export const SchoolSubject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
`

export const SubjectInfo = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 0.8rem;
  
  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;  
  }
`

export const Avatar = styled.div`
  flex-shrink: 0;
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid #444;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  
  border-radius: 50%;
`;


export const ExamList = styled.div`
  gap: 1rem;
  display: flex;
  background: #fff;
`

export const ExamContainer = styled.div``
