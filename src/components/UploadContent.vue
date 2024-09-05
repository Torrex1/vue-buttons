<script setup>
    const props = defineProps({
        hasError: Boolean
    })
</script>

<template>
    <div class="upload-file-box">
        <img v-if="!props.hasError" style="width: 100px; height: 100px;" src="../assets/img/upload-file-icon.png" alt="uploadIcon">
        <img v-else style="width: 100px; height: 100px;" src="../assets/img/upload-file-error.png" alt="uploadIcon">
        <span>Перетащите файлы сюда или кликните на область</span>
        <span>Принимаются файлы в формате PDF, JPG, PNG. Пожалуйста, убедитесь, что текст на предоставленных копиях разборчив.</span>
    </div>
</template>

<style scoped>
.upload-file-box {
    width: 592px;
    height: 192px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
}
</style>