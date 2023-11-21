import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #fff;
  top: 0;
  position: sticky;
  position: -webkit-sticky;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 52rem;
`

export const SearchInput = styled.input`
  padding: 0.5rem 0.2rem;
  border-radius: 0.5rem;
  height: 40px;
  width: 280px;
  border: 1px solid #F0F2F5;
  background: #F0F2F5;

  &::placeholder {
    color: #8E8E8E;
  }
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 1.5rem;
`
