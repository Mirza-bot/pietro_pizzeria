<template>
    <div class="content__page">
      <div class="section__1">
        <div class="content__card">
          <div class="content_text_container grid_element_wide">
            <h2>Herzlich Wilkommen!</h2>
            <p>
              Tauchen Sie ein in eine italienische Welt voller kulinarischer
              Genüsse! Bei uns wird Ihr Gaumen verwöhnt und Ihr Besuch zu einem
              unvergesslichen Erlebnis! Wir freuen uns Sie als unseren Gast
              begrüßen zu dürfen.
            </p>
            <br>
            <p>Bis dahin, Salute e buon Appetito!</p>
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
            <br />
            <p>
              Überzeugen Sie sich von dem Geschmack ausgewählter
              Bio-Gemüse-Sorten, welche unseren Pizzageschmack erst zu einem
              echt italienischen Erlebnis machen.
            </p>
            <br />
            <p>
              Besonders stolz sind wir auf unsere schmackhafte selbst gemachte
              Tomatensauce, die erst durch verarbeiten der Bio-Tomaten und durch
              beigabe der richtigen Gewürze unsere Pizza zu dem Erlebnis macht welches Pietros Pizzen auszeichnen.
            </p>
          </div>
          <div class="content_image_container">
            <img
              style="height: 350px"
              src="https://images.unsplash.com/photo-1561155707-3f9e6bb380b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Pizza image"
            />
          </div>
        </div>
        <div class="content__card">
          <div class="content_image_container">
            <img
              style="height: 750px"
              src="https://images.unsplash.com/photo-1558138838-76294be30005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Pizza image"
            />
          </div>
          <div class="content_text_container grid_element_wide">
            <h3>Voglia di pizza!</h3>
            <br />
            <p>
              Unsere Pizzabäcker sind professionell, bereiten ihnen ihre Pizza
              traumhaft und nach wahl auch ganz nach ihren Wünschen zu. Sie
              können uns telefonisch mitteilen welche Beläge Sie sich wünschen,
              sodass ihrer Kreativität keine Grenzen gesetzt werden.
            </p>
            <br />
            <p>
              Unser Steinofen sorgt dafür, dass der Teig den Geschmack
              entfaltet, welcher als traditionell italienisch bekannt ist.
            </p>
            <br />
            <p>
              Am besten gnießt sich unsere Pizza frisch aus dem Steinofen. Also
              besuchen Sie uns doch, so genießen Sie echt italienischen Flair
              und ein einladendes Ambiente bei Pietros.
            </p>
            <br />
            <p>Wir freuen uns auf Ihren Besuch!</p>
          </div>
        </div>
      </div>
    </div>
</template>

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
  background-image: url("https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
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
  background-image: url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80");
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -10;
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

</style>