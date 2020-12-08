<template>
  <div id="experience">
    <h1 id="experience-title">Experience the essence of five astonishing cities</h1>
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6">
        <p id="experience-text">
          We create personalized travel experiences in Madrid, London, Paris, Tokyo and New York that become cherished, lifelong memories, catering to those who seek to go beyond all the clichés and discover the heart of those place.

          <br /><br />

          For Travel & Beyond, it’s all about the people! Now in our 20th year, we take you deep inside the worlds of art, wine, food, architecture, music and culture, ensuring that you truly “experience” those cities, providing insider’s access to a huge range of fabulous individuals and places that are simply not
          available elsewhere. That is the luxury of traveling with international's premier travel agency.

          <br /><br />

          For couples, families and small groups, enjoy seamless and fun vacations. For larger groups, we have the reputation of being international's best travel company for all escorted and guided tours on a private basis.
        </p>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style lang="scss">
@import "src/scss/variables";

#experience {
  background: url(../assets/img/skyline.jpg);
  background-position: bottom;
  background-attachment: fixed;
}

#experience-title {
  font-size: 6em;
  text-transform: uppercase;
  text-align: center;
  color: white;
  background: url(../assets/img/mountains-7.jpg);
  background-attachment: fixed;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#experience-text {
  padding-top: 100px;
  font-size: 20px;
  color: white;
  text-align: center;
  letter-spacing: 5px;
  line-height: 2em;
  font-family: $style3;
}
</style>
