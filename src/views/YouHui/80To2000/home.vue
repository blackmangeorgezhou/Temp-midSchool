<template>
  <div class="youhui1000_home">
    <div id="youhui1000Top" class="youhui1000_home_img">
      <img :src="PNGs.img80To2000" alt="图2" srcset="" style="margin-top: -6px; height: 100%">
    </div>

    <div id="youhui1000Bottom" class="g_bottom_tab">
      <div @click="goNextPage('/you-hui_80To2000/to_select')" class="g_bottom_tabitem g_bottom_tabitem1">
        <p class="g_ac_title">80抵1500</p>
        <p class="g_ac_name">直接购券</p>
      </div>

      <div @click="goNextPage('http://weike.xdf.cn/pintuan/index?id=91')" class="g_bottom_tabitem g_bottom_tabitem2">
        <p class="g_ac_title animated pulse infinite" style="font-size: 20px">80抵2000</p>
        <p class="g_ac_name animated pulse infinite" style="font-size: 14px">限时拼团</p>
      </div>

      <div class="g_bottom_tabitem g_bottom_tabitem3">
        <p @click="showHelpList = !showHelpList" v-on-click-outside="helpClickOutSide">问题咨询</p>
      </div>
    </div>

    <div v-show="showHelpList" class="g_bottom_tabitem3_expand">
      <p @click="goHelpNextPage(item.value)" v-for="item in helpMenuList" :key="item.name">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { mixin as onClickOutside } from 'vue-on-click-outside'
import img80To2000 from '@/assets/images/80To2000.jpg'
import moment from 'moment'

export default {
  name: 'YH80To1000Index',
  mixins: [onClickOutside],

  computed: {
    currentDate () {
      return moment().format('YYYY-MM-DD HH:mm:ss')
    }
  },

  mounted () {
    let wH = window.innerHeight
    let topImg = document.getElementById('youhui1000Top')
    if (topImg) {
      topImg.style.height = `${wH - 40}px`
    }
  },

  data () {
    return {
      PNGs: {
        img80To2000
      },

      activeTab: '',
      tabList: [
        {
          name: '我要抢课',
          icon: 'vip-card-o',
          clickIcon: 'vip-card',
          url: '/you-hui_80To1000/to_select'
        },
        {
          name: '拼团攻略',
          icon: 'comment-circle-o',
          clickIcon: 'comment-circle',
          url: ''
        },
        {
          name: '直购攻略',
          icon: 'comment-circle-o',
          clickIcon: 'comment-circle',
          url: ''
        },
        {
          name: '咨询',
          icon: 'phone-o',
          clickIcon: 'phone',
          url: ''
        }
      ],

      helpItem: 0,
      showHelpList: false,
      helpMenuList: [
        {
          text: '人工咨询',
          value: 'http://qr06.cn/DWB7s4'
        },
        {
          text: '初高差异',
          value: 'http://mp.weixin.qq.com/s?__biz=MzUzMDM3Mzg2NQ==&mid=100001152&idx=1&sn=82789cf1bbe7ed76a79c440c55ba9f95&chksm=7a5388064d240110e2dcd097c42a2385880a5696039c1cb053878456557cb49f364cf3479627#rd'
        },
        {
          text: '课程大纲',
          value: 'http://mp.weixin.qq.com/s?__biz=MzUzMDM3Mzg2NQ==&mid=100001149&idx=1&sn=548456a85bbd795f26f74e35101aac23&chksm=7a5388fb4d2401ed561453b5d774efa270d63f40824cfdf8ab42dc67e28cb01b4cf2a3038ba4#rd'
        },
        {
          text: '暑假课表',
          value: 'http://mp.weixin.qq.com/s?__biz=MzUzMDM3Mzg2NQ==&mid=100001142&idx=1&sn=43c0eabedcf27335567f1ba14034b8e6&chksm=7a5388f04d2401e672c18c31449f3cd1d769543adfec58e45d3b39054920d10ebf69b65c758d#rd'
        },
        {
          text: '拼团流程',
          value: 'https://w.url.cn/s/AdUOC1Y'
        },
        {
          text: '直购流程',
          value: 'https://w.url.cn/s/ANSrdcX'
        },
        {
          text: '抢券福利',
          value: 'https://w.url.cn/s/AuvuXhu'
        }
      ]
    }
  },

  methods: {
    goNextPage (url) {
      // 12-26
      if (moment('2019-12-26 18:00:00') > moment(this.currentDate)) {
        Toast({
          type: 'html',
          message: `<p>活动暂未开始，敬请期待！</p><p>开始时间：12-26 18:00</p>`
        })
        return
      }

      this.showHelpList = false
      if (url) {
        if (url.indexOf('http') >= 0) window.location.href = url
        else this.$router.push(url)
      } else {
        Toast('暂无跳转链接！')
      }
    },

    goHelpNextPage (url) {
      window.location.href = url
    },

    helpClickOutSide () {
      this.showHelpList = false
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  max-width: 500px;
}

.youhui1000_home {
  color: #fff;
  height: 100%;
}
.youhui1000_home_img {
  position: fixed;
  bottom: 40px
}

.g_ac_title {
  text-align: center;
  font-weight: bold;
  font-size: 16px
}

.g_ac_name {
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  margin-top: .125rem
}

.g_bottom_tabitem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.g_bottom_tabitem1 {
  width: 25%;
  background-color: #F0CF14;
}

.g_bottom_tabitem2 {
  width: 50%;
  background-color: #FB0917;
}

.g_bottom_tabitem3 {
  width: 25%;
  background-color: #A7A7A7;
}
</style>
