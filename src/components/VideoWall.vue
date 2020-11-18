<template>
  <section data-name="A01Reactive">
    <!-- <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button> -->

    <button @click="fetchVideoList" class="btn btn-primary">Fetch</button>

    <div v-for="(oneVideo, vidx) in getAllVideo" :key="`v${oneVideo.id}`" class="video-box">
        <div class="v_pic" :style="{background: `url(${oneVideo.pic})`}">
            <span class="pic_duration">{{oneVideo.duration}}</span>
        </div>
        <div class="v_detail">
            <div class="detail_des">{{oneVideo.title}}</div>
            <div class="detail_des">{{oneVideo.description}}</div>
            <div class="detail_favo">
                <i class="far fa-heart"/>
            </div>
        </div>
    </div>

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
