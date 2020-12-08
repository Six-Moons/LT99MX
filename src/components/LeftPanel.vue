<template>
    <div class="left-panel">
        <ul class="panel-nav">
            <li><a href="#Home">Tetris</a></li>
            <li><a href="#Rankings">Rankings</a></li>
            <li><a href="#Noticias">Noticias</a></li>
            <li><a href="#MiCuenta">Mi Cuenta</a></li>
            <li><a href="#FAQ">FAQ / Comentarios</a></li>
            <li><a href="#Donaciones">Donaciones</a></li>
            <li><a class="btn btn-danger logout" href="#Logout">Cerrar Sesión</a></li>
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
        height: 100vh;
        background-color: rgb(17, 30, 73);
    }
    ul.panel-nav {
        list-style-type: none;
    }
    ul.panel-nav > li > a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        display: block;
        padding-bottom: 0.5em;
    }
    .panel-nav {
        padding-top: 5%;
    }
    .logout {
        margin-right: 10%;
    }
</style>