<template>
  <div class="bg-[url(/hero/hero-bg.png)] bg-no-repeat relative bg-cover bg-center">
    <img
      src="/hero/bag.png"
      alt="Bag Image"
      class="absolute hidden xl:block w-64 2xl:w-auto top-10 left-5 2xl:left-20"
    />
    <img
      src="/hero/pencil.png"
      alt="Pencil Image"
      class="absolute bottom-6 right-0"
    />
    <div class="container mx-auto px-5 flex justify-between items-center relative z-0">
      <img
        src="/hero/text-effect.png"
        alt="Text-effect Image"
        class="absolute w-244.25 h-104.75 top-[calc(50%-209.5px)] right-0 -z-10"
      />
      <div class="flex flex-col items-start gap-6 w-130">
        <h1 class="font-semibold text-[50px]">Build Skills With Online Course</h1>
        <p class="text-lg text-gray-600">
          We denounce wuth righteous indignation and dislike men who are so beguild and demoralized that cannot
          trouble.
        </p>
        <el-button
          size="large"
          type="button"
          class="rounded-[50px]! hover:bg-orange-400! bg-orange-500! text-white! border-0!"
        >
          Post Comment
        </el-button>
      </div>
      <img
        src="/hero/hero-student.png"
        alt="Hero Image"
      />
    </div>
  </div>
</template>

<style scoped>
  img[src="/hero/pencil.png"] {
    display: none;
  }
  @media (min-width: 1840px) {
    img[src="/hero/pencil.png"] {
      display: block;
    }
  }
</style>