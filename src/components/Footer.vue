<template>
  <div id="footer" width="100%">
    <v-row class="text-center" no-gutters>
      <v-col>
        <v-btn v-for="link in links" :key="link" text rounded class="my-2" id="footer-links">
          {{ link }}
        </v-btn>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-icon class="footer-icon">mdi-instagram</v-icon>
          </v-col>
          <v-col>
            <v-icon class="footer-icon">mdi-pinterest</v-icon>
          </v-col>
          <v-col>
            <v-icon class="footer-icon">mdi-facebook</v-icon>
          </v-col>
          <v-col>
            <v-icon class="footer-icon">mdi-twitter</v-icon>
          </v-col>
          <v-col>
            <v-icon class="footer-icon">mdi-youtube</v-icon>
          </v-col>
        </v-row>

        <v-divider></v-divider>
      </v-col>
      <v-col class="text-white" cols="12"> {{ new Date().getFullYear() }} — <strong>Carlos Segura García</strong> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: ["Home", "About Us", "FAQ", "Services", "How We Work", "Contact Us"],
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 50px;
  background: url("../assets/img/mountains-2.jpg");
  background-position: top;
}

#footer-links {
  color: white;
  text-align: center;
}

.footer-icon {
  color: beige !important;
  font-size: 2em !important;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
  }
}
</style>
