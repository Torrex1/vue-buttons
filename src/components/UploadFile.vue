<script setup>
    import { ref } from 'vue';
    import Loader from './Loader.vue';
    import UploadContent from './UploadContent.vue';

    const isFileUploaded = ref(false);
    const onFileChange = () => {
        const file = event.target.files[0];

        // files.value = [...files.value, file];
        checkingFileType(file)

        isFileUploaded.value = true;

    }

    const hasError = ref(false);
    const checkingFileType = (file) => {
        if (file.type === 'image/jpeg' || file.type === 'image/png' 
            || file.type === 'application/pdf') {
                hasError.value = false;
        } else {
            hasError.value = true;
        }
    }

    const fileName = ref('');
    const maxFileSize = ref(0);
    const getFileProperties = () => {
        fileName.value = event.target.files[0].name;    
        
        maxFileSize.value = Math.round(event.target.files[0].size / 1024);
    }

</script>

<template>
    <label>
        <input :disabled="isFileUploaded" @change="onFileChange(), getFileProperties()" type="file" accept=".png, .jpg, .pdf">

        <div :class="{uploadFileWrapper: !hasError, wrapperError: hasError }">

            <UploadContent v-if ="!isFileUploaded"
                :hasError ="hasError"
            />

            <Loader v-else
                :file-name="fileName" 
                :max-file-size="maxFileSize"
            />
            
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

input[type="file"]:not(:disabled) + .uploadFileWrapper:hover {
    background-color: #F0F5FB;
}

.upload-file-wrapper span:nth-child(2) {
    font-weight: bold;
    font-size: 18px;
}

label {cursor:pointer;}

input {
    position: absolute;
    /* visibility: hidden; */
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