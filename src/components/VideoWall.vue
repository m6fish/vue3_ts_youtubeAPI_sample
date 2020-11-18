<template>
  <div id="video-wall">

    <h1>Video Wall</h1>
    <div class="row">
        <div v-for="oneVideo in getAllVideo" :key="`v${oneVideo.id}`" class="col-3 gy-5 video-box">
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

  </div>
</template>

<style lang="scss" scoped>
$hoverColor: red;

#video-wall{
    .v_pic, .v_detail {
        width: 320px;
        margin: 0 auto;
    }

    .v_pic {
        height: 180px;
        position: relative;
        cursor: pointer;
        .pic_duration {
            background: rgba(0,0,0,0.8);
            color: #FFF;
            border-radius: 2px;
            padding: 2px 4px;
            letter-spacing: 0.5px;
            position: absolute;
            bottom: 4px;
            right: 0;
            margin:4px;
            font-size: 1rem;
            line-height: 1rem;
        }

        &:hover{
            .pic_duration {
                color: $hoverColor;
            }
        }
    }

    .v_detail {
        margin-top: 5px;

        .detail_des {
            width: 95%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: 0;
            display: inline-block;
            font-size: 1rem;
            font-weight: 500;
            color: #030303;
        }
        .detail_favo {
            float: right;
            color:#CCC;
        }

        &:hover, &.active {
            .detail_des, .detail_favo {
                color: $hoverColor;
                cursor: pointer;
                transition: 0.2s;
            }
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { videoSetup } from './composition/videoSetup'

export default defineComponent({
    name: 'VideoWall',
    setup: videoSetup
})
</script>
