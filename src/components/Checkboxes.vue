<template>
    <div class="checkboxes">
        <h1 style="text-align: center;">Checkboxes</h1>
        <ul class="checkboxesList">
            <li>
                <input type="checkbox" id="cb1">
                <span class="customCheckbox"></span>
                <label for="cb1">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb2">
                <span class="customCheckbox"></span>
                <label for="cb2">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb3">
                <span class="customCheckbox"></span>
                <label for="cb3">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb4">
                <span class="customCheckbox"></span>
                <label for="cb4">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb5">
                <span class="customCheckbox"></span>
                <label for="cb5">Текст переключателя</label>
            </li>
        </ul>
    </div>
    
</template>

<style scoped>

.checkboxes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.checkboxesList {
    margin-left: 0;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.customCheckbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-color);
    background-color: #fff;
    cursor: pointer;
    border-radius: 5px;
}

label {
    cursor: pointer;
    margin-left: 10px;
}

input[type="checkbox"]:checked + .customCheckbox::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('../assets/img/Vector.svg');
    background-position: center;
    background-repeat: no-repeat;
}


</style>