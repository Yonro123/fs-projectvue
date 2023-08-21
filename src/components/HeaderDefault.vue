<template>
  <div class="header">
    <div class="headerLogo"><img src="../assets/logo.svg" alt="" /></div>
    <ul class="headerMenu">
      <li><router-link :to="{ name: 'HomePage' }">Главная</router-link></li>
      <li><router-link :to="{ name: 'UsersList' }">Список Пользователей</router-link></li>
      <li><router-link :to="{ name: 'LessonsList' }">Список Занятий</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 20px 0;
}
.headerLogo {
  width: 24px;
  height: 24px;
}
.headerMenu {
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 20px;
}
.headerMenu a {
  color: white;
  text-decoration: none;
}
</style>
