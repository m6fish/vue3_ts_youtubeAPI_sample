<template>
  <section data-name="A01Reactive">
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>

    <button @click="add">
      MyCount is: {{ myCount }}
    </button>

    <button @click="add">
      MyCount is: {{ myCount }}
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { videoSetup } from './composition/videoSetup'

interface MyNum {
  count: number,
  double: any
}

export default defineComponent({
  name: 'VideoWall',
  setup () {
    const state: any = reactive<MyNum>({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment () {
      state.count += 1
    }

    return {
      state,
      increment,
      ...videoSetup()
    }
  }
})
</script>
