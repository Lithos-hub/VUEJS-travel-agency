<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
     <a><span id="travel">Travel</span> <span id="and">&</span> <span id="beyond">Beyond</span></a>
     <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
     </button>
     <div id="my-nav" class="collapse navbar-collapse">
         <ul class="navbar-nav mx-auto">
             <li class="nav-item active">
                 <a class="nav-link" href="/">who we are <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="/" tabindex="-1" aria-disabled="true">what we do</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="/" tabindex="-1" aria-disabled="true">where we go</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="/" tabindex="-1" aria-disabled="true">why with us</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="/" tabindex="-1" aria-disabled="true">contact us</a>
             </li>
         </ul>
     </div>
 </nav>
</template>

<script>
import {shrink_Navbar} from '../hooks/shrink_Navbar';

export default {
    name: "Navbar",
    data() {
        return {

        }
    },
    mounted() {
    shrinkNavbar();
  }
}
</script>

<style lang="scss">
@import 'src/scss/variables';

.navbar {
    box-shadow: 0px 0px 20px rgb(167, 167, 167), 0px 0px 5px black;
    padding-top: 30px;
    padding-bottom: 30px;
    transition: 1s;
}

.navbar-nav {
    text-transform: uppercase;
}

.nav-link {
    font-size: 20px;
    margin-right: 50px;
    font-family: $style3;
    font-weight: bold;

    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        cursor: pointer;
    }
}

#travel {
    font-size: 3em;
    text-transform: uppercase;
    font-family: $style1;
    letter-spacing: 2px;
    z-index: 2;
    background: url(../assets/img/mountains-1.jpg) no-repeat;
    background-position: right;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}

#and {
    font-size: 6em;
    font-family: $style2;
    color: rgb(233, 44, 44);
    position: absolute;
    left: 170px;
    top: -10px;
    z-index: -1;

}

#beyond {
    font-size: 3em;
    font-family: $style2;
    color: blue;
    letter-spacing: 10px;
    z-index: 2;
    background: url(../assets/img/mountains-3.jpg);
    background-position: center;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}

</style>