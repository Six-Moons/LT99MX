<template>
 <div id="app">

   <nav class="main-nav">
        <h2 class="Title">LT99MX</h2>
        <div class="logo">
            <img class="logo-img" src="./assets/logo.png">
        </div>
   </nav>
        <div class="row">
            <left-panel class="col col-3"></left-panel>
            <router-view class="col col-9"/>
        </div>
    </div>

</template>

<script>
import LeftPanel from './components/LeftPanel.vue'

export default {
 name: 'App',
 components: {
   LeftPanel
 }
}
</script>
<style>
@font-face {
    font-family: "HomepageBaukasten";
    src: local("HomepageBaukasten"), url(./assets/fonts/HomepageBaukasten-Book.ttf) format("truetype");
}
@font-face {
    font-family: "HomepageBaukasten-bold";
    src: local("HomepageBaukasten-bold"), url(./assets/fonts/HomepageBaukasten-Bold.ttf) format("truetype");
}
html {
   height: 100%;
   overflow:hidden;
 }
.Title {
    text-transform: uppercase;
    font-family: "HomepageBaukasten-bold";
    color:  #ffff00;
    /* background: -webkit-linear-gradient(0deg, rgb(18, 134, 18), #eee, rgb(190, 24, 24));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    /* transform: translate(50%,-50%); */
    /* font-size: 12em; */
    font-weight: 700;
    text-shadow: 1px 1px 1px#daa520,
        1px 2px 1px #daa520,
        1px 3px 1px #daa520,
        1px 4px 1px #daa520,
        1px 5px 1px #daa520,
        1px 6px 1px #daa520,
        1px 7px 1px #daa520,
        1px 8px 1px #daa520,
        1px 9px 1px #daa520,
        1px 10px 1px #daa520,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
}

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(101,31,87);
   background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 }

 .main-nav {
    background: rgb(12, 9, 58);
    background: linear-gradient(45deg,rgb(12, 9, 58, 1) 0%, rgba(9,9,121,1) 55%, rgba(0,212,255,1) 90%);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.8rem;
 }

.logo-img {
    max-height: 50px;
}

</style>

