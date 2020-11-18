<template>
  <div id="video-wall">

    <h1>Video Wall</h1>
    <div v-for="oneVideo in getAllVideo" :key="`v${oneVideo.id}`" class="video-box">
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

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { videoSetup } from './composition/videoSetup'

export default defineComponent({
    name: 'VideoWall',
    setup: videoSetup
})
</script>
