<template>
 <div class="select-class">
    <div class="select-title">
      <p @click="showRegionSelection" class="boright">
        <span class="level">{{selectedRegion || '大区'}}</span>
        <img v-if="selection.key === 'region'" :src="PNGs.arrowDown" alt="">
        <img v-else :src="PNGs.arrowUp" alt="">
      </p>
      <p @click="showRegionCampus" class="boright">
        <span class="level">{{selectedCampus || '校区'}}</span>
        <img v-if="selection.key === 'campus'" :src="PNGs.arrowDown" alt="">
        <img v-else :src="PNGs.arrowUp" alt="">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegionCampusComponent',

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.select-class {
  color: #333333;
  background-color: #ededed;
  height: 100%;
}

.select-title {
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

.select-item, .goerge_class_view {
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  text-align: center;
  background: #ededed;
  height: 90%;
  overflow: auto;
  z-index: 100
}

.select-item>ul>li {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  color: #191919;
  border-bottom: 1px solid #fff
}
</style>
