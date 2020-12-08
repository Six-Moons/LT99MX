<template>
    <div class="sidebar">
        <div class="sidebar-panel">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            
        }),
        methods: {

        }
    }
</script>
<style>
    /* .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    } */

    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }
</style>