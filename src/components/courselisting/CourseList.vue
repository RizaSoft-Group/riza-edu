<template>
  <div>

    <!-- Top Bar -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-4 md:mb-0">All Courses</h2>

      <div class="flex items-center gap-4 w-full md:w-auto">
        <div class="relative w-full md:w-64">
          <input type="text" placeholder="Search"
            class="w-full pl-4 pr-10 py-2 border-b-2 border-gray-400 focus:outline-none focus:border-orange-500">
          <i class="fa fa-search absolute right-3 top-3 text-gray-400"></i>
        </div>

        <div class="flex gap-2">
          <button class="p-2 text-gray-400 hover:text-orange-500 cursor-pointer"><i class="fa fa-th-large"></i></button>
          <button class="p-2 text-gray-400 hover:text-orange-500 cursor-pointer"><i class="fa fa-list"></i></button>
        </div>
      </div>
    </div>

    <!-- Course List -->
    <div>
      <CourseCard v-for="(course, index) in courses" :key="index" v-bind="course" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import CourseCard from './CourseCard.vue';

const courses = ref([
  {
    image: '/featurecatigories/learnpress.jpg',
    category: 'Photography',
    author: 'Determined-Poitras',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    oldPrice: 29.0
  },
  {
    image: '/featurecatigories/thimpress.jpg',
    category: 'Photography',
    author: 'Determined-Poitras',
    title: 'Design A Website With ThimPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    oldPrice: 29.0
  },
  {
    image: '/featurecatigories/angularcourse.jpg',
    category: 'Photography',
    author: 'Determined-Poitras',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    oldPrice: 29.0
  },
  {
    image: '/featurecatigories/.jpg',
    category: 'Photography',
    author: 'Determined-Poitras',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    oldPrice: 29.0
  },
  {
    image: '/featurecatigories/image-2.png',
    category: 'Photography',
    author: 'Determined-Poitras',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    oldPrice: 29.0
  },
  {
    image: '/featurecatigories/image-3.jpg',
    category: 'Photography',
    author: 'Determined-Poitras',
    title: 'Create An LMS Website With LearnPress',
    duration: '2 Weeks',
    students: 156,
    level: 'All levels',
    lessons: 20,
    price: 'Free',
    oldPrice: 29.0
  }
])
</script>
