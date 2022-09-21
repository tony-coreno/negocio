import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <Copy className="copy">
        <p>Copyright © 2021. Todos los derechos reservados</p>
      </Copy>
    </>
  );
};

const Grid = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  /* box-shadow: 0px 2px 2px rgba(0,0,0,0.2); */
  //box-shadow: 0px 0px 1px 5px rgba(134, 128, 128, 0.753);
  //border: 1px solid #000;
`;

const Main = styled.footer`
  background-color: #006491;
color: #fff;
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
`;

const Copy = styled.div`
  background-color: #006491;
color: #fff;
  //background: #111;
  //height: 50px;
  display: grid;
  
  place-items: center;
`;

export default Footer;
