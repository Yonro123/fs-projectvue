<template>
  <div class="editPage">
    <router-link :to="{ name: 'UsersList' }" class="returnBack">Отмена</router-link>
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
      <label>Учитель <input type="radio" value="Учитель" name="role" v-model="user.role" /></label>
      <label>Ученик <input type="radio" value="Ученик" name="role" v-model="user.role" /></label>
    </div>
    <router-link :to="{ name: 'UsersList' }" @click="editLocalStorage">Сохранить</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { User } from '@/types/user';
interface Props {
  userId: string;
}
const props = defineProps<Props>();
let user = ref<User>({} as User);

onMounted(() => {
  JSON.parse(localStorage.getItem('users') as string).filter((elem: any, index: any) => {
    if (elem.userId === Number(props.userId)) {
      localStorage.setItem('index', index);
      user.value = JSON.parse(localStorage.getItem('users') as string)[index];
    }
  });
});

const allUser = JSON.parse(localStorage.getItem('users') as string);

const editLocalStorage = (e: any) => {
  e.preventDefault();

  allUser[localStorage.getItem('index') as string] = {
    ...user.value
  };

  localStorage.setItem('users', JSON.stringify(allUser));
};
</script>

<style scoped>
.returnBack {
  display: block;
  margin-left: 0px;
  margin-bottom: 10px;
}
.editPage {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: max-content;
}
a {
  width: max-content;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 20px;
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
