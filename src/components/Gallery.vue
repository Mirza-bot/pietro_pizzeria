<template>
  <section v-show="true" class="photo-grid">
    <div class="card card-tall">
      <img
        class="photo"
        src="src\images\benu-marinescu-e6ZOmEfNHLM-unsplash.jpg"
        alt="nike shoes advertisment picture"
      />
    </div>
    <div class="card">
      <img
        class="photo"
        src="src\images\kateryna-moskalova--SCfP2RB7Zc-unsplash.jpg"
        alt="nike shoes advertisment picture"
      />
    </div>
    <div class="card card-wide">
      <img
        src="src\images\serjan-midili--9LB0GKPF0o-unsplash.jpg"
        alt="nike shoes advertisment picture"
        class="photo"
      />
    </div>
    <div class="card">
      <img
        src="src\images\shourav-sheikh-a66sGfOnnqQ-unsplash.jpg"
        alt="nike advertisment picture"
        class="photo"
      />
    </div>
    <div class="card card-wide">
      <img
        src="src\images\chris-liverani-oCsaxvGCehM-unsplash.jpg"
        alt="nike shoes advertisment picture"
        class="photo"
      />
    </div>
    <div class="card card-tall card-wide">
      <img
        src="src\images\kayleigh-harrington-yhn4okt6ci0-unsplash.jpg"
        alt="nike shoes advertisment picture"
        class="photo"
      />
    </div>
    <div class="card">
      <img
        src="src\images\louis-hansel-h_s7AUBPss8-unsplash.jpg"
        alt="nike shoes advertisment picture"
        class="photo"
      />
    </div>
    <div class="card card-wide">
      <img
        src="src\images\sarang-pande-5djt8Pkqdc4-unsplash.jpg"
        alt="nike shoes advertisment picture"
        class="photo"
      />
    </div>
  </section>
</template>


<style lang="scss" scoped>
.photo-grid {
  margin-left: 3vw;
  padding-top: 10vh;
  height: 100vh;
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(240px, 300px));
  grid-auto-rows: 300px;
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 350px));
  }
  @media screen and (min-width: 400px) and (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 360px));
  }
  .card {
    animation: cardEntrance 1000ms ease-out;
    animation-fill-mode: backwards;
    animation-delay: 200ms;
    @media screen and (min-width: 400px) and (max-width: 900px) {
      grid-column: span 2 / auto;
    }
    @keyframes cardEntrance {
      from {
        opacity: 0;
        transform: scale(0.3);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }
    .card-wide {
      grid-column: span 2 / auto;
    }
  }
  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
