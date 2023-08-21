<template>
  <div class="container">
    <h1>{{ newLesson.title }}</h1>
    <div class="lessinSubtitle">
      <span>{{ newLesson.date }}</span>
      <h3>{{ newLesson.teacher }}</h3>
    </div>
    <div class="lessonDesc">{{ newLesson.description }}</div>
    <div class="students">
      <label v-for="student in newLesson.students"
        >{{ `${student.nameStudent}` }}
        <p v-if="gradeVisible">{{ student.grade }}</p>
        <input v-else type="number" v-model="student.grade"
      /></label>
      <button v-if="gradeVisible" @click="editGrade">Редактировать оценки</button>
      <button v-else @click="saveGrade">Сохранить оценки</button>
    </div>
    <div class="HomeWork">
      <div v-if="HomeWorkVisible()" class="addHomeWork">
        <button v-if="btnVisible" @click="addHomeWork">Добавить домашнее задание</button>
        <div v-else>
          <my-input
            type="text"
            label="Название предмета: "
            placeholder="Название"
            v-model="homeWork.title"
          ></my-input>
          <textarea placeholder="Описание домашнего задания" v-model="homeWork.desc"></textarea>
          <my-input type="date" label="Срок выполнения" v-model="homeWork.date"></my-input>
          <button @click="saveHomeWork">Сохранить</button>
        </div>
      </div>
      <div v-else>
        Домашнее задание
        <h2>Название: {{ newLesson.homeWork.title }}</h2>
        <p>Описание: {{ newLesson.homeWork.desc }}</p>
        <p>Срок выполнения: {{ newLesson.homeWork.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface Props {
  lessonId?: string;
}
const props = defineProps<Props>();
const gradeVisible = ref<boolean>(true);
const btnVisible = ref<boolean>(true);
let newLesson = {
  date: '',
  description: '',
  homeWork: {
    title: '',
    desc: '',
    date: ''
  },
  lessonId: '',
  students: [
    {
      nameStudent: '',
      grade: ''
    }
  ],
  teacher: '',
  title: ''
};
JSON.parse(localStorage.getItem('lessons') as string).filter((elem: any, index: string) => {
  if (elem.lessonId === Number(props.lessonId)) {
    newLesson = JSON.parse(localStorage.getItem('lessons') as string)[index];
    localStorage.removeItem('indexLesson');
    localStorage.setItem('indexLesson', index);
  }
});
const lesson = JSON.parse(localStorage.getItem('lessons') as string);

const editGrade = () => {
  gradeVisible.value = !gradeVisible.value;
};
const saveGrade = () => {
  gradeVisible.value = !gradeVisible.value;
  const local = localStorage.getItem('indexLesson');
  if (typeof local === 'string') lesson[local] = { ...newLesson };

  localStorage.setItem('lessons', JSON.stringify(lesson));
  window.location.reload();
};

const HomeWorkVisible = () => {
  if (!newLesson.homeWork) {
    return true;
  } else {
    false;
  }
};

const homeWork = {
  title: '',
  desc: '',
  date: ''
};

const addHomeWork = () => {
  btnVisible.value = !btnVisible.value;
};
const saveHomeWork = () => {
  lesson[localStorage.getItem('indexLesson') as string] = {
    ...lesson[localStorage.getItem('indexLesson') as string],
    homeWork
  };
  localStorage.setItem('lessons', JSON.stringify(lesson));
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
h1 {
  text-align: center;
  font-weight: 700;
  font-size: 40px;
}
.lessinSubtitle {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.lessinSubtitle span {
  font-size: 20px;
}
.lessinSubtitle h3 {
  font-size: 20px;
  font-weight: 500;
}
.lessonDesc {
  margin-bottom: 20px;
  font-size: 16px;
  padding: 20px;
  border: 2px solid white;
}
.students {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.students label {
  display: grid;
  grid-template-columns: 200px 30px;
  align-items: center;
  gap: 50px;
}
.students input {
  padding: 5px;
}
textarea {
  width: 300px;
  height: 150px;
  padding: 10px;
  border-radius: 20px;
}

button {
  width: max-content;
  margin-left: auto;
  padding: 10px 20px;
  background-color: gray;
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>
