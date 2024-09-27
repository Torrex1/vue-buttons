<script setup>
    import { ref } from 'vue';
    import Loader from './Loader.vue';
    import UploadContent from './UploadContent.vue';

    const url = 'https://a580014e17аывавыаывc74889.mokky.dev/items';
    
    //запоминает файл для загрузки
    const selectedFile = ref(null);
    const onFileChange = () => {
        const file = event.target.files[0];
        selectedFile.value = file;
        checkingFileType(file);
        uploadFile(file);
    }

    // словарь с ссылками на иконки и стили в зависимости от статуса сервера
    const serverResponse = {
        default: 'src/assets/img/loaderIcon/file.png',
        success: 'src/assets/img/loaderIcon/tick.png',
        serverError: 'src/assets/img/loaderIcon/alert.png',  
        
        defaultBorderStyle: 'border: 1px solid #D5E3F0;',
        errorBorderStyle: 'border: 1px solid var(--alert-border);',

        defaultIconBox: 'background-color: #E3F2F9;',
        successIconBox: 'background-color: #E2F5F3;',
        errorIconBox: 'background-color: var(--alert-bg);',
    }

    const toUploadComplete = ref(false);

    const listStatus = ref('');
    const statusBorderStyle = ref('');
    const iconBoxStyle = ref('');
    const uploadFile = (file) => {
            const formData = new FormData();
            formData.append('file', file);
            
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);
      
            xhr.upload.onprogress = () => {
                loadedHandler();
                progressHandler();
            }

            listStatus.value = serverResponse.default;
            statusBorderStyle.value = serverResponse.defaultBorderStyle;
            iconBoxStyle.value = serverResponse.defaultIconBox;

            xhr.onload = () => {
                toUploadComplete.value = true;
                if (xhr.status >= 200 && xhr.status < 300) {        
                    listStatus.value = serverResponse.success;
                    iconBoxStyle.value = serverResponse.successIconBox;
                } else {
                    listStatus.value = serverResponse.serverError;
                    statusBorderStyle.value = serverResponse.errorBorderStyle;
                    iconBoxStyle.value = serverResponse.errorIconBox;
                } 
            }
            xhr.send(formData);     
    }

    // повторная отправка на сервер в случае ошибки
    const retryUpload = async () => {
        if (!selectedFile.value) return;

        await uploadFile(selectedFile.value);
    }

    const loadedSize = ref(0); 
    const loadedHandler = () => {      
        loadedSize.value = Math.trunc(event.loaded / 1024); 
    }

    const progress = ref(0);
    const progressHandler = () => {
        progress.value = (event.loaded / event.total * 100);
    }

    const hasError = ref(false);
    const isFileUploaded = ref(false);
    const checkingFileType = (file) => {
        if (file.type === 'image/jpeg' || file.type === 'image/png' 
            || file.type === 'application/pdf') {
                if (file.size <= 5 * 1024 * 1024) {
                    hasError.value = false;
                    // переменная, привязанная к появлению загружчика
                    isFileUploaded.value = true;
                } else {
                    hasError.value = true;
                }
        } 
    }

    const fileName = ref('');
    const maxFileSize = ref(0);
    const getFileProperties = () => {
        fileName.value = event.target.files[0].name;    
        maxFileSize.value = Math.trunc(event.target.files[0].size / 1024);
    }
</script>

<template>
    <label :style="{cursor: isFileUploaded ? 'default' : 'pointer'}" >
        <input :disabled="isFileUploaded" @change="onFileChange(), getFileProperties()" type="file" accept=".png, .jpg, .pdf">

        <div :class="{uploadFileWrapper: !hasError, wrapperError: hasError }">

            <UploadContent v-if ="!isFileUploaded"
                :hasError ="hasError"
            />

            <Loader v-else
                :file-name="fileName" 
                :loaded-size="loadedSize"
                :max-file-size="maxFileSize"
                :progress="progress"
                :list-status="listStatus"
                :statusBorderStyle="statusBorderStyle"
                :iconBoxStyle="iconBoxStyle"
                :toUploadComplete="toUploadComplete"
                @retryUpload="retryUpload"
                @deleteFile="deleteFile"
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