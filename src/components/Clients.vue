<template>
  <div id="clients">
    <h1 id="clients-title">OUR HAPPY CLIENTS SAY</h1>

    <v-carousel cycle hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="(quotes, i) in quotes" :key="i"
        ><div id="quotes-carousel">
          {{ quotes.quote }} <br /><br />
          - <br /><br />
          <span id="client">{{ quotes.client }}</span>
        </div></v-carousel-item
      >
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      quotes: [
        { quote: "Quite simply the very best travel company we have ever experienced… guides were top-flight; the hotels were beyond our expectations… And working with the staff was very, very pleasant.", client: "Ethan Hunt" },
        { quote: "I urge you to carefully consider Travel & Beyond who, quite simply, provides unparalleled travel experiences and arrangements in countries as Spain or France.", client: "Laura Palmer" },
        {
          quote:
            "THANK YOU for a trip to England that we will treasure forever in our photos and our memories. We are deeply grateful to you and wish you only the best as you continue to build what should be the model for tour agencies everywhere. As promised, we will recommend you to everyone and anyone we know traveling to England!",
          client: "Jason Bourne",
        },
      ],
    };
  },
};
</script>

<style>
#clients {
  background: url("../assets/img/mountains-3.jpg");
  background-position: top;
  background-size: cover;
}

#clients-title {
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

#quotes-carousel {
  text-align: center;
  font-size: 30px;
  color: rgb(61, 43, 43);
  margin-left: 400px;
  margin-right: 400px;
  margin-top: 100px;
}

#client {
  color: rgb(51, 84, 232);
  font-size: 30px;
  font-weight: bold;
}
</style>
