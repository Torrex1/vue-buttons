<template>
    <div class="radioButtons">
    <h1 style="text-align: center;">Radio Button</h1>

    <ul class="radioButtonList">
      <li>
        <label>
          <input type="radio" checked>
          <span class="customRadio"></span>
          Текст переключателя
        </label>
      </li>

      <li>
        <label>
          <input type="radio">
          <span class="customRadio"></span>
          Текст переключателя
        </label>
      </li>

      <li>
        <label>
          <input type="radio" disabled>
          <span class="customRadio"></span>
          Текст переключателя
        </label>
      </li>

      <li>
        <label>
          <input type="radio" disabled checked>
          <span class="customRadio"></span>
          Текст переключателя
        </label>
      </li>

      <li>
        <label style="color: var(--error-border);">
          <input id="rb5" type="radio" disabled>
          <span class="customRadio"></span>
          Текст переключателя
        </label>
      </li>
    </ul>
  
  </div>
</template>

<style scoped>
.radioButtons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.radioButtonList {
  margin-left: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input[type="radio"] { 
  appearance: none;
}

label {
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.customRadio {
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid var(--border-color);
  background-color: #F8F9FB;
  border-radius: 50%;
  cursor: pointer;
}

input[type="radio"]:checked + .customRadio::before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: var(--radio-bg);
  border-radius: 50%;
  margin: 5px;
}

input[type="radio"]:not(:checked):hover + .customRadio::before, .customRadio:hover::before{
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 5px;
  background-color: #D5E3F0;
}

input[type="radio"]:focus + .customRadio {
  box-shadow: 0px 0px 4px 2px #0066AF99;
}

input[type="radio"]:disabled + .customRadio {
  cursor: default;
  border: 1px solid var(--disabled-border);
  background-color: var(--disabled-bg);
}

input[type="radio"]:disabled:checked + .customRadio::before {
  background-color: #6E7F99;
}

#rb5 + .customRadio {
  border: 1px solid var(--error-border);
  background-color: var(--error-bg);
}

#rb5 + .customRadio::before {
  background-color: var(--error-bg);
}
</style>