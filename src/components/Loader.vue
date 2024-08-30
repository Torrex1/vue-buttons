<script setup>
    const props = defineProps({
        fileName: String,
        maxFileSize: Number
    })
</script>

<template>
    <div class="loaderWrapper">

        <div class="leftSideBar">
            <div class="iconBox">
                <img src="../assets/img/loaderIcon/file.png" alt="">
            </div>

            <span v-if="fileName">{{ props.fileName }}</span>

            <span v-else>Выберите файл для загрузки</span>

            <div class="loadingLine"></div>
        </div>
        
        <div class="rigthSideBar">
            <span>0 из {{ props.maxFileSize }} КБ (МБ)</span>
            <div class="buttons">
                <img src="../assets/img/loaderIcon/pause.png" alt="">
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.loaderWrapper {
    width: 100%;
    height: 82px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.buttons img {
    width: 20px;
    height: 20px;
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