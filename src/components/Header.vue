<template>
  <div id="header">
    <div id="video-header">
      <div class="filter">
        <video autoplay muted loop><source src="../assets/video/header.mp4" type="video/mp4" id="video" /></video>
      </div>
      <v-container>
        <div id="text-header">
          <p>Visit fantastic sites and live unique experiences with us, an international travel agency whose main objective is that our customers enjoy the pleasure of traveling around the world without any concern</p>
          <v-btn class="header-btn">Begin your journey</v-btn>
          <v-row>
            <v-col>
              <v-btn class="header-btn2">Tokyo</v-btn>
            </v-col>
            <v-col>
              <v-btn class="header-btn2">London</v-btn>
            </v-col>
            <v-col>
              <v-btn class="header-btn2">New York</v-btn>
            </v-col>
            <v-col>
              <v-btn class="header-btn2">Paris</v-btn>
            </v-col>
            <v-col>
              <v-btn class="header-btn2">Madrid</v-btn>
            </v-col>
            <v-col>
              <v-btn class="header-btn2">Sydney</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { autoplay } from "../hooks/autoplay";

export default {
  name: "Header",
  data() {
    return {};
  },
  mounted() {
    autoplay();
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#header {
  position: relative;
}

#video-header {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  z-index: -1;
  margin: 0 auto;
}

.filter {
  filter: brightness(0.7);
}

#text-header {
  font-size: 4em;
  padding-left: 450px;
  padding-right: 450px;
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 160px;
  color: white;
  font-family: $style4;
}

.header-btn {
  background: transparent !important;
  padding: 30px !important;
  font-size: 20px !important;
  color: white !important;
  font-family: $style1;
  border: 1px solid rgb(255, 255, 255);

  &:hover {
    background: rgba(255, 255, 255, 0.329) !important;
    transition: 0.3s;
  }
}

.header-btn2 {
  background: transparent !important;
  padding: 20px !important;
  font-size: 17px !important;
  color: rgb(221, 189, 82) !important;
  font-family: $style1;
  border: 1px solid rgb(235, 183, 70);

  &:hover {
    background: rgba(170, 118, 22, 0.329) !important;
    color: white !important;
    transition: 0.3s;
  }
}
</style>
