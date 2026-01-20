<template>
  <div class="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-3 transform transition duration-300 mb-6">
    <!-- Image Section -->
    <div class="md:w-1/3 relative">
      <img :src="image" :alt="title" class="w-full h-48 md:h-full object-cover">
    </div>

    <!-- Content Section -->
    <div class="md:w-2/3 p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center text-sm text-gray-500 mb-2">
          <span v-if="author">By <span class="text-gray-900 font-medium">{{ author }}</span></span>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition duration-200">
          {{ title }}
        </h3>

        <div class="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div class="flex items-center gap-1">
            <i class="fa fa-clock-o"></i> <span>{{ duration }}</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="fa fa-graduation-cap"></i> <span>{{ students }} Students</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="fa fa-bar-chart"></i> <span>{{ level }}</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="fa fa-file-text-o"></i> <span>{{ lessons }} Lessons</span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
        <div class="flex items-center gap-2">
          <span v-if="oldPrice" class="text-gray-400 line-through text-sm">${{ oldPrice }}</span>
          <span v-if="price === 'Free'" class="text-green-500 font-bold text-lg">Free</span>
          <span v-else class="text-orange-500 font-bold text-lg">${{ price }}</span>
        </div>
        
        <button class="text-gray-700 font-semibold text-sm hover:text-orange-500 transition-colors flex items-center gap-1 group" @click="$router.push('/courseview')">
          View More <span class="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/300x200'
  },
  category: {
    type: String,
    default: 'Photography'
  },
  author: {
    type: String,
    default: 'Determined-Poitras'
  },
  title: {
    type: String,
    default: 'Create An LMS Website With LearnPress'
  },
  duration: {
    type: String,
    default: '2 Weeks'
  },
  students: {
    type: [Number, String],
    default: 156
  },
  level: {
    type: String,
    default: 'All levels'
  },
  lessons: {
    type: [Number, String],
    default: 20
  },
  price: {
    type: [Number, String],
    default: 'Free'
  },
  oldPrice: {
    type: [Number, String],
    default: 29.0
  }
})
</script>
