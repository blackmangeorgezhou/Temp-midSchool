<template>
  <div id="the-loading">
    <div v-if="type === 'spinner'">
      <mt-spinner type="fading-circle" :color="spinnerColor" :size="55"></mt-spinner>
    </div>
    <div v-else>加载中...</div>
  </div>
</template>

<script>
export default {
  name: 'TheLoading',
  props: {
    type: {
      type: [String],
      default: 'spinner'
    },

    imgSrc: {
      type: [String],
      default: ''
    },

    spinnerColor: {
      type: [String],
      default: '#F6AB00'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#the-loading {
  height: 100%;
  width: 100%;
  max-width: 500px;
  overflow: auto;

  position: absolute;
  top: 0;
  background-color: rgba(230, 230, 230, .3);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000
}
.img-w-h-160 {
  height: 5rem;
  width: 5rem
}

.loading_text {
  font-size: 0625rem
}
</style>
