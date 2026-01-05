<template lang="html">
    <div class="container px-5 my-20 mx-auto">
        <div class="latest">
            <div class="categories-header flex justify-between items-center">
                <div>
                    <h1 class="font-bold text-3xl mb-3">Latest articles</h1>
                    <p>Explore our Free Articles</p>
                </div>
                <router-link to="allcategories">
                    <el-button type="warning" round size="large">
                        All Articles
                    </el-button>
                </router-link>
            </div>
            <div class="latest-content py-14 flex gap-8">
                <router-link to="/learnpress"
                    class="card flex flex-col rounded-lg bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition duration-300 transform">
                    <div class="card-header">
                        <img src="/featurecatigories/learnpress.jpg" alt="learnpress"
                            class="w-full h-64 object-cover rounded-t-lg" />
                    </div>
                    <div class="card-content flex-1 flex flex-col justify-end p-6">
                        <h2
                            class="mb-auto font-bold text-xl transition-colors duration-300 group-hover:text-orange-500 ">
                            Create An LMS Website With LearnePress
                        </h2>
                        <div class="flex items-center text-sm text-gray-600 my-8">
                            <div class="flex items-center mr-12!">
                                <el-icon class="mr-2! text-orange-500! text-xl!">
                                    <i class="fas fa-clock"></i>
                                </el-icon>
                                <span>2 Weeks</span>
                            </div>
                            <div class="flex items-center">
                                <el-icon class="mr-2! text-orange-500! text-xl!">
                                    <i class="fas fa-graduation-cap"></i>
                                </el-icon>
                                <span>156 Students</span>
                            </div>
                        </div>
                        <div class="card-line bg-gray-200 h-0.5"></div>
                        <div class="card-footer flex justify-between items-center mt-4">
                            <div class="flex">
                                <p class="line-through! text-gray-500 me-2">$29.0</p>
                                <span class="text-green-500 font-bold">Free</span>
                            </div>
                            <el-button type="text" class="text-orange-500! flex items-center">
                                View More
                            </el-button>
                        </div>
                    </div>
                </router-link>

                <router-link to="/learnpress"
                    class="card flex flex-col rounded-lg bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition duration-300 transform">
                    <div class="card-header">
                        <img src="/featurecatigories/thimpress.jpg" alt="learnpress"
                            class="w-full h-64 object-cover rounded-t-lg" />
                    </div>
                    <div class="card-content flex-1 flex flex-col justify-end p-6">
                        <h2
                            class="mb-auto font-bold text-xl transition-colors duration-300 group-hover:text-orange-500">
                            Design A Website With ThimPress
                        </h2>
                        <div class="flex items-center text-sm text-gray-600 my-8">
                            <div class="flex items-center mr-12!">
                                <el-icon class="mr-2! text-orange-500! text-xl!">
                                    <i class="fas fa-clock"></i>
                                </el-icon>
                                <span>2 Weeks</span>
                            </div>
                            <div class="flex items-center">
                                <el-icon class="mr-2! text-orange-500! text-xl!">
                                    <i class="fas fa-graduation-cap"></i>
                                </el-icon>
                                <span>156 Students</span>
                            </div>
                        </div>
                        <div class="card-line bg-gray-200 h-0.5"></div>
                        <div class="card-footer flex justify-between items-center mt-4">
                            <div class="flex">
                                <p class="!line-through text-gray-500 me-2">$59.0</p>
                                <span class="text-red-500 font-bold">$49.0</span>
                            </div>
                            <el-button type="text" class="!text-orange-500 flex items-center">
                                View More
                            </el-button>
                        </div>
                    </div>
                </router-link>

                <router-link to="/learnpress"
                    class="card flex flex-col rounded-lg bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition duration-300 transform">
                    <div class="card-header">
                        <img src="/featurecatigories/image.jpg" alt="learnpress"
                            class="w-full h-64 object-cover rounded-t-lg" />
                    </div>
                    <div class="card-content flex-1 flex flex-col justify-end p-6">
                        <h2 class="mb-2 font-bold text-xl transition-colors duration-300 group-hover:text-orange-500">
                            Create
                            An LMS Website With LearnePress</h2>
                        <div class="flex items-center text-sm text-gray-600 my-8">
                            <div class="flex items-center !mr-12">
                                <el-icon class="!mr-2 !text-orange-500 !text-xl">
                                    <i class="fas fa-clock"></i>
                                </el-icon>
                                <span>2 Weeks</span>
                            </div>
                            <div class="flex items-center">
                                <el-icon class="!mr-2 !text-orange-500 !text-xl">
                                    <i class="fas fa-graduation-cap"></i>
                                </el-icon>
                                <span>156 Students</span>
                            </div>
                        </div>
                        <div class="card-line bg-gray-200 h-0.5"></div>
                        <div class="card-footer flex justify-between items-center mt-4">
                            <div class="flex">
                                <p class="!line-through text-gray-500 me-2">$29.0</p>
                                <span class="text-green-500 font-bold">Free</span>
                            </div>
                            <el-button type="text" class="!text-orange-500 flex items-center">
                                View More
                            </el-button>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>