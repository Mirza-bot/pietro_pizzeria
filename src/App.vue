<template>
  <div>
    <div id="active"></div>
    <header>
      <nav>
        <ul>
          <li class="float__left">
            <a href="#" @click="mainPage">Pietro's Pizzeria</a>
          </li>
          <li>
            <div
              class="nav__button"
              @click="
                menuPage();
                setActive($event);
              "
            >
              Menü
            </div>
          </li>
          <li>
            <div
              class="nav__button"
              @click="
                reservationsPage();
                setActive($event);
              "
            >
              Reservierung
            </div>
          </li>
          <li>
            <div
              class="nav__button"
              @click="
                galleryPage();
                setActive($event);
              "
            >
              Gallerie
            </div>
          </li>
          <li class="float__right">
            <button
              class="mobile__menu"
              @click="toggleHamburgerButton()"
              aria-label="Main Menu"
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path
                  class="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path class="line line2" d="M 20,50 H 80" />
                <path
                  class="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      <div class="mobile__dropdown">
        <ul>
          <li @click="menuPage()" v-show="mobileDropdownVisible">Menü</li>
          <li @click="reservationsPage()" v-show="mobileDropdownVisible">
            Reservierung
          </li>
          <li @click="galleryPage()" v-show="mobileDropdownVisible">
            Gallerie
          </li>
        </ul>
      </div>
    </header>
    <div class="content__page" v-show="mainPageVisible">
      <div class="section__1">
        <div class="content__card">
          <div class="content_text_container grid_element_wide">
            <h2>Herzlich Wilkommen!</h2>
            <p>
              Tauchen Sie ein in eine italienische Welt voller kulinarischer
              Genüsse! Bei uns wird Ihr Gaumen verwöhnt und Ihr Besuch zu einem
              unvergesslichen Erlebnis! Wir freuen uns Sie als unseren Gast
              begrüßen zu dürfen, bis dahin, Salute e buon Appetito!
            </p>
          </div>
          <div class="content_text_container restaurant__data">
            <h3>Adresse:</h3>
            <span>Jägerstraße 26, 1200 Wien</span>
            <br />
            <h3>Öffnungszeiten:</h3>
            <span>Mo-Sa 09:00 - 19:00</span>
          </div>
          <div class="content_text_container grid_element_wide">
            <h2>Angebot:</h2>
            <p>
              <strong>
                Bei einer Bestellung über 30€ erhalten Sie
                <h2>eine 1.5L Cola-Flasche gratis dazu!</h2>
              </strong>
            </p>
          </div>
          <div
            class="content_text_container restaurant__data grid_element_wide"
          >
            <h2>Besuchen Sie uns oder bestellen Sie jetzt!</h2>
            <br />
            <h3>Tel-Nr.: 0108150815</h3>
            <h4>E-Mail: pietros_pizzi@pietro.pizza</h4>
          </div>
        </div>
      </div>
      <div class="section__gap">
        <h2>Original italienisch nur mit den besten Zutaten!</h2>
      </div>
      <div class="section__2">
        <div class="content__card">
          <div class="content_text_container grid_element_wide">
            <h3>Bio delizioso!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              animi aut atque mollitia suscipit quasi optio rerum. Iusto hic
              fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto non
              quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              vero animi aut atque mollitia suscipit quasi optio rerum. Iusto
              hic fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto
              non quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Et vero animi aut atque mollitia suscipit quasi optio rerum. Iusto
              hic fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto
              non quasi!
            </p>
          </div>
          <div class="content_image_container">
            <img
              style="height: 350px"
              src="src\images\kateryna-moskalova--SCfP2RB7Zc-unsplash.jpg"
              alt="Pizza image"
            />
          </div>
        </div>
        <div class="content__card">
          <div class="content_image_container">
            <img
              style="height: 750px"
              src="src\images\benu-marinescu-e6ZOmEfNHLM-unsplash.jpg"
              alt="Pizza image"
            />
          </div>
          <div class="content_text_container grid_element_wide">
            <h3>Bio delizioso!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              animi aut atque mollitia suscipit quasi optio rerum. Iusto hic
              fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto non
              quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              vero animi aut atque mollitia suscipit quasi optio rerum. Iusto
              hic fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto
              non quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Et vero animi aut atque mollitia suscipit quasi optio rerum. Iusto
              hic fugiat voluptatum porro. Quia sequi blanditiis delectus, iusto
              non quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
    <TheMenu v-show="menuVisible" />
    <TheReservations v-show="reservationsVisible" :main-page="mainPage" />
    <TheGallery v-show="galleryVisible" />
    <div class="footer"></div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Reservations from "./components/Reservations.vue";
import Gallery from "./components/Gallery.vue"

export default {
  components: {
    TheMenu: Menu,
    TheReservations: Reservations,
    TheGallery: Gallery
  },
  data() {
    return {
      mainPageVisible: true,
      menuVisible: false,
      galleryVisible: false,
      reservationsVisible: false,
      mobileDropdownVisible: false,
    };
  },
  methods: {
    setActive(event) {
      this.removeActive();
      const target = event["path"][0];
      target.id = "active";
    },
    removeActive() {
      try {
        const currentActive = document.getElementById("active");
        currentActive.id = "";
      } catch {
        console.log("no active-id found.");
      }
    },
    mainPage() {
      const hamburgerButton =
        document.getElementsByClassName("mobile__menu")[0];
      hamburgerButton.classList.remove("opened");
      this.mobileDropdownVisible = false;
      this.mainPageVisible = true;
      this.menuVisible = false;
      this.galleryVisible = false;
      this.reservationsVisible = false;
    },
    menuPage() {
      this.toggleHamburgerButton();
      this.mainPageVisible = false;
      this.menuVisible = true;
      this.galleryVisible = false;
      this.reservationsVisible = false;
    },
    galleryPage() {
      this.toggleHamburgerButton();
      this.mainPageVisible = false;
      this.menuVisible = false;
      this.galleryVisible = true;
      this.reservationsVisible = false;
    },
    reservationsPage() {
      this.toggleHamburgerButton();
      this.mainPageVisible = false;
      this.menuVisible = false;
      this.galleryVisible = false;
      this.reservationsVisible = true;
    },
    toggleHamburgerButton() {
      this.mobileDropdownVisible = !this.mobileDropdownVisible;
      const hamburgerButton =
        document.getElementsByClassName("mobile__menu")[0];
      hamburgerButton.classList.toggle("opened");
      hamburgerButton.setAttribute(
        "aria-expanded",
        hamburgerButton.classList.contains("opened")
      );
    },
  },
};
</script>

<style lang="scss" scoped>
// Backroung-Image-Sections

.section__gap {
  background-color: rgb(8, 98, 8);
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  height: 10vh;
  min-height: 80px;
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
      div#active {
        text-decoration: underline;
        &:hover {
          text-shadow: 0px 0px 6px rgb(202, 144, 144);
        }
      }
      .nav__button {
        font-family: "Rubik", sans-serif;
        font-size: 2rem;
        margin: 1rem 1vw 0 5vw;
        padding: 10px;
        box-sizing: border-box;
        &:hover {
          text-shadow: 0px 0px 6px rgb(195, 134, 134);
          cursor: pointer;
        }
        &:active {
          transform: translate(-2px, 2px);
          box-shadow: 0px 0px;
        }
        @media screen and (max-width: 1350) {
          padding: 0px;
          margin: 0rem 0rem 0rem 0rem;
        }
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
    }
  }
  //Mobile: Hamburger-Button
  .mobile__menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
    width: 15vw;
    margin-top: -5vh;
    @media screen and (min-width: 1100px) {
      display: none;
    }
    @media screen and (min-width: 700px) {
      margin: 0;
    }
  }
  .line {
    fill: none;
    stroke: white;
    stroke-width: 6;
    transition: stroke-dasharray 200ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
}
//Mobile: Dropdown-Menu
.mobile__dropdown {
  position: fixed;
  width: 100%;
  background-color: rgb(189, 3, 3);
  font-size: 1.3rem;
  top: 10vh;
  @media screen and (max-width: 500px) {
    top: 7vh;
  }
  @media screen and (min-width: 1080px) {
    display: none;
  }
  ul {
    li {
      border-top: 3px solid white;
      width: 100%;
      font-family: "Rubik", sans-serif;
      border-bottom: 2px solid green;
      padding: 1.5rem;
      text-align: center;
      background-color: rgb(189, 3, 3);
      &:active {
        color: white;
        background-color: rgb(8, 98, 8);
      }
      animation-name: mobile_dropdown_animation;
      animation-duration: 100ms;
      animation-timing-function: ease-out;
    }
  }
}

@keyframes mobile_dropdown_animation {
  0% {
    height: 0%;
    font-size: 0.2rem;
    padding: 0.4rem;
  }
  100% {
    height: auto;
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
  margin-top: 12vh;
  width: 100vw;
  bottom: 0px;
  @media screen and (max-width: 500px) {
    margin-top: 6vh;
  }
}
.content__card {
  font-family: "Rubik", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.42);
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
  margin: 2rem;
  min-height: 60px;
}

.grid_element_wide {
  grid-column: span 2 / auto;
}

.grid_element_whole_width {
  grid-column: span 3 / auto;
}

.restaurant__data {
  color: white;
  font-size: 2rem;
  background-color: rgba(180, 22, 22, 0.767);
  border: 3px solid white;
  border-radius: 30px;
  padding: 10px;
  word-wrap: break-word;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    padding: 20px;
  }
  h2 {
    font-family: "Bonheur Royale", cursive, sans-serif;
  }
}

.footer {
  width: 100vw;
  height: 6vh;
  background-color: rgb(189, 3, 3);
  bottom: 0;
  position: fixed;
  border-top: 3px solid white;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: rgb(8, 98, 8);
}
</style>
