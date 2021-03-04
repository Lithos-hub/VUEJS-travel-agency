<template>
  <div>
    <Header id="header" />
    <Experience id="experience" />
    <Gallery id="gallery" />
    <Cities id="cities" />
    <Mountains id="mountains" />
    <Clients id="clients" />
    <Contact id="contact" />
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Experience from "../components/Experience";
import Gallery from "../components/Gallery";
import Cities from "../components/Cities";
import Mountains from "../components/Mountains";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Experience,
    Gallery,
    Cities,
    Mountains,
    Clients,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss">
// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #experience,
  #gallery,
  #cities,
  #mountains,
  #clients,
  #contact {
    position: relative;
    padding-top: 200px;
    padding-bottom: 200px;
  }

  #footer {
    position: relative;
    bottom: 0px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #experience,
  #gallery,
  #cities,
  #mountains,
  #clients,
  #contact {
    position: relative;
    padding-top: 200px;
    padding-bottom: 200px;
  }

  #footer {
    position: relative;
    bottom: 0px;
  }
}
</style>
