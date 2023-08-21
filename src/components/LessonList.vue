<template>
  <div class="card">
    <router-link
      :to="{
        name: 'LessonPage',
        params: {
          lessonId: props.lesson.lessonId
        }
      }"
      class="cardTitle"
    >
      <h2>{{ props.lesson.title }}</h2>
    </router-link>
    <p>Дата: {{ props.lesson.date }}</p>
    <p>Учитель: {{ props.lesson.teacher }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Lesson } from '@/types/lesson';
interface Props {
  lesson: Lesson;
}
const props = defineProps<Props>();
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
  padding: 20px;
  background-color: #121228;
  box-shadow: 4px 4px 15px black;
  border-radius: 20px;
}
h2 {
  font-weight: 700;
  font-size: 20px;
}
p {
  font-size: 16px;
}
h2,
p {
  text-align: center;
  color: white;
}
a {
  text-decoration: none;
}
</style>
