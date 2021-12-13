import styled from 'styled-components'


export const Container = styled.div`
  margin: 30px 0;
  text-align: center;

  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }
  h1 {
    font-style: italic;
  }
`
export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid #c0c0c0;
  border-radius: 10px;

  h2 {
    font-style: italic;
  }

  li {
    font-size: 16px;
    font-style: italic;
    line-height: 30px;
    list-style: none;
  }
  div {
    display: flex;
    justify-content: space-around;

    img {
      width: 200px;
      border-radius: 10px;
    }
  }
`