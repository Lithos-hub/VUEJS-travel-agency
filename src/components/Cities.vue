<template>
  <div>
    <div v-for="(item, i) in cities" :key="i" id="city-image">
      <v-row>
        <v-img :src="item.img" height="500px">
          <h1 class="text-left" id="city-name">{{ item.city }}</h1>
        </v-img>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cities",
  data() {
    return {
      cities: [
        { img: require("../assets/img/london.jpg"), city: "London" },
        { img: require("../assets/img/madrid.jpg"), city: "Madrid" },
        { img: require("../assets/img/paris.jpg"), city: "Paris" },
        { img: require("../assets/img/newyork.jpg"), city: "New York" },
        { img: require("../assets/img/tokyo.jpg"), city: "Tokyo" },
        { img: require("../assets/img/sydney.jpg"), city: "Sydney" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#city-name {
  visibility: hidden;
  position: absolute;
  left: 15px;
  font-size: 20em;
  color: rgba(255, 255, 255, 0.618);
  background: url(../assets/img/skyline.jpg);
  background-attachment: fixed;
  background-position: bottom;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#city-image:hover {
  transform: scale(1.1);
  transition: 1s;

  #city-name {
    transform: scale(0.8);
    visibility: visible;
    animation: fadeIn ease 0.5s;
    cursor: pointer;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
