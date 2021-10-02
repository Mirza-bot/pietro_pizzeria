<template>
  <div>
    <div class="menu__page">
      <h1>Menü</h1>
      <div class="dish__card">
        <h3>Pizza Venezia</h3>
        <img
          src="src\images\pizzas\6d789a91-a79e-4e8a-a374-62efa0bf3f61_d3.jpg"
          alt="Pizza Venezia"
        />
        <div class="dish__data">
          <span>9,90€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.
            </p>
          </div>
        </div>
      </div>
      <div class="dish__card">
        <h3>Pizza Spinaci</h3>
        <img
          src="src\images\pizzas\7c80f97d-04ab-4ee1-bb12-829ab3f01255_d3.jpg"
          alt="Pizza Spinaci"
        />
        <div class="dish__data">
          <span>9,10€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.
            </p>
          </div>
        </div>
      </div>
      <div class="dish__card">
        <h3>Pizza al Prosciutto</h3>
        <img
          src="src\images\pizzas\683c4029-195f-4692-a791-e0dc66c667bd_d3.jpg"
          alt="Pizza al Prosciutto"
        />
        <div class="dish__data">
          <span>9,30€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.
            </p>
          </div>
        </div>
      </div>
      <div class="dish__card">
        <h3>Pizza Tonno</h3>
        <img
          src="src\images\pizzas\ab7ddbb9-2db9-419c-8046-bda2f8bcc406_d3.jpg"
          alt="Pizza Tonno"
        />
        <div class="dish__data">
          <span>9,60€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.
            </p>
          </div>
        </div>
      </div>
      <div class="dish__card">
        <h3>Pizza Quattro Formaggi</h3>
        <img
          src="src\images\pizzas\b0007adf-ab11-4de8-bc95-3053cecc95af_d3.jpg"
          alt="Pizza Quatro Formaggi"
        />
        <div class="dish__data">
          <span>9,80€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.
            </p>
          </div>
        </div>
      </div>
      <div class="dish__card">
        <h3>Calzone Pizza</h3>
        <img
          src="src\images\pizzas\c3cf257d-48ca-4666-aa60-81e9abff6ad4_d3.jpg"
          alt="Calzone Pizza"
        />
        <div class="dish__data">
          <span>9,90€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.
            </p>
          </div>
        </div>
      </div>
      <div class="dish__card">
        <h3>Pizza Salami</h3>
        <img
          src="src\images\pizzas\c48aa02e-da23-4e84-8e27-d9f91b8bd393_d3.jpg"
          alt="Pizza Salami"
        />
        <div class="dish__data">
          <span>9,90€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.
            </p>
          </div>
        </div>
      </div>
      <div class="dish__card">
        <h3>Pizza Pietro</h3>
        <img
          src="src\images\pizzas\dbd46702-c8de-482c-bc9f-26bd9b66632a_d3.jpg"
          alt="Pizza Pietro"
        />
        <div class="dish__data">
          <span>10,90€</span>
          <h4>Zutaten:</h4>
          <div class="dish__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde officia asperiores, quam provident atque.Porro
              unde officia asperiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.menu__page {
  font-family: "Rubik", sans-serif;
  margin: 15vh 0 0 5vw;
  width: 90vw;
  padding: 2%;
  background-color: rgb(189, 3, 3);
  color: white;
  border: 3px solid white;
  border-radius: 10px;
  h1 {
    text-align: center;
    margin: 2rem;
    font-size: 3rem;
  }
}

.dish__card {
  background-color: rgb(8, 98, 8);
  border: 3px solid white;
  border-radius: 10px;
  width: 95%;
  margin: 0 3vw 1rem 2.5vw;
  min-height: 30vh;
  @media screen and (max-width: 700px) {
    min-height: 70vh;
    width: 99%;
    margin: 10px 2px 0px 2px;
  }
  @media screen and (max-width: 360px) {
    min-height: 80vh;
  }
  h3 {
    text-align: center;
    font-size: 2rem;
    background-color: white;
    color: red;
    @media screen and (max-width: 500px) {
      font-size: 1.6rem;
    }
  }
  img {
    margin: 1rem;
    @media screen and (max-width: 500px) {
      margin-left: 15%;
    }
  }
  div.dish__data {
    float: right;
    margin: 1%;
    max-width: 60%;
    @media screen and (max-width: 600px) {
      float: left;
      max-width: 100%;
    }
    span {
      font-size: 1.5rem;
      float: right;
    }
    h4 {
      font-size: 1.5rem;
    }
    div.dish__description {
      float: left;
      font-size: 1.1rem;
      margin: 1rem 0 0 0;
      max-width: 80%;
    }
  }
}
</style>
