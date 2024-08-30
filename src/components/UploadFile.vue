<script setup>
    import { ref } from 'vue';
    import Loader from './Loader.vue';

    const hasError = ref(false);

    const onFileChange = () => {
        const file = event.target.files[0];

        // files.value = [...files.value, file];
        checkingFileType(file)
    }

    const checkingFileType = (file) => {
        if (file.type === 'image/jpeg' || file.type === 'image/png' 
            || file.type === 'application/pdf') {
                hasError.value = false;
        } else {
            hasError.value = true;
        }
    }

</script>

<template>
    <label>
        <input @change="onFileChange" type="file" accept=".png, .jpg, .pdf">

        <div :class="{uploadFileWrapper: !hasError, wrapperError: hasError }">
            <div class="upload-file-box">
                <img v-if="!hasError" style="width: 100px; height: 100px;" src="../assets/img/upload-file-icon.png" alt="uploadIcon">
                <img v-else style="width: 100px; height: 100px;" src="../assets/img/upload-file-error.png" alt="uploadIcon">
                <span>Перетащите файлы сюда или кликните на область</span>
                <span>Принимаются файлы в формате PDF, JPG, PNG. Пожалуйста, убедитесь, что текст на предоставленных копиях разборчив.</span>
            </div>
            <Loader />
        </div>
        
    </label>
</template>

<style scoped>
.uploadFileWrapper {
    width: 656px;
    height: 224px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 32px 32px 40px 32px;
    border: 2px dashed #D5E3F0;
    border-radius: 8px;
    color: #ABBCD1;
    font-size: 16px;
}

.uploadFileWrapper:hover {
    background-color: #F0F5FB;
}

.upload-file-box {
    width: 592px;
    height: 192px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
}

.upload-file-wrapper span:nth-child(2) {
    font-weight: bold;
    font-size: 18px;
}

label {cursor:pointer;}

input {
    position: absolute;
    visibility: hidden;
}

.wrapperError {
    width: 656px;
    height: 224px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 32px 32px 40px 32px;
    border: 2px dashed var(--error-border);
    background-color: var(--error-bg);
    border-radius: 8px;
    color: var(--error-border);
    font-size: 16px;
}
</style>