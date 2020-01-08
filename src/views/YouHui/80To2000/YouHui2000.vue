<!-- 80 抵 1500 -->
<template>
  <div id="YH80To1000_class" class="select-class">
    <div class="select-title">
      <p @click="showRegionCampus" class="boright" style="width: 85% !important">
        <span class="level">{{selectedCampus || '校区'}}</span>
        <img v-if="selection.key === 'campus'" :src="PNGs.arrowDown" alt="">
        <img v-else :src="PNGs.arrowUp" alt="">
      </p>
    </div>

    <div v-if="selection.key"  class="select-item">
      <ul style="display: block">
        <li @click="selectItem(item)" v-for="item in selection.value" :key="item">{{item}}</li>
      </ul>
    </div>

    <div id="g_classlist" v-else class="goerge_class_view">
      <div v-for="item in filterClasses" :key="item.group">
        <class-detail :item="item"></class-detail>
      </div>
      <div class="class-empty" v-if="!filterClasses || !filterClasses.length">
        <img :src="PNGs.noClassImg" alt="没有相关课程" srcset="">
        <p>暂无相关课程</p>
      </div>
    </div>
  </div>
</template>

<script>
import arrowUp from '@/assets/images/open.png'
import arrowDown from '@/assets/images/close.png'
import noClassImg from '@/assets/images/empty.png'
import ClassDetail from '../ClassDetail'
import { zhCompare } from '@/utils'
import mockData from '@/data'

export default {
  name: 'SelectClassPage',

  components: {
    ClassDetail
  },

  computed: {
    regionList () {
      let list = []

      this.classData.map(x => {
        if (list.indexOf(x.region) < 0) list.push(x.region)
      })

      return list
    },

    campusList () {
      let list = []

      this.classData.map(x => {
        if (list.indexOf(x.campus) < 0) list.push(x.campus)
      })

      return list.sort((a, b) => {
        return zhCompare(a, b)
      })
    },

    filterClasses () {
      let list = [...this.classData]
      if (this.selectedRegion) {
        list = this.classData.filter(x => x.region === this.selectedRegion)
      }

      if (this.selectedCampus) {
        list = this.classData.filter(x => x.campus === this.selectedCampus)
      }

      return list
    }
  },

  data () {
    return {
      PNGs: {
        arrowUp,
        arrowDown,
        noClassImg
      },

      selection: {
        key: '',
        value: ''
      },

      selectedRegion: '', // 大区
      selectedCampus: '', // 校区

      classData: mockData.youHui1500
    }
  },

  methods: {
    showRegionSelection () {
      if (this.selection.key === 'region') {
        this.selection.key = ''
        this.selection.value = []
        return
      }

      this.selection = {
        key: 'region',
        value: this.regionList
      }
    },

    showRegionCampus () {
      // if (!this.selectedRegion) {
      //   Toast.fail('请选择大区')
      //   return
      // }
      if (this.selection.key === 'campus') {
        this.selection.key = ''
        this.selection.value = []
        return
      }

      this.selection = {
        key: 'campus',
        value: this.campusList
      }
    },

    selectItem (item) {
      if (this.selection.key === 'region') {
        this.selectedRegion = item
        this.selectedCampus = ''
      } else {
        this.selectedCampus = item
      }

      this.selection = {
        key: '',
        value: []
      }
    }
  },

  mounted () {
    let wH = window.innerHeight
    let gClassListEle = document.getElementById('g_classlist')
    if (gClassListEle) {
      gClassListEle.style.height = `${wH - 52}px`
      gClassListEle.style.overflowY = 'auto'
    }
  }
}
</script>

<style scope>
.select-class {
  color: #333333;
  background-color: #ededed;
  height: 100%;
}

#YH80To1000_class .select-title {
  display: flex;
  justify-content: center;
  position: relative;
  /* height: 50px; */
  background: #fff;
  padding: 1rem 0;
  background-color: #009380;
}

.select-title>p{
  display: inline-block;
  width: 45%;
  height: 20px;
  text-align: center;
}

.select-title>p>img {
  width: 10px;
  height: 6px;
  margin-left: 5.5px;
  vertical-align: middle
}

.select-item {
  text-align: center
}

#YH80To1000_class .select-item, .goerge_class_view {
  background: #ededed;
}

.select-item>ul>li {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  color: #191919;
  border-bottom: 1px solid #fff
}

.class-list {
  background-color: #ededed;
  padding: 10px;
}

.class-empty {
  margin-top: 6rem;
  text-align: center;
  color: #999999;
  font-size: 12px
}
</style>
