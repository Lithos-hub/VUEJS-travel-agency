<template>
  <div id="contact">
    <h1 id="contact-title">I want to begin my adventure !</h1>

    <v-container fluid>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-container fluid>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="20"
                label="First name"
                required
              ></v-text-field>

              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="20"
                label="Last name"
                required
              ></v-text-field>

              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                :counter="12"
                label="Phone"
                required
              ></v-text-field>

              <v-text-field
                v-model="country"
                :counter="20"
                label="Country"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                id="send-btn"
                class="ma-5 pa-5"
                block
                @click="validate"
                elevation="15"
              >
                Send!
              </v-btn>
            </v-col>

            <v-col cols="6">
              <v-sheet width="100%" height="100%" elevation="15" class="pa-5">
                <v-textarea
                  filled
                  auto-grow
                  rows="4"
                  row-height="100"
                  shaped
                  placeholder="Tell us about your ideal trip"
                ></v-textarea>

                <v-checkbox
                  label="By submitting this form you agree to the storage and handling of your data in accordance with our privacy policy"
                ></v-checkbox>

                <p class="font-weight-bold">
                  Sign up to our quarterly newsletter for travel inspiration – you can
                  unsubscribe at any time
                </p>

                <v-checkbox
                  label="I would like to receive email updates about Travel and Beyond"
                ></v-checkbox>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      phone: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 20 characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) => v.length <= 10 || "Phone must be less than 12 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #contact-title {
    text-align: center;
    font-family: $style2;
    font-size: 5em;
    color: rgb(211, 38, 38);
    margin-bottom: 200px;
  }

  #send-btn {
    background-color: rgb(220, 60, 54);
    color: white;
    padding: 20px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #contact-title {
    text-align: center;
    font-family: $style2;
    font-size: 8em;
    color: rgb(211, 38, 38);
    margin-bottom: 200px;
  }

  #send-btn {
    background-color: rgb(220, 60, 54);
    color: white;
    padding: 20px;
  }
}
</style>
