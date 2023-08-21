<template>
  <div>
    <h2>{{ user.surname }} {{ user.name }}</h2>
    <p>{{ user.date }}</p>
    <p>{{ user.role }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  userId: string;
}
const props = defineProps<Props>();

const user = JSON.parse(localStorage.getItem('users') as string).filter(
  (elem: any) => elem.userId === Number(props.userId)
)[0];
</script>

<style scoped></style>
