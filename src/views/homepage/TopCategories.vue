<template lang="html">
    <div class="container px-30 mx-auto py-20">
        <div class="categories-header flex justify-between items-center">
            <div>
                <h1 class="font-bold text-3xl mb-3">Top Categories</h1>
                <p>Explore our Popular Categories</p>
            </div>
            <<router-link to="courses" class="rounded-[50px] px-2 py-1 border-2 transition duration-300 tranform hover:!bg-orange-500 hover:!text-white hover:!border-orange-500">All Categories</router-link>
        </div>

        <div class="categories-cards grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
            <router-link to="/art-design"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <EditPen />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                    Art & Design
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-development"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <ElementPlus />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                    Development
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-comunacation"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <Share />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                    Comunication
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-videography"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <Film />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                    Videogrphy
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-photography"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <Camera />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                    Photography
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-marketing"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <Money />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                   Marketing
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-content"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <Tickets />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                    Content Writing
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-finance"
                class="block rounded-xl bg-white py-15 px-10 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <OfficeBuilding />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg">
                    Finance
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-scince"
                class="block rounded-xl bg-white p-15 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <Cpu />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg transition-colors duration-300 group-hover:text-orange-500">
                    Scince
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

            <router-link to="/art-network"
                class="block rounded-xl bg-white p-15 text-center shadow-sm transition duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500">
                <el-icon size="48" class="mb-4 !text-orange-500">
                    <Comment />
                </el-icon>

                <h3 class="mb-1 font-semibold text-lg  transition-colors duration-300 group-hover:!text-orange-500">
                    Network
                </h3>

                <p class="text-sm text-gray-500">
                    38 Courses
                </p>
            </router-link>

        </div>
    </div>
</template>

<script>

export default {
    
}
</script>