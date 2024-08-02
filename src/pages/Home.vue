<template>
    <header class="container">
        <h2>Привет, это что-то типо лобби. 
            Отсюда ты можешь попасть куда захочешь. 
            Жмакай по кнопкам, они приведут тебя на нужное задание :D 
        </h2>
    </header>

    <main>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px;">
            
            <div class="choiceButton">
                <h3>Radio & Checkboxes</h3>
            
                <RouterLink to="/buttons">
                    <button>вперед к кнопкам</button>
                </RouterLink>
            </div>

            <div class="uploadFile">
                <h3>Upload file task</h3>

                <RouterLink to="/upload-file">
                    <button>1...2..3... Поехали</button>
                </RouterLink>
            </div>
        </div>
    </main>

    <footer>
        <label>Оставить
            <a href="mailto:TarikulievRM@stud.rosnou.ru?cc=flendik666@gmail.com&subject=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%2C%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D1%8E%D1%89%D0%B8%D0%B9%21%20%D0%9E%D1%86%D0%B5%D0%BD%D0%B8%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%BC%D0%BD%D0%BE%D0%B9%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%BF%D0%B6%D1%88%D0%BA%D0%B0%20%3A%29&body=%D0%A7%D0%B5%D0%BA%D0%B1%D0%BE%D0%BA%D1%81%D1%8B%20%D0%B8%20%D1%80%D0%B0%D0%B4%D0%B8%D0%BE%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8%3A%20___%20%28%D0%BE%D1%82%201%20%D0%B4%D0%BE%205%29%20%0A%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%20%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%3A%20___%20%28%D0%BE%D1%82%201%20%D0%B4%D0%BE%205%29%0A%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B8%2C%20%D0%BF%D0%BE%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D1%8E%3A">
                feedback ☺
            </a>
        </label>
    </footer>
    
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