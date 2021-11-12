<template>
  <section v-show="true" class="photo-grid">
    <div class="card card-tall">
      <img
        class="photo"
        src="https://images.unsplash.com/photo-1558138838-76294be30005?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="nike shoes advertisment picture"
      />
    </div>
    <div class="card">
      <img
        class="photo"
        src="https://images.unsplash.com/photo-1561155707-3f9e6bb380b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="pile of tomates"
      />
    </div>
    <div class="card card-wide">
      <img
        src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        alt="pizza infront of an oven"
        class="photo"
      />
    </div>
    <div class="card">
      <img
        src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="Pizza on a plate"
        class="photo"
      />
    </div>
    <div class="card card-wide">
      <img
        src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
        alt="Table at the restaurant"
        class="photo"
      />
    </div>
    <div class="card card-tall card-wide">
      <img
        src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
        alt="Picture of the Restaurant"
        class="photo"
      />
    </div>
    <div class="card">
      <img
        src="https://images.unsplash.com/photo-1554997433-8e233c02c751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="slicing tomatoes"
        class="photo"
      />
    </div>
    <div class="card card-wide">
      <img
        src="https://images.unsplash.com/photo-1571757392712-7c1052de7ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="2 Plates of Pizza"
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
    animation: cardEntrance 500ms ease-out;
    animation-fill-mode: backwards;
    animation-delay: 100ms;
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