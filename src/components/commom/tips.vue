<template>
    <transition name="slide-down">
	      <div class="mask" v-if="maskStatu">
        <div class="mask-tip" v-text="tipMsg"></div>
      </div>
    </transition>
</template>

<script>
export default {
  props: {
    maskStatu: {
      type: Boolean,
      default: false
    },
    tipMsg: {
      type: String,
      default: ''
    }
  },
  name: 'mask',
  methods: {
    reSetMaskStatu () { this.$emit('reSetMaskStatu') }
  },
  computed: {
    maskStatu () {
      return !!this.tipMsg
    }
  },
  watch: {
    tipMsg (val, oldVal) {
      let that = this
      if (oldVal === '') {
        setTimeout(function () {
          that.reSetMaskStatu()
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss">
.mask{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: transparent;
	display: flex;
	justify-content: space-around;
	align-items: center;
	.mask-tip{
		font-size: 32px;
		padding: 12px 20px;
		border-radius: 10px;
		background-color: #333;
		color: #fff;
	}
}
</style>
