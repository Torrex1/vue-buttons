<template>
    <label>
        <input type="file" accept=".png, .jpg, .pdf">

        <div class="upload-file-wrapper">
            <div class="upload-file-box">
                <img style="width: 100px; height: 100px;" src="../assets/img/upload-file-icon.png" alt="uploadIcon">
                <span>Перетащите файлы сюда или кликните на область</span>
                <span>Принимаются файлы в формате PDF, JPG, PNG. Пожалуйста, убедитесь, что текст на предоставленных копиях разборчив.</span>
            </div>
        </div>
        
    </label>
</template>

<style scoped>
.upload-file-wrapper {
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

.upload-file-wrapper:hover {
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
</style>