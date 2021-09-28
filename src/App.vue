<template>
  <div>
    <header>
      <nav>
        <ul>
          <li class="float__left"><div>Menu</div></li>
          <li><a href="#">Pietro's Pizzeria</a></li>
          <li class="float__right"><div>About us</div></li>
        </ul>
      </nav>
    </header>
    <div class="section__1">
      <div class="content__page">
        <div class="content__card">
          <div class="content_image_container">
            <img
              src="src\images\serjan-midili--9LB0GKPF0o-unsplash.jpg"
              alt="Pizza image"
            />
          </div>
          <div class="content_text_container grid_element_wide">
            <h2>Pizza!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              animi aut atque mollitia suscipit quasi optio rerum. Iusto hic
              fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto non
              quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section__gap">
      <h2>Original italienisch nur mit den besten Zutaten!</h2>
    </div>
    <div class="section__2">
      <div class="content__card">
        <div class="content_text_container grid_element_wide">
          <h2>Pizza!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            animi aut atque mollitia suscipit quasi optio rerum. Iusto hic
            fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto non
            quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            animi aut atque mollitia suscipit quasi optio rerum. Iusto hic
            fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto non
            quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            animi aut atque mollitia suscipit quasi optio rerum. Iusto hic
            fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto non
            quasi!
          </p>
        </div>
        <div class="content_image_container">
          <img style="height: 500px"
            src="src\images\kateryna-moskalova--SCfP2RB7Zc-unsplash.jpg"
            alt="Pizza image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 15,
    };
  },
  methods: {
    count(value) {
      this.counter + value;
    },
  },
};
</script>

<style lang="scss" scoped>
// Backroung-Image-Sections

.section__gap {
  background-color: rgb(8, 98, 8);
  height: 10vh;
  text-align: center;
  h2 {
    color: white;
    padding-top: 1.2rem;
    font-family: "Bonheur Royale", cursive, sans-serif;
    font-size: 3rem;
    @media screen and (max-width: 500px) {
      font-size: 2rem;
      padding: 0;
    }
  }
}

.section__1 {
  margin-top: -1vh;
  padding: 0;
  width: 100vw;
  background-image: url("src/images/shourav-sheikh-a66sGfOnnqQ-unsplash.jpg");
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -10;
}

.section__2 {
  margin: 0;
  padding: 0;
  width: 100vw;
  background-image: url("src/images/vitalii-chernopyskyi-Oxb84ENcFfU-unsplash.jpg");
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -10;
}
// Navbar and Header Styles
header {
  z-index: 1;
  background: rgb(189, 3, 3);
  border-bottom: 3px solid white;
  top: 0px;
  position: fixed;
  width: 100%;
  min-height: 10vh;
  max-height: 100px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -ms-user-select: none;
  @media screen and (max-width: 500px) {
    padding-top: 2vh;
    min-height: 7vh;
    max-height: 50px;
  }
  ul {
    text-align: center;
    font-family: "Bonheur Royale", cursive, sans-serif;
    padding: 0;
    margin: 0;
    color: white;
    text-shadow: -3px 1px 1px rgba(32, 138, 55, 0.7);
    li {
      display: inline-block;
      a {
        text-decoration: none;
        font-size: 5rem;
        color: white;
        @media screen and (max-width: 500px) {
          font-size: 2.2rem;
        }
        @media screen and (min-width: 501px) and (max-width: 800px) {
          font-size: 3.5rem;
        }
      }
      div {
        display: inline-block;
        font-size: 3rem;
        margin: 1rem 1rem 0 1rem;
        background-color: green;
        border: 3px solid rgba(42, 91, 195, 0.35);
        box-shadow: 0 0 1px 0px black inset, 0 0 1px 0px black;
        border-radius: 600px;
        cursor: pointer;
        @media screen and (max-width: 500px) {
          font-size: 1.2rem;
          margin: 0.3rem;
        }
        @media screen and (min-width: 501px) and (max-width: 800px) {
          font-size: 1.6rem;
          margin: 2rem;
        }
        &:hover {
          background-color: rgb(17, 199, 17);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        &:active {
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          -ms-user-select: none;
        }
      }
    }
  }
}
// Utility Stlye Classes
.float__right {
  float: right;
}

.float__left {
  float: left;
}
// Content Page Styles
.content__page {
  margin-top: 11vh;
  width: 100vw;
  bottom: 0px;
  @media screen and (max-width: 500px) {
    margin-top: 6vh
  }
}
.content__card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.52);
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
.content_image_container {
  width: 40vw;
  margin-bottom: -5px;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
}

.content_text_container {
  color: white;
  font-size: 1.5rem;
  margin: 1rem;
  min-height: 60px;
}

.grid_element_wide {
  grid-column: span 2 / auto;
}

.grid_element_whole_width {
  grid-column: span 3 / auto;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body::before {
  min-height: 100%;
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url("src/images/shourav-sheikh-a66sGfOnnqQ-unsplash.jpg");
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  z-index: -10;
} */
</style>
