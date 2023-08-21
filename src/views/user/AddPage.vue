<template>
  <div class="addPage">
    <router-link :to="{ name: 'UsersList' }" class="returnBack">Отмена</router-link>
    <h2>Добавить Пользователя</h2>
    <form class="form">
      <my-input label="Имя: " placeholder="Введите имя" v-model="user.name" type="text"></my-input>
      <my-input
        label="Фамилия: "
        placeholder="Введите фамилию"
        v-model="user.surname"
        type="text"
      ></my-input>
      <my-input
        label="Дата: "
        placeholder="Введите дату рождения"
        type="date"
        v-model="user.date"
      ></my-input>
      <div class="checked">
        Роль:
        <label
          >Учитель <input type="radio" name="role" value="Учитель" v-model="checkedRole"
        /></label>
        <label
          >Ученик <input type="radio" name="role" value="Ученик" v-model="checkedRole"
        /></label>
      </div>
      <button @click="setLocalStorage">Создать пользователя</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import type { User } from '@/types/user';
let arrUser = [];
let user = {
  name: '',
  surname: '',
  date: ''
};
const checkedRole = ref<string>('');

const router = useRouter();

const BtnVisible = computed(() => {
  if (user.name === '') return true;
  if (checkedRole.value === '') return true;
  return false;
});

const setLocalStorage = (e: any) => {
  e.preventDefault();
  if (localStorage.getItem('users')) {
    arrUser = JSON.parse(localStorage.getItem('users') as string);
  }
  user = { ...user, role: checkedRole.value, userId: new Date().getTime() };

  arrUser.push(user);
  localStorage.setItem('users', JSON.stringify(arrUser));

  router.push({ name: 'UsersList' });
};
</script>

<style scoped>
.addPage {
  width: max-content;
}
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
a,
.returnBack {
  width: max-content;
  padding: 10px 20px;
  margin: 0 auto;
  background-color: gray;
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;
}

.checked {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
