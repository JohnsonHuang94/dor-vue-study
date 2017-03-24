<template>
	<div class="infoChoose">
		<div class="input_con" :class="{'input_con_nb':noBorder}">
			<ul>
				<li class="input_icon input_icon_1">
					<i :class="iconClass"></i>
				</li>
				<li class="desc" v-text="desc"></li>
				<li class="arrow" v-if="!noChoose"></li>
				<li class="val"  v-if="!noChoose">
					<input :type="type" readOnly :value="value">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
  export default{
    name: 'InfoChoose',
    props: {
      noBorder: {
        type: Boolean,
        default: false
      },
      chooseEvent: {
      },
      iconClass: {
        type: String
      },
      desc: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String
      },
      noChoose: {
        type: Boolean
      }
    }
  }
</script>
<style lang="scss">
.input_con{
	cursor: pointer;
	height: 1.333333rem;
	border-bottom: 0.013333rem solid #c7d4d0;
	padding: 0.066667rem 0.133333rem;
	cursor: pointer;
	ul{
		height: 100%;
		li{
			list-style: none;
			height: 100%;
			line-height: 1.2rem;
		}
		li.val input{
			display: inline-block;
			width: 3.933333rem;
			height: 100%;
			color: #49d0a0;
			outline: none;
			border: none;
			text-align: right;
			font-size: 0.426667rem;
		}
	}
	ul:after{
		display: block;
		content: '';
		width: 0;
		height: 0;
		clear: both;
	}
}
.input_con.input_con_nb{
	border-bottom: none;
}
li.input_icon{
	width: 0.773333rem;
	float: left;
	margin-left: 0.266667rem;
	i{
		display: block;
		width: 100%;
		height: 100%;
	    background-image: url(../../assets/sprite_icon.png);
		background-size: auto 0.773333rem;
		background-repeat: no-repeat;
	}
	i.temp-icon{
		background-position: left center
	}
	i.sleep-icon{
		background-position: -0.773333rem center;
	}
	i.smile-icon{
		background-position: -1.546667rem center;
	}
	i.heart-icon{
		background-position: -2.32rem center;
	}
	i.mark-icon{
		background-position: -3.093333rem center;
	}
}
li.desc{
	font-size: 0.426667rem;
	float: left;
	margin-left: 0.133333rem;
	text-align: left;
	width: 3.0rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
li.arrow{
	width: 0.773333rem;
	background-image: url(../../assets/sprite_icon.png);
	background-repeat: no-repeat;
	background-size: auto 0.773333rem;
	background-position: right center;
	float: right;
	margin-left: 0.133333rem;
}
li.val{
	float: right;
}
</style>
