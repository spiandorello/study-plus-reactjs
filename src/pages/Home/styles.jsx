import styled from 'styled-components'

export const Publication = styled.div`
  background: #fff;
  border-radius: 0.4rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`

export const PublicationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  & > textarea {
    resize: none;
    min-height: 80px;
  }
`

export const PostsList = styled.div`
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  
  & > div + div {
    border-top: 1px solid #444;
  }
`
