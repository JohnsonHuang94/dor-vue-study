<template>
	<transition name="slide-up">
		<div class="infoSelection" v-if="selectionStatu">
			<div class="selection-con">
				<ul>
					<li v-for="(item, index) in selection" @click.stop="select(index)" :class="{'active':index===selectionIndex}">
						<div>{{ item }}</div>
						<i></i>
					</li>
					<li class="cancle" @click.stop="cancle"><div>取消</div></li>
				</ul>
			</div>
			<div class="mask"></div>
		</div>
    </transition>
</template>
<script>
  export default{
    name: 'infoSelection',
    props: {
      selection: {
        type: Array
      },
      selectionIndex: {
        type: Number
      },
      selectionStatu: {
        type: Boolean
      }
    },
    methods: {
      cancle () {
        this.$emit('cancle')
      },
      select (index) {
        this.$emit('select', index)
      }
    }
  }
</script>
<style lang="scss">
$green: #49d0a0;
.infoSelection{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	.selection-con{
		width: 100%;
		z-index: 24;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #fff;
		ul{
			li{
				list-style: none;
				padding-right: 78px;
				border-bottom: 1px solid #edf0f2;
				position: relative;
				div{
					height: 100px;
					line-height: 100px;
					text-indent: 54px;
					font-size: 32px;
					text-align: left;
				}
			}
			li.active{
				background-color: #fafdfd;
				div{color: $green;}
				i{
					display: block;
					width: 78px;
					height: 100%;
					background-image: url(../../assets/hook.png);
					background-position: left center;
					background-repeat: no-repeat;
					background-size: 29px 22px;
					position: absolute;
					right: 0;
					top: 0;
				}
			}
			li.cancle{
				div{
					color: #b1b1b1;
				}
			}
		}
	}
	.mask{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.4);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 23;
	}
}
</style>
