<template>
  <div class="class-list-content">
    <!-- class-item -->
    <div class="class-item">
      <the-title :title="item.campus"></the-title>
       <div class="m-content">
        <div class="m-content-l">
          <div style="display: flex;flex-direction: column;align-items: center;">
            <p class="class-title">{{item.className}}</p>
            <div class="class-no-fee">
              <p class="class-no">{{item.classTime}}</p>
            </div>
          </div>
        </div>

        <div class="m-content-r">
          <p class="r-oPrice">
            原价 ￥
            <span>{{item.fee}}</span>
          </p>
          <p class="r-nPrice">
            ￥
            <span>{{item.nowFee || 80}}</span>
          </p>
          <p class="btn-sign">
            <span @click="goSignPage(item)">立即报名</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uuidv1 from 'uuid/v1'
import moment from 'moment'
import TheTitle from '@/components/Title'
import plusImg from '@/assets/images/plus.png'
import arrowDownImg from '@/assets/images/arrow_down.png'

export default {
  name: 'ClassDetail',

  components: {
    TheTitle
  },

  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  computed: {
    eleId () {
      return `${uuidv1()}`.replace(/-/g, '')
    }
  },

  data () {
    return {
      PNGs: {
        plusImg,
        arrowDownImg
      },
      isShowClassDetail: false
    }
  },

  methods: {
    goSignPage (item) {
      let classCodes = ''
      if (item) {
        classCodes = `${item.classCode}`
      }

      if (classCodes) {
        window.location.href = `http://wxpay.xdf.cn/silenceauthorize/view.do?schoolid=23&callid=2&classcodes=${classCodes}&qrcode_id=C8644979-BD8A-478E-9B1D-6DA3820E9151&marketingSources=wechat_tjbj&marketingSourcesExt=test`
      }
    },

    formateDate (date) {
      return moment(date).format('M/DD')
    }
  }
}
</script>

<style scope>
.class-list-content {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px
}

.m-content {
  display: flex;
  /* padding: .875rem 0 0; */
  justify-content: space-around;
}

/* left */
.m-content-l {
  padding-right: 0px;
  display: flex;
  align-items: center
}

.class-title {
  color: #666;
  font-size: 16px;
  line-height: 32px
}

.class-no-fee {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.class-no {
  font-size: 14px;
  color: #999;
  line-height: 28px
}

.class-fee {
  font-size: 8px;
  /* font-size: 1vw;
  -webkit-transform-origin-x: 0;
  transform: scale(.95); */
  color: #fff;
}

.class-fee>span {
  padding: .125rem .125rem 0 .125rem;
  background-color: #f6ab00;
  border-radius: .5rem;
}

.add-icon {
  text-align: center
}

.add-icon>img {
  width: 12px;
}

/* center */
.m-content-c {
  padding: 1rem 14px
}

.m-content-c, .m-content-r {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.m-content-c {
  border-width: 0 1px;
  border-style: solid;
  border-color: #ccc
}

.c-title {
  color: #333;
  font-weight: bold;
  width: 110%;
  text-align: center;
}

.c-date {
  color: #999;
  font-size: 12px;
  line-height: 20px
}

.btn-detail {
  color: #666;
  margin-top: 2rem;
  font-size: 10px;
  position: relative;
}

.btn-detail>span {
  padding: .25rem .5rem;
  background-color: #dcdcdc
}

/* right */
.m-content-r {
  padding: 1rem 0;

}

.r-oPrice {
  font-size: 10px;
  font-weight: bold
}

.r-nPrice {
  font-size: 12px;
  font-weight: bold;
  color: #f6ab00;
  border-bottom: 1px solid #dcdcdc
}

.r-oPrice>span {
  font-size: 16px;
  text-decoration: line-through
}

.r-nPrice>span {
  font-size: 28px;
}

.r-activity {
  text-align: center;
  /* font-size: 1vw;
  transform: scale(.); */
  font-size: 8px;
  color: #999;
  width: 110%;
}

.btn-sign {
  font-size: 10px;
  color: #fff;
  margin-top: .875rem
}

.btn-sign>span {
  padding: .25rem .5rem;
  background-color: #f6ab00
}

.img_arrowdown {
  width: 2rem;
  height: 1rem;
  transform: rotateX(180deg)
}

/* slot */
.slot-content {
  padding-bottom: .375rem
}

.content-p1, .content-p2 {
  display: flex;
  align-items: flex-start;
  line-height: 18px;
  font-size: 10px
}

.content-p1 {
  color: #666;
}

.content-p2 {
  color: #999
}

.content-p-pre {
  /* margin-right: .875rem; */
  width: 25%;
}

.content-p-end {
  width: 70%
}
</style>
