<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/shared'
import { useDark } from "@vueuse/core";

defineProps<{ msg: string }>()

const count = ref(0)
import variables from "@/styles/variables.module.scss";
  console.log(variables.bgColor) 
  function aa() {
    ElMessage.error( "系统出错");
  }
  /**
 * 切换主题
 */
// const isDark = ref<boolean>('dark' === 'dark');
// const changeTheme = (val: any) => {
  
// };
const theme = ref<boolean>(false)
 
    const isDark = useDark({
      // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
      storageKey: 'useDarkKEY',
      // 暗黑class名字
      valueDark: 'dark',
      // 高亮class名字
      valueLight: 'light',
    })
 
    const toggle = useToggle(isDark);
</script>

<template>
   <el-switch
        inline-prompt
        v-model="theme"
        @click="toggle()"
    >
    </el-switch>

  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="aa">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div>
  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
  <el-button type="info"><i-ep-InfoFilled />Info</el-button>
  <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
  <el-button type="danger"><i-ep-WarnTriangleFilled /><svg-icon icon-class="close"/>Danger</el-button>
  <div class="box" />
  <div style="width:100px;height:100px" :style="{ 'background-color': variables.bgColor }" />
  <h1 class="text-red"></h1>
</div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
.box {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
.text-red {
  color: red;
}
</style>
