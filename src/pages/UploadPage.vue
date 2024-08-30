<script setup>
    import UploadFile from '@/components/UploadFile.vue'; 
    // import Loader from '@/components/Loader.vue';
</script>

<template>
    <div class="wrapper">
        <h1>Upload file</h1>
        <UploadFile />
    </div>
    
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>