<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="(item, i) in gallery" :key="i">
        <div class="mx-auto pa-5" id="gallery-card">
          <v-img :src="item.img" height="400px" id="img-card"></v-img>
          <div id="card-body">
            <v-card-title class="text-uppercase">
              {{ item.title }}
              <v-icon class="ml-auto" id="plus-icon">mdi-plus</v-icon>
            </v-card-title>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      gallery: [
        { img: require("../assets/img/guide.jpg"), title: "Private guides" },
        { img: require("../assets/img/food.jpg"), title: "Food" },
        { img: require("../assets/img/art.jpg"), title: "art" },
        { img: require("../assets/img/architecture.jpg"), title: "architecture" },
        { img: require("../assets/img/history.jpg"), title: "history" },
        { img: require("../assets/img/folklore.jpg"), title: "folklore" },
        { img: require("../assets/img/families.jpg"), title: "families" },
        { img: require("../assets/img/hiking.jpg"), title: "hiking" },
        { img: require("../assets/img/couple.jpg"), title: "couples" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#card-body {
  padding-top: 20px;
  z-index: 99;
}

#gallery-card {
  font-family: $style4;
  font-weight: bold;
  width: 450px;
  overflow: hidden;

  &:hover {
    border-bottom: 1px solid rgb(0, 110, 255);
    border-right: 1px solid rgb(0, 110, 255);
    transition: 0.3s;
    cursor: pointer;

    #plus-icon {
      color: blue;
      transform: rotate(180deg);
      transition: 1s;
    }

    #img-card {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
}
</style>
