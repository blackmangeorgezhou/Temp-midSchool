<template>
  <div :class="['header', tClass]" :id="'header-' + eleId">
    <span :id="'span1-' + eleId">{{title}}</span>
    <span :id="'span2-' + eleId">&nbsp;</span>
    <span :id="'span3-' + eleId">&nbsp;</span>
  </div>
</template>

<script>
import uuidv1 from 'uuid/v1'

export default {
  name: 'TheTitle',

  props: {
    title: {
      type: String,
      default: '这是一个标题'
    },
    tClass: {
      type: String,
      default: ''
    }
  },

  computed: {
    eleId () {
      return `${uuidv1()}`.replace(/-/g, '')
    },

    headerW () {
      let eleHeader = document.getElementById(`header-${this.eleId}`)
      return eleHeader ? eleHeader.clientWidth : 0
    }
  },

  mounted () {
    this.calculateSpanW()
  },

  methods: {
    calculateSpanW () {
      let eleHeader = document.getElementById(`header-${this.eleId}`)
      let eleSpan1 = document.getElementById(`span1-${this.eleId}`)
      let eleSpan2 = document.getElementById(`span2-${this.eleId}`)
      let eleSpan3 = document.getElementById(`span3-${this.eleId}`)

      const headerW = eleHeader ? (eleHeader.clientWidth - 1) : 0
      const span1W = eleSpan1 ? eleSpan1.clientWidth : 0
      const span2W = eleSpan2 ? eleSpan2.clientWidth : 0

      eleSpan3.style.width = `${headerW - span1W - span2W}px`
    }
  },

  watch: {
    headerW () {
      this.calculateSpanW()
    }
  }
}
</script>

<style scoped>
.header {
  color: #333;
  line-height: 2.25rem;
  display: flex;
}

.header>span {
  display: inline-table;
  white-space: nowrap/* 不换行 */
}

.header>span:nth-child(1) {
  border-bottom: 2px solid #009380;
}

.header>span:nth-child(2) {
  width: 10px;
  border-bottom: 2px solid #f6ab00;
}

.header>span:nth-child(3) {
  width: 49%;
  border-bottom: 2px solid #dcdcdc;
}
</style>
