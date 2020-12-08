import Vue from "vue";

// Save state (isPanel open or not)
export const store = Vue.observable({
    isNavOpen: false
});

// We call toggleNav anywhere we need it
export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    }
}