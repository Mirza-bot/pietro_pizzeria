<template>
  <div>
    <div id="active"></div>
    <header>
      <nav>
        <ul>
          <li class="float__left">
            <router-link class="logo" to="/main" @click="setActive($event)">
              Pietro's Pizzeria
            </router-link>
          </li>
          <li>
            <button class="nav__button" @click="setActive($event)">
              <router-link to="/menu">Menü</router-link>
            </button>
          </li>
          <li>
            <button class="nav__button" @click="setActive($event)">
              <router-link to="/reservation">Reservierung</router-link>
            </button>
          </li>
          <li>
            <button class="nav__button" @click="setActive($event)">
              <router-link to="/gallery">Gallerie</router-link>
            </button>
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
          <li v-show="mobileDropdownVisible" @click="toggleHamburgerButton">
            <router-link to="/menu">Menü</router-link>
          </li>
          <li v-show="mobileDropdownVisible" @click="toggleHamburgerButton">
            <router-link to="/reservation"> Reservierung </router-link>
          </li>
          <li v-show="mobileDropdownVisible" @click="toggleHamburgerButton">
            <router-link to="/gallery"> Gallerie </router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
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
      button {
        border: none;
        background: rgb(189, 3, 3);
        a#active {
          text-decoration: underline;
          &:hover {
            text-shadow: 0px 0px 6px rgb(202, 144, 144);
          }
        }
      }
      a.logo {
        font-size: 5rem;
        @media screen and (max-width: 500px) {
          font-size: 2.2rem;
        }
        @media screen and (min-width: 501px) and (max-width: 800px) {
          font-size: 3.5rem;
        }
      }
      a {
        text-decoration: none;
        font-size: 2rem;
        color: white;
        @media screen and (max-width: 500px) {
          font-size: 2.2rem;
        }
        @media screen and (min-width: 501px) and (max-width: 800px) {
          font-size: 3.5rem;
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
div.mobile__dropdown {
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
    animation-name: mobile_dropdown_container_animation;
    animation-duration: 1300ms;
    animation-timing-function: ease-out;
  }
  ul {
    li {
      border-bottom: 3px solid white;
      width: 100%;
      height: 10vh;
      font-family: "Rubik", sans-serif;
      text-align: center;
      background-color: rgb(189, 3, 3);
      &:active {
        color: white;
        background-color: rgb(8, 98, 8);
      }

      a {
        font-size: 2rem;
        display: block;
        height: 100%;
        width: 100%;
        line-height: 10vh;
        text-decoration: none;
        animation-name: mobile_dropdown_animation;
        animation-duration: 200ms;
        animation-timing-function: ease-out;
      }
    }
  }
}

@keyframes mobile_dropdown_animation {
  0% {
    height: 1vh;
    font-size: 0.2rem;
    padding: 0.4rem;
    transform: (scaleY(0));
    opacity: 0;
  }
  100% {
    transform: (scaleY(1));
    opacity: 0.7;
  }
}

@keyframes mobile_dropdown_container_animation {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}

// Utility Stlye Classes
.float__right {
  float: right;
}

.float__left {
  float: left;
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
