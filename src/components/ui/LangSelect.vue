<template>
  <div
    ref="buttonRef"
    v-click-outside="onClickOutside"
    class="w-5 h-3 cursor-pointer overflow-hidden rounded-xs active:opacity-75 hover:opacity-80 transition-opacity duration-150"
  >
    <img
      :src="currentLang.flag"
      class="h-full object-cover"
      :alt="currentLang.value"
    />
  </div>

  <el-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    virtual-triggering
    popper-class="p-0!"
    popper-style="max-width: 125px;"
    :show-arrow="false"
    placement="bottom-end"
  >
    <div class="flex flex-col gap-1 p-1">
      <div
        v-for="item in lang"
        :key="item.value"
        @click="currentLang = item; popoverRef.hide();"
        class="flex items-center gap-2 cursor-pointer rounded-xs px-2 py-1 hover:bg-gray-100 active:opacity-75"
      >
        <img
          :src="item.flag"
          class="w-5 h-3 object-cover"
          :alt="item.value"
        />
        <span class="text-sm text-gray-700 capitalize">{{ item.title }}</span>
      </div>
    </div>
  </el-popover>
</template>

<script setup>
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

const lang = [
  {
    value: 'uz',
    flag: '/uz-flag.svg',
    title: 'O\'zbekcha'
  },
  {
    value: 'en',
    flag: '/uk-flag.svg',
    title: 'English'
  },
  {
    value: 'ru',
    flag: '/ru-flag.svg',
    title: 'Русский'
  },
  {
    value: 'ja',
    flag: '/ja-flag.svg',
    title: '日本語'
  }
]
const currentLang = ref(lang[0])

const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  popoverRef.value?.hide()
}

</script>