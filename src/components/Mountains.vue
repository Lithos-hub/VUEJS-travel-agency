<template>
  <div>
    <v-container>
      <h1 id="mountains-title">If you want to escape from the big cities, we also offer travel plans to natural areas and mountains</h1>
    </v-container>

    <v-row v-for="(item, i) in items" :key="i">
      <v-img :src="item.img" max-height="500" width="100%">
        <h1 class="text-right" id="mountains-places">{{ item.place }}</h1>
      </v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Cities",
  data() {
    return {
      items: [
        { img: require("../assets/img/mountains-1.jpg"), place: "Scotland" },
        { img: require("../assets/img/mountains-2.jpg"), place: "Yellowstone" },
        { img: require("../assets/img/mountains-3.jpg"), place: "Galicia" },
        { img: require("../assets/img/mountains-4.jpg"), place: "Norway" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#mountains-title {
  font-size: 6em;
  text-align: center;
  text-transform: uppercase;
  color: white;
  background: url(../assets/img/mountains-7.jpg);
  background-attachment: fixed;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 200px;
}

#mountains-places {
  position: relative;
  right: 25px;
  font-size: 15em;
  color: rgba(255, 255, 255, 0.618);
  background: url(../assets/img/mountains-5.jpg);
  background-attachment: fixed;
  background-position: bottom;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
