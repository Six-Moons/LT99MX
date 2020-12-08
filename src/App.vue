<template>
 <div id="app">

   <nav class="main-nav">
     Liga Tetris99
     <div class="logo">
       <img class="logo-img" src="./assets/logo.png">
     </div>
   </nav>
    <div class="container">
      <div class="row">
        <left-panel class="col">
            <Sidebar>
                <ul class="sidebar-panel-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </Sidebar>
        </left-panel>
        <center-panel class="col"></center-panel>
        <right-panel class="col"></right-panel>
      </div>
    </div>

 </div>
</template>

<script>
import Sidebar from './components/menu/Sidebar.vue';
import CenterPanel from './components/CenterPanel.vue'
import RightPanel from './components/RightPanel.vue'
import LeftPanel from './components/LeftPanel.vue'

export default {
 name: 'app',
 components: {
   Sidebar,
   LeftPanel,
    CenterPanel,
    RightPanel,
 }
}
</script>
<style>
html {
   height: 100%;
   overflow:hidden;
 }

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(101,31,87);
   background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }

.logo-img {
    max-height: 50px;
}

</style>

