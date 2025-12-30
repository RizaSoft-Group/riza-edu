<template>
    <router-link to="/" class="block max-w-sm mx-auto">
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <!-- Rasm -->
            <div class="relative">
                <el-tag class="!absolute top-4 left-4 z-10" type="info" size="large" effect="dark">
                    Photography
                </el-tag>
                <el-image src="/featurecatigories/learnpress.jpg" fit="cover"
                    class="w- h-56 hover:scale-105 transition-transform duration-300" />
            </div>

            <!-- Content -->
            <div class="p-6">
                <p class="text-sm text-gray-600 mb-2">
                    by <span class="font-medium text-gray-900">Determined-Poitras</span>
                </p>

                <h3 class="text-xl font-bold mb-4 hover:text-blue-600 transition-colors">
                    Create An LMS Website With LearnPress
                </h3>

                <div class="flex gap-4 mb-4 text-sm text-gray-600">
                    <div class="flex items-center gap-1">
                        <el-icon color="#f97316">
                            <Clock />
                        </el-icon>
                        2Weeks
                    </div>
                    <div class="flex items-center gap-1">
                        <el-icon color="#f97316">
                            <User />
                        </el-icon>
                        156 Students
                    </div>
                </div>

                <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-2">
                        <span class="text-gray-400 line-through">$29.0</span>
                        <span class="text-green-600 font-bold text-lg">Free</span>
                    </div>
                    <el-button link type="primary">
                        View More <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </el-button>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { Clock, User, ArrowRight } from '@element-plus/icons-vue'
</script>