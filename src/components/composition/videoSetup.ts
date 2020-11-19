import { ref, computed, onBeforeMount } from 'vue'
import Axios from 'axios'

/**
 * --------------------------------------
 * Reactive data
 * --------------------------------------
 */

// 影片原始資料
const videoList = ref<Array<{}>>([])

// 影片nextToken
const nextToken = ref('')

export const videoSetup = () => {
    /**
     * --------------------------------------
     * Computed
     * --------------------------------------
     */

    // 原始影片列表
    const getAllVideo = computed(() => {
        return videoList.value
    })

    /**
     * --------------------------------------
     * Methods
     * --------------------------------------
     */

    /**
     * 打影片API取得結果
     */
    async function fetchVideo (mode: number) {
        const VIDEO_KEY: string = process.env.VUE_APP_VIDEO_KEY
        const url: string = 'https://www.googleapis.com/youtube/v3/videos'
        const params = {
            part: 'snippet,contentDetails',
            key: VIDEO_KEY,
            chart: 'mostPopular',
            hl: 'zh-TW',
            regionCode: 'TW',
            maxResults: 20,
            pageToken: mode === 2 ? nextToken.value : undefined
        }

        const res: any = await Axios.get(url, { params }).catch(err => {
            console.warn('ERR!', err)
            return false
        })

        const { status: returnState } = res
        if (+returnState !== 200) {
            return false
        }

        return res
    }

    // 把影片資料格式化成顯示用資料
    function formatData (items: Array<{id: string, contentDetails: any, snippet: any}>) {
        const STR_LESS = 100

        return items.map(({ id = '', contentDetails, snippet }) => {
            // 取得本地語言標題
            const { description = '', title = '' } = snippet.localized
            // 取得圖片
            const { medium } = snippet.thumbnails
            // 取得影片時間
            const { duration: durationOri } = contentDetails
            return {
                id,
                title,
                description: description.length > STR_LESS ? description.substr(0, STR_LESS) : description,
                pic: medium.url || '',
                duration: (durationOri.match(/\d+/g) || []).join(':')
            }
        })
    }

    // 取得youtube影片清單
    async function fetchVideoList () {
        const res: any = await fetchVideo(1)
        if (!res) {
            return false
        }

        const { nextPageToken, items } = res.data

        // 紀錄token
        nextToken.value = nextPageToken
        // 設定allVideo
        videoList.value = formatData(JSON.parse(JSON.stringify(items)))
    }

    // 取得下一批資料
    async function fetchNextVideo () {
        // already no next page!
        if (!nextToken.value) {
            console.warn('Already no next page!')
            return false
        }

        const res: any = await fetchVideo(2)
        if (!res) {
            return false
        }
        const { nextPageToken, items } = res.data

        // 紀錄token
        nextToken.value = nextPageToken
        // 設定allVideo
        const theFormatData = formatData(JSON.parse(JSON.stringify(items)))
        videoList.value = [...videoList.value, ...theFormatData]
    }

    /**
    * before mount
    */
    onBeforeMount(() => {
        fetchVideoList()
    })

    return {
        getAllVideo,
        fetchVideoList,
        fetchNextVideo
    }
}
