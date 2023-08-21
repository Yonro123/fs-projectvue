<template>
  <div class="addUser">
    <router-link :to="{ name: 'UserAdd' }">Добавить нового пользователя</router-link>
  </div>
  <h2>Список пользователя</h2>
  <div class="cards">
    <user-list v-for="user in users" :user="user" :key="user.userId" @delete-user="DeleteUser">
    </user-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { User } from '@/types/user';
import UserList from '@/components/UserList.vue';

let users = ref<User[]>([]);

const getUsers = () => {
  users.value = JSON.parse(localStorage.getItem('users') as string) || [];
};

onMounted(() => {
  getUsers();
});

const DeleteUser = (userId: number) => {
  const newUsers = users.value.filter((elem: any) => elem.userId !== userId);
  localStorage.setItem('users', JSON.stringify(newUsers));
  getUsers();
};
</script>

<style scoped>
.addUser {
  position: absolute;
  top: 30px;
  right: 30px;
}
.addUser a {
  color: white;
  text-decoration: none;
}
h2 {
  text-align: center;
  margin-bottom: 50px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
