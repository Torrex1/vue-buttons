<template>
    <header class="container">
        <h2>Привет, тык по кнопкам для перехода на нужную страницу</h2>
    </header>

    <main>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px;">
            
            <div class="choiceButton">
                <h3>Radio & Checkboxes</h3>
            
                <RouterLink to="/buttons">
                    <button>Кастомные кнопочки</button>
                </RouterLink>
            </div>

            <div class="uploadFile">
                <h3>Upload file task</h3>

                <RouterLink to="/upload-file">
                    <button>Кастомный загрузчик файлов</button>
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* стилизация кнопок на странице */
footer label {
    font-size: 23px;
    position: absolute;
    bottom: 20px;
    right: 50px;
}

button {
    padding: 20px;
    width: 300px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid rgb(198, 194, 194);
    border-radius: 5px;
}

button:hover {
    background-color: rgb(237, 237, 237);
    box-shadow: 3px 4px 5px -2px rgba(34, 60, 80, 0.2) inset;
}
/* ----- */


/* стилизация подзаголовков  */
h3 {
    font-weight: normal;
    font-size: 30px;
}
/* ---- */

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 5%;
    margin-bottom: 10%;
}

.container h2 {
    align-self: center;
    font-weight: normal;
    font-size: 40px;
    text-align: center;
}

.choiceButton {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.uploadFile {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>