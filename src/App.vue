<script setup>

</script>

<template>
  <div class="radioButtons">
    <h1 style="text-align: center;">Radio Button</h1>

    <ul class="radioButtonList">
      <li>
        <input id="rb1" type="radio">
        <span class="customRadio"></span>
        <label for="rb1">Текст переключателя</label>
      </li>

      <li>
        <input id="rb2" type="radio">
        <span class="customRadio"></span>
        <label for="rb2">Текст переключателя</label>
      </li>

      <li>
        <input id="rb3" type="radio">
        <span class="customRadio"></span>
        <label for="rb3">Текст переключателя</label>
      </li>

      <li>
        <input id="rb4" type="radio">
        <span class="customRadio"></span>
        <label for="rb4">Текст переключателя</label>
      </li>

      <li>
        <input id="rb5" type="radio">
        <span class="customRadio"></span>
        <label for="rb5">Текст переключателя</label>
      </li>

      <li>
        <input id="rb6" type="radio">
        <span class="customRadio"></span>
        <label for="rb6">Текст переключателя</label>
      </li>

      <li>
        <input id="rb7" type="radio">
        <span class="customRadio"></span>
        <label for="rb7">Текст переключателя</label>
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
  /* display: none; */
}

label {
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.customRadio {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid var(--border-color);
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

input[type="radio"]:checked + .customRadio::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: var(--radio-bg);
  border-radius: 50%;
  margin: 5px;
}

input[type="radio"]:hover + .customRadio::before, .customRadio:hover::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 5px;
  background-color: #D5E3F0;
}

input[type="radio"]:focus + .customRadio {
  box-shadow: 0px 0px 4px 2px #0066AF99;

}
</style>