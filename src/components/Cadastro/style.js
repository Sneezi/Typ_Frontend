import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
`

export const Asidebar = styled.aside`
  background-color: #e5e5e5;
  height: 100vh;
  width: 50vw;

  img {
    margin: 20% 48px;
  }

  @media (min-width: 1367px) {
    img {
      margin: 25% 0px 0px 12px;
    }
  }

`

export const Main = styled.main`
  margin: 8% 0px 0px 5%;
  
  img {
    margin: 0px 0px 20px 25%;
  }

  h2 {
    width: 450px;
    margin: 0px 0px 10px 0px;
    font-weight: bolder;
    font-size: 30px;
    line-height: 1.6;
    padding: 0px 0px 0px 150px;
  }

  form {
    width: 400px;
    margin-left: 7%;
  }

  button {
    width: 400px;
    padding: 20px 0px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(90.14deg, #437FB6 13.06%, #337DC0 32.54%, #3687D0 63.78%, #3895EA 80.37%), #611BBA;
    border: none;
    border-radius: 5px;
  }

  p {
    cursor: pointer;
  }

  @media (min-width: 1367px) {
    margin: 13% 0px 0px 10%;

    img {
      margin-left: 20%;
    }

  }

`
