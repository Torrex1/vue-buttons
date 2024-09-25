<script setup>
    const props = defineProps({
        fileName: String,
        loadedSize: Number,
        maxFileSize: Number,
        progress: Number,
        listStatus: String,
        statusBorderStyle: String,
        iconBoxStyle: String,
        toUploadComplete: Boolean
    })
</script>

<template>
    <div class="loaderWrapper" :style="statusBorderStyle">

        <div class="wrapper">
            <div class="leftSideBar">
                <div class="iconBox" :style="iconBoxStyle">
                    <img :src="listStatus" alt="">
                </div>
                
                <span>{{ fileName }}</span>
            </div>
        
            <div class="rigthSideBar">
                <span v-if="!toUploadComplete">{{ loadedSize }} из {{ maxFileSize }} КБ (МБ)</span>
                <span v-else>{{ maxFileSize }} КБ</span>
                <div class="pauseButton">
                    <img src="../assets/img/loaderIcon/pause.png" alt="">
                </div>
            </div>
            
        </div>

        <div class="progressBar" :style="{display: toUploadComplete ? 'none' : ''}">
            <progress 
                max="100" :value="progress">  
            </progress>
        </div>
        
    </div>
</template>

<style scoped>
.progressBar {
    display: flex;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 20px 16px 16px;
    gap: 16px;
    border-radius: 8px;
}

.iconBox {
    width: 44px;
    height: 44px;
    /* background-color: #E3F2F9; */
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