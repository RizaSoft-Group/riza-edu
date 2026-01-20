<template lang="html">
    <div class="container px-5 my-20 mx-auto">
        <div class="latest">
            <div class="categories-header flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-3xl mb-4 ">Latest articles</h1>
                    <p>Explore our Free Articles</p>
                </div>
                <router-link to="allcategories">
                    <el-button type="warning" round size="large">
                        All Articles
                    </el-button>
                </router-link>
            </div>
            <div class="latest-content py-14 flex gap-8 lg:flex-row flex-col">
                <router-link to="/latest"
                    class="card group flex flex-col rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition duration-300 transform">
                    <div class="card-header">
                        <img src="/latest/Rectangle_141.svg" alt="learnpress"
                            class="w-full h-64 object-cover rounded-t-lg" />
                    </div>
                    <div class="card-conten p-6">
                        <h2
                            class="text-pretty mb-4 font-bold text-xl transition-colors duration-300 group-hover:text-orange-500 ">
                            Best LearnPress WordPress Theme Collection for 2023
                        </h2>
                        <div class="flex items-center gap-2 mb-4">
                            <el-icon style="font-size: 25px; color:orange;">
                                <Calendar />
                            </el-icon>
                            <p>Jan 24, 2023</p>
                        </div>
                        <p class="text-pretty text-gray-500">Looking for an amazing & well-functional LearnPress
                            WordPress Theme?...</p>
                    </div>
                </router-link>

                <router-link to="/latest"
                    class="card group flex flex-col rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition duration-300 transform">
                    <div class="card-header">
                        <img src="/latest/Rectangle_140.svg" alt="learnpress"
                            class="w-full h-64 object-cover rounded-t-lg" />
                    </div>
                    <div class="card-conten p-6">
                        <h2
                            class="text-pretty mb-4 font-bold text-xl transition-colors duration-300 group-hover:text-orange-500 ">
                            Best LearnPress WordPress Theme Collection for 2023
                        </h2>
                        <div class="flex items-center gap-2 mb-4">
                            <el-icon style="font-size: 25px; color:orange;">
                                <Calendar />
                            </el-icon>
                            <p>Jan 24, 2023</p>
                        </div>
                        <p class="text-pretty text-gray-500">Looking for an amazing & well-functional LearnPress
                            WordPress Theme?...</p>
                    </div>
                </router-link>

                <router-link to="/latest"
                    class="card group flex flex-col rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition duration-300 transform">
                    <div class="card-header">
                        <img src="/latest/Rectangle_139.svg" alt="learnpress"
                            class="w-full h-64 object-cover rounded-t-lg offset-top" />
                    </div>
                    <div class="card-conten p-6">
                        <h2
                            class="text-pretty mb-4 font-bold text-xl transition-colors duration-300 group-hover:text-orange-500 ">
                            Best LearnPress WordPress Theme Collection for 2023
                        </h2>
                        <div class="flex items-center gap-2 mb-4">
                            <el-icon style="font-size: 25px; color:orange;">
                                <Calendar />
                            </el-icon>
                            <p>Jan 24, 2023</p>
                        </div>
                        <p class="text-pretty text-gray-500">Looking for an amazing & well-functional LearnPress
                            WordPress Theme?...</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
