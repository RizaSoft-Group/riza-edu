<template>
    <div class="container mx-auto px-5 py-22.5">
        <div class="grid lg:grid-cols-2 grid-cols-1 xl:gap-40 gap-15 items-center ">
            <div class="skill-image">
                <img src="/yourskill/image.png" alt="skill-image" class="w-full order-1">
            </div>

            <div class="skill-content">
                <h1 class="font-bold text-3xl lg:text-4xl leading-tight mb-4">Grow Us Your Skill With LearnPress LMS</h1>
                <p class="mt-6 mb-6 text-gray-500">We denounce with righteous indignation and dislike men who are so beguiled and
                    demoralized that cannot trouble.</p>
                <div class="check flex align-center mb-3">
                    <el-icon size="20px" color="#00f" class="text-green-600! font-bold!">
                        <Check />
                    </el-icon>
                    <h5 class="ms-2">Certification</h5>
                </div>
                <div class="check flex align-center mb-3">
                    <el-icon size="20px" color="#00f" class="!text-green-600 !font-bold">
                        <Check />
                    </el-icon>
                    <h5 class="ms-2">Certification</h5>
                </div>
                <div class="check flex align-center mb-3">
                    <el-icon size="20px" color="#00f" class="!text-green-600 !font-bold">
                        <Check />
                    </el-icon>
                    <h5 class="ms-2">Certification</h5>
                </div>
                <div class="check flex align-center mb-3">
                    <el-icon size="20px" color="#00f" class="!text-green-600 !font-bold">
                        <Check />
                    </el-icon>
                    <h5 class="ms-2">Certification</h5>
                </div>

                <router-link to="/courses">
                    <el-button type="warning" round size="large">
                        Explorer Course
                    </el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>