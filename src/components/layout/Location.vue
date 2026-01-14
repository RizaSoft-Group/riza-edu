<template>
    <div v-if="name !== 'Home'" class="location w-full h-15 bg-gray-100">
        <div class="container h-full px-5 mx-auto flex items-center">
            <nav class="flex items-center gap-2 text-sm text-gray-600">
                <router-link to="/" class="hover:text-orange-500 font-medium">
                    Home
                </router-link>
                <span>></span>
                <span @click="$route.push('/ {{ name }}')" class="text-gray-00 font-medium">
                    {{ name }}
                </span>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        name() {
            return this.$route.name || 'Page'
        }
    }
}
</script>