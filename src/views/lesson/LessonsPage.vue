<template>
  <div class="addLesson">
    <router-link :to="{ name: 'LessonsAdd' }">Добавить новое занятие</router-link>
  </div>
  <h2>Список Занятий</h2>
  <div class="cards">
    <lesson-list v-for="lesson in lessons" :lesson="lesson" :key="lesson.lessonId"></lesson-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Lesson } from '@/types/lesson';
import LessonList from '@/components/LessonList.vue';

let lessons = ref<Lesson[]>([]);
const getLessons = () => {
  lessons.value = JSON.parse(localStorage.getItem('lessons') as string) || [];
};

onMounted(() => {
  getLessons();
});
</script>

<style scoped>
.addLesson {
  position: absolute;
  top: 30px;
  right: 30px;
}
.addLesson a {
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
