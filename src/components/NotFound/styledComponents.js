import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 5vh;
  height: 95vh;
`
export const NotFoundRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 83%;
  margin-left: 17%;
  background-color: ${props => props.bgColor};
`
export const NotFoundImage = styled.img`
  height: 400px;
  width: 300px;
`
export const NotFoundTitle = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 15px;
  color: ${props => props.titleColor};
`
export const NotFoundDes = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 15px;
  color: ${props => props.desColor};
`
