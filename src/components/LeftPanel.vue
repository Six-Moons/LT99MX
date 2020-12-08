<template>
    <div class="left-panel">
        <ul class="nav-sidebar list-unstyled panel-nav">
            <li class="active"><a href="#Home">Tetris</a></li>
            <li><a href="#Rankings">Rankings</a></li>
            <li><a href="#Noticias">Noticias</a></li>
            <li><a href="#FAQ">FAQ / Comentarios</a></li>
            <li><a href="#Donaciones">Donaciones</a></li>
            <li><a href="#MiCuenta">Mi Cuenta</a></li>
        </ul>
        <ul class="logout">
            <li><a class="btn btn-lg btn-danger" href="#Logout">Cerrar Sesión</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LeftPanel'
}
</script>

<style scoped>
    .left-panel{
        font-family: "HomepageBaukasten-bold";
        height: 100vh;
        background-color:rgb(12, 9, 58);
        transition: all 0.3s;
    }
    ul.panel-nav {
        list-style-type: none;
    }
    ul.logout {
        list-style-type: none;
    }
    ul.panel-nav > li > a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        display: block;
        padding-bottom: 0.5em;
        padding-left: 30px;
    }
    .panel-nav > .active > a,
    .panel-nav > .active > a:hover,
    .panel-nav > .active > a:focus {
    color: rgb(223, 223, 223);
    background-color: rgb(8, 6, 20);
    }
    .panel-nav > li > a:hover{
        color: rgb(12, 9, 58);
        background: #fff;
    }
    a, a:hover, a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }

    .panel-nav {
        padding-top: 5%;
    }
    .logout {
        position: absolute;
        display: inline-block;
        bottom: 0;
        font-size: 1.5rem;
        color: #fff;
        width: 100%;
    }
</style>