import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <>
      <ContenedorHeader>
        <Titulo><img src="logo.png" />World Pizza</Titulo>
        <Menu>
          <NavLink to="/">Acerca De</NavLink>
          <NavLink to="/especialidades">Especialidades</NavLink>
          <NavLink to="/mis-pedidos">Mis Pedidos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </Menu>
      </ContenedorHeader>
    </>
  );
};

const ContenedorHeader = styled.header`
  height:55px;
  text-align: center;
  margin-bottom: 60px;
  background-color: #006491;
  //background: linear-gradient(45deg, #036EB7, #64EAFF); 
  //background: linear-gradient(45deg, #FA9600, #f4c030);

  
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #fff;
  //box-shadow: 0px 0px 2px rgba(255,255,255,0.8);
`;

const Titulo = styled.h1`
  padding: 10px;
  color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
  text-transform: uppercase;
  img {
    width:10%;
  }
`;

const Menu = styled.nav`
display:flex;
  a {
    align-items:center;
    text-decoration: none;
    //color: #3992ff;
    color: #fff;
    padding: 10px 20px;
    margin-bottom:10px; 
    font-size: 15px;
  }
  a:hover {
    //color: #052c48;
    color: #fff;
    cursor: pointer;
  }
  a.active {
    border-bottom: 1px solid #fff;
    padding-bottom: 1px;
  }
`;

export default Header;
