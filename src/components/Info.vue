<template>
	<div class="Info">
		<div class="header">
			<div class="header_l">
				<h3>某某中学欢迎您</h3>
				<div class="student_info">
					<span class="name">陈一发</span><span class="class">10级24班</span>
				</div>	
			</div>
			<div class="header_r">		
			</div>
		</div>
		<div class="wrap">
			<infoChoose iconClass="temp-icon" desc="喜欢的空调温度" type="text" :value='temp' @click.native="choose('temp')"></infoChoose>
			<infoChoose iconClass="sleep-icon" desc="晚上睡觉时间" type="text" :value='sleepTime' @click.native="choose('sleepTime')"></infoChoose>
			<infoChoose iconClass="smile-icon" desc="性格特点" type="text" :value='character' @click.native="choose('character')"></infoChoose>
			<infoChoose iconClass="heart-icon" desc="兴趣爱好" type="text" :value='hobby' @click.native="choose('hobby')"></infoChoose>
			<infoChoose iconClass="mark-icon" desc="备注" :noChoose="true" :noBorder="true"></infoChoose>
			<div class="textarea">
				<textarea name="remarks" id="remarks" placeholder="希望能有窗户的房间，舍友能有共同喜好就更好了,期待有棒棒哒舍友" v-model="remarksText"></textarea>
			</div>
			<div class="btn-con">
				<button id="submit" @click="submit" :disabled="banSubmit">提交</button>
			</div>
		</div>
		<tips :tipMsg="tipMsg" :maskStatu="maskStatu" @reSetMaskStatu="reSetMaskStatu"></tips>
		<infoSelection :selection="selection" :selectionIndex="selectionIndex" :selectionStatu="selectionStatu" @cancle="cancle" @select="select"></infoSelection>
	</div>
</template>
<script>
  import infoChoose from './commom/infoChoose'
  import infoSelection from './commom/infoSelection'
  import tips from './commom/tips'
  import { TEMPERATRUE_ARR, SLEEP_TIME_ARR, CHARACTER_ARR, HOBBY_ARR, SELECTION } from '../commom/js/util'
  export default{
    name: 'Info',
    components: { infoChoose, infoSelection, tips },
    data () {
      return {
        tempIndex: 0,
        sleepTimeIndex: 0,
        characterIndex: 0,
        hobbyIndex: 0,
        remarksText: '',
        tipMsg: '',
        banSubmit: false,
        maskStatu: false,
        selectionStatu: false,
        selectionName: 'temp'
      }
    },
    computed: {
      temp () {
        return TEMPERATRUE_ARR[this.tempIndex]
      },
      sleepTime () {
        return SLEEP_TIME_ARR[this.sleepTimeIndex]
      },
      character () {
        return CHARACTER_ARR[this.characterIndex]
      },
      hobby () {
        return HOBBY_ARR[this.hobbyIndex]
      },
      selection () {
        return SELECTION[this.selectionName]
      },
      selectionIndex () {
        return this[this.selectionName + 'Index']
      }
    },
    methods: {
      choose (str) {
        this.selectionStatu = true
        if (this.selectionName !== str) {
          this.selectionName = str
        };
      },
      submit () {
        // console.log(TEMPERATRUE_ARR, SLEEP_TIME_ARR, CHARACTER_ARR, HOBBY_ARR)
        this.banSubmit = true
        if (!this.remarksText) {
          this.tipMsg = '请先填写备注'
          this.banSubmit = false
        } else {
          this.$http.post('/api/sendInfo', {
            temp: this.temp,
            sleepTime: this.sleepTime,
            character: this.character,
            hobby: this.hobby,
            tempIndex: this.tempIndex,
            sleepTimeIndex: this.sleepTimeIndex,
            characterIndex: this.characterIndex,
            hobbyIndex: this.hobbyIndex
          }).then(response => {
            console.log(response)
            var data = response.data
            if (data.code === 0) {
              this.tipMsg = '提交成功'
            };
            this.banSubmit = false
          }, response => {
            console.log(response)
            this.banSubmit = false
          })
        };
      },
      reSetMaskStatu () {
        this.tipMsg = ''
        this.banSubmit = false
      },
      cancle () {
        this.selectionStatu = false
      },
      select (index) {
        var i = this.selectionName + 'Index'
        this[i] = index
        this.selectionStatu = false
      }
    }
  }
</script>
<style lang="scss">
$green: #49d0a0;
.Info{
	background-color: $green;
	padding: 20px 20px 40px;
	.header{
		position: relative;
		height: 216px;
		width: 100%;
		.header_l{
			color: #fff;
			width: 380px;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			padding: 40px 0;
			h3{
				font-size: 48px;
				line-height: 60px;
			}
			.student_info{
				font-size: 28px;
				line-height: 0.34px;
				padding-top: 20px;
				.class{
					margin-left: 40px;
				}
			}
		}
		.header_r{
			width: 298px;
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
			background-image: url(../assets/person.png);
			background-size: 298px;
			background-repeat: no-repeat;
			background-position: top left;
		}
	}
	.wrap{
		background-color: #fff;
		border-radius: 5px;
		padding-bottom: 36px;
		.textarea{
			width: 100%;
			height: 340px;
			padding: 0 60px 40px 100px;
			font-size: 32px;
			textarea{
				width: 100%;
				height: 100%;
				overflow-y: scroll;
			    resize: none;
			    border: none;
			    background-color: transparent;
			    line-height: 50px;
			}
		}
		.btn-con{
			margin: 0 40px;
			button{
				width: 100%;
				height: 100px;
				color: #fff;
				background-color: $green;
				outline: none;
				border: none;
				font-size: 34px;
			}
		}
	}
}
</style>
