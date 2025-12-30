<template>
  <div class="homepage  grid grid-cols-1 md:grid-cols-2 container mx-auto">
    <!-- homepage content -->
    <div class="homepage-content px-20 flex flex-col justify-end max-w-[600] z-[1]">
      <div class="max-w-lg">
        <h1 class="font-semibold text-[50px] mb-4">Build Skills With Online Course</h1>
        <p class="text-lg text-gray-600">
          We denounce wuth righteous indignation and dislike men who are so beguild and demoralized that cannot
          trouble.
        </p>
        <div class="mt-6">
          <el-button size="large" type="button"
            class="!rounded-[50px] hover:!bg-orange-400 !bg-orange-500 !text-white !border-0">
            Post Comment
          </el-button>
        </div>
      </div>
      <!-- student image -->
      <div class="homepage-image">
        <img src="/hero/hero-student.png" alt="Hero Image" class="w-xl" />
      </div>
    </div>
    <!-- text effect -->
    <div class="text-effect">
      <img src="/hero/text-effect.png" alt="Text-effect Image"
        class="text-effect absolute top-30 right-40 z-0 max-w-3xl" />
    </div>
    <!-- bag image -->
    <div class="bag">
      <img src="/hero/bag.png" alt="Bag Image" class="absolute top-10 left-10 z-0" />
    </div>
    <!-- pencil image -->
    <div class="pencil w-50">
      <img src="/hero/pencil.png" alt="Pencil Image" class="absolute bottom-10 right-0 z-0 w-50" />
    </div>
  </div>
  <TopCategories />
  <FeaturedCourses />
</template>
<script>
import FeaturedCourses from './FeaturedCourses.vue';
import TopCategories from './TopCategories.vue';
export default {
  components: {
    TopCategories,
    FeaturedCourses,
  }
}
</script>
<style scoped>
.homepage {
  background-image: url('/hero/hero-bg.png');
  height: 80vh;
  width: 100%;
  background-size: cover;
  padding: 50px;
  position: relative;
}

.homepage .homepage-image {
  position: absolute;
  right: 100px;
  bottom: 0;
  z-index: 2;
}
</style>