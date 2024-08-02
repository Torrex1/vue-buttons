<script setup>
    import {ref} from 'vue';
</script>

<template>
    <div class="checkboxes">
        <h1 style="text-align: center;">Checkboxes</h1>
        <ul class="checkboxesList">
            <li>
                <input type="checkbox" id="cb1" checked>
                <span class="customCheckbox"></span>
                <label for="cb1">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb2">
                <span class="customCheckbox"></span>
                <label for="cb2">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb3" disabled>
                <span class="customCheckbox"></span>
                <label for="cb3">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb4" disabled checked>
                <span class="customCheckbox"></span>
                <label for="cb4">Текст переключателя</label>
            </li>
            <li>
                <input type="checkbox" id="cb5" disabled>
                <span class="customCheckbox"></span>
                <label for="cb5" style="color: var(--error-border);">Текст переключателя</label>
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
    background-color: #F0F5FB;
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

input[type="checkbox"]:not(:checked):not(:disabled):hover + .customCheckbox::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('../assets/img/Vector.svg');
    background-position: center;
    background-repeat: no-repeat;
    opacity: .2;
}

input[type="checkbox"]:focus + .customCheckbox {
    box-shadow: 0px 0px 4px 2px #0066AF99;
}

input[type="checkbox"]:disabled + .customCheckbox {
    background-color: var(--disabled-bg);
    border: 1px solid var(--disabled-border);
    cursor: default;
}

input[type="checkbox"]:disabled:checked + .customCheckbox::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('../assets/img/VectorDisabled.svg');
    background-position: center;
    background-repeat: no-repeat;
}

#cb5 + .customCheckbox {
    border: 1px solid var(--error-border);
    background-color: var(--error-bg);
}

</style>