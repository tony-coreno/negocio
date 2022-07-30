import styled from "styled-components";

const PizzaInfo = () => {
  return (
    <>
      <Main>
        <Grid>
          <Pizza>
            <Imagen src="americana.png" alt="Hola" />
          </Pizza>
          <div>
            <h2 className="mt-4">Pizza Peperoni !</h2>
            <Promo></Promo>
          </div>
        </Grid>
      </Main>
    </>
  );
};

const Grid = styled.div`
  width: 90%;
  padding: 5px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  /* box-shadow: 0px 2px 2px rgba(0,0,0,0.2); */
  box-shadow: 0px 0px 1px 5px rgba(134, 128, 128, 0.753);
  //border: 1px solid #000;
`;

const Main = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const Pizza = styled.div`
  //border: 1px solid #000;
  width: 80%;
  transition: all 1s linear;
  img:hover {
    transform: scale(1.1);
  }
`;

const Imagen = styled.img`
  object-fit: cover;
  width: 90%;
`;

const Promo = styled.div`
  width: 250px;
  height: 250px;
  //background: linear-gradient(55deg, #fa9600, #f4c030);
  background-color: #fff;
  box-shadow: 0px 0px 1px 1px rgba(134, 128, 128, 0.753);

  //border: 1px solid #000;
`;

export default PizzaInfo;
