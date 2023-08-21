<template>
  <div class="addPage">
    <router-link :to="{ name: 'LessonsList' }" class="returnBack">Отмена</router-link>
    <h2>Добавить Занятие</h2>
    <form class="form">
      <my-input
        label="Заголовок: "
        placeholder="Введите тему занятия"
        v-model="lesson.title"
        type="text"
      ></my-input>
      <label class="selected">
        Учитель:
        <select v-model="lesson.teacher">
          <option>Выберите учителя</option>
          <option
            v-for="teacher of teachers"
            :value="`${teacher.surname} ${teacher.name}`"
            :key="teacher.userId"
          >
            {{ teacher.surname }} {{ teacher.name }}
          </option>
        </select>
      </label>
      <my-input label="Дата занятия: " v-model="lesson.date" type="date"></my-input>
      <textarea placeholder="Описание занятии" v-model="lesson.description"></textarea>
      <div class="checked">
        <label v-for="student in students" :key="student.userId"
          ><input type="checkbox" :value="`${student.surname} ${student.name}`" />{{
            student.surname
          }}
          {{ student.name }}</label
        >
      </div>
      <router-link :to="{ name: 'LessonsList' }" @click="setLessonLocalStorage"
        >Сохранить</router-link
      >
    </form>
  </div>
</template>

<script setup lang="ts">
const getLocal = JSON.parse(localStorage.getItem('users') as string) || [];
const teachers = getLocal.filter((elem: any) => elem.role === 'Учитель');
const students = getLocal.filter((elem: any) => elem.role === 'Ученик');
let arrLessons = [];
let lesson = {
  lessonId: new Date().getTime(),
  title: '',
  teacher: 'Выберите учителя',
  date: '',
  description: ''
};
const setLessonLocalStorage = (e: any) => {
  e.preventDefault();
  const studentsChecked = document.querySelectorAll('input:checked');
  let arrStudents = [];
  for (let studentChecked of studentsChecked) {
    const obj = { nameStudent: studentChecked.value, grade: 0 };
    arrStudents.push(obj);
  }

  lesson = { ...lesson, students: arrStudents };

  if (localStorage.getItem('lessons')) {
    arrLessons = JSON.parse(localStorage.getItem('lessons') as string);
  }
  arrLessons.push(lesson);
  localStorage.setItem('lessons', JSON.stringify(arrLessons));
};
</script>

<style scoped>
.addPage {
  width: max-content;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
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
.selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 300px;
}
.selected select {
  width: 200px;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}
textarea {
  width: 300px;
  height: 150px;
  padding: 10px;
  border-radius: 20px;
}
.checked {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.checked label {
  display: flex;
  gap: 20px;
}
</style>
