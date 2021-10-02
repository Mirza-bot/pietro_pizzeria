<template>
  <div class="reservations__container">
    <h2>RESERVIERUNG</h2>
    <div class="completion__page" v-show="completionPage">
      <h1 @click="redirection()">Vielen Dank ihre Reservierung!</h1>
      <h4>
        Wir werden diese so schnell wie möglich bearbeiten. <br />
        Sie werden in kürze auf die Hauptseite zurück geleitet.
      </h4>
    </div>
    <div class="reservations__page" v-show="!completionPage">
      <form action="submit">
        <div class="input input__name">
          <label for="name">Name: </label
          ><input v-model="name" type="text" id="name" autocomplete="name" />
          <p v-show="nameValidation" style="color: red">
            Bitte füllen Sie dieses Feld aus!
          </p>
        </div>
        <div class="input input__email">
          <label for="email">E-Mail: </label
          ><input
            v-model="eMail"
            type="email"
            id="email"
            autocomplete="email"
          />
          <p v-show="eMailValidation" style="color: red">
            Bitte füllen Sie dieses Feld aus!
          </p>
        </div>
        <div class="input input__tel">
          <label for="tel">Telefon-Nr.: </label
          ><input v-model="telNumber" type="text" id="tel" autocomplete="tel" />
        </div>
        <div class="input input__date">
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2021-10-01"
            max="2023-12-31"
            v-model="reservationDate"
          />
          <p v-show="dateValidation" style="color: red">Bitte Datum angeben!</p>
        </div>
        <div class="input input__reservation_text">
          <p>
            Bitte geben Sie an für wie viele Personen Sie reservieren wollen,
            sowie ob es besondere Anlässe gibt und/oder dazugehörige
            Vorbereitungen getroffen werden müssen.
          </p>
          <textarea
            id="reservation_text"
            v-model="reservationMsg"
            name="reservation_message"
            rows="10"
            cols="25"
          ></textarea>
        </div>
        <button type="button" @click="redirection">Absenden</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainPage"],
  data() {
    return {
      name: "",
      eMail: "",
      telNumber: "",
      reservationDate: "",
      reservationMsg: "",
      completionPage: false,
    };
  },
  computed: {
    nameValidation() {
      if (this.name === "") {
        return true;
      } else return false;
    },
    eMailValidation() {
      if (this.eMail === "") {
        return true;
      } else return false;
    },
    dateValidation() {
      if (this.reservationDate === "") {
        return true;
      } else return false;
    },
  },
  methods: {
    submitForm() {
      if (
        this.name !== "" &&
        this.eMail !== "" &&
        this.reservationMsg !== "" &&
        this.reservationDate !== ""
      ) {
        this.mainPage();
        this.name = "";
        this.eMail = "";
        this.reservationMsg = "";
        this.reservationDate = "";
        this.completionPage = false
      }
    },
    redirection() {
        this.completionPage = true
        setTimeout(() => {  this.submitForm(), console.log(this.submitForm()) }, 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
.reservations__container {
  font-family: "Rubik", sans-serif;
  text-align: center;
  width: 60vw;
  min-height: 60vh;
  background: rgb(189, 3, 3);
  border: 3px solid white;
  border-radius: 30px;
  margin: 20vh 0 0 20vw;
  padding-bottom: 5vh;
  @media screen and (max-width: 500px) {
    width: 95vw;
    min-height: 90vh;
    margin: 15vh 0 20vh 3vw;
  }
  h2 {
    color: white;
    padding-top: 1rem;
  }

  button {
    margin: 0.8rem;
  }
  .reservations__page {
    width: 90%;
    height: 85%;
    margin: 1rem 0 0 5%;
    background-color: white;
    border: 4px solid gray;
    border-radius: 15px;
    @media screen and (max-width: 1100px) {
      height: auto;
    }
  }
}

.input {
  margin: 1rem;
  p {
    font-size: 0.8rem;
    font-style: italic;
    padding: 1rem;
  }
  input {
  }
}

.input__name {
  label::after {
    content: "* ";
    color: red;
  }
}

.input__email {
  label::after {
    content: "* ";
    color: red;
  }
}

.completion__page {
  color: white;
  h1 {
    margin-top: 20%;
  }
}
</style>
