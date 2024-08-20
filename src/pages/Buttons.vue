<script setup>
import RadioBtn from '../components/RadioBtn.vue';
import Checkboxes from '../components/Checkboxes.vue';

</script>

<template>
    <div style="display: grid; grid-template-columns: 1fr 1fr">
        <RadioBtn />
        <Checkboxes />    
    </div>
    
    <RouterLink to="/">
        <div class="backward"></div>
    </RouterLink>
</template>

<style scoped>
.backward {
    padding: 25px;
    background-image: url('../assets/img/arrow.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
    position: absolute;
    top: 50px;
    left: 50px;
}
</style>