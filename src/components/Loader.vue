<script setup>
    const props = defineProps({
        fileName: String,
        loadedSize: Number,
        maxFileSize: Number,
        progress: Number
    })
</script>

<template>
    <div class="loaderWrapper">

        <div class="wrapper">
            <div class="leftSideBar">
                <div class="iconBox">
                    <img src="../assets/img/loaderIcon/file.png" alt="">
                </div>

                <span v-if="fileName">{{ props.fileName }}</span>
                <span v-else>Выберите файл для загрузки</span>
            </div>
        
            <div class="rigthSideBar">
                <span>{{ loadedSize }} из {{ props.maxFileSize }} КБ (МБ)</span>
                <div class="pauseButton">
                    <img src="../assets/img/loaderIcon/pause.png" alt="">
                </div>
            </div>
            
        </div>

        <div class="progressBar">
            <progress 
                max="100" :value="props.progress">
            </progress>
            
        </div>
        
    </div>
</template>

<style scoped>
.progressBar {
    display: flex;
    justify-content: center;
}

progress {
    width: 100%;
    height: 10px;
}

.wrapper {
    display: flex;
    justify-content: space-between;
}

.loaderWrapper {
    width: 100%;
    height: 82px;
    border: 1px solid #D5E3F0;
    display: flex;
    flex-direction: column;
    padding: 16px 20px 16px 16px;
    gap: 16px;
}

.iconBox {
    width: 44px;
    height: 44px;
    background-color: #E3F2F9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.iconBox img {
    width: 24px;
    height: 24px;
}

.pauseButton img {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.leftSideBar {
    display: flex;
    align-items: center;
    gap: 10px;
}

.rigthSideBar {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>