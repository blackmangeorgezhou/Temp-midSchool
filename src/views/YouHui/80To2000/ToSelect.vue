<template>
  <div class="g_select">
    <img class="g_select_img" :src="PNGs.img80To1500" alt="" srcset="">
    <div class="g_select_btn" @click="goSelect">
      <p class="animated tada infinite">我要抢券</p>
    </div>
  </div>
</template>

<script>
import img80To1500 from '@/assets/images/80To1500_2.jpg'

export default {
  name: 'ToSelectPage',

  data () {
    return {
      PNGs: {
        img80To1500
      }
    }
  },

  methods: {
    goSelect () {
      this.$router.push('/you-hui_80To2000/bao_ming')
    }
  }
}
</script>
