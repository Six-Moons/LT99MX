<template>
    <div class="left-panel">
        <ul class="panel-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
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
</style>