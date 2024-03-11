<template>
	<view class="">
		<uni-section class="mb-10 section" title="Ringtone">
			<span @click='returnHandle'>
				<image class="nav-img" src="/static/Images/Back.svg"></image>
			</span>
		</uni-section>
		
		<view class="ringtone_select"  >
			<uni-forms ref="baseForm"  >
				<uni-forms-item>
					<uni-data-checkbox :localdata="langs" />
				</uni-forms-item>

			</uni-forms>
		</view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				langs: [
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},	
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
					{text: 'Tone',value: 0},{text: 'Tone',value: 0},
				]
			}
		},
		methods: {
			returnHandle() {
			   uni.navigateBack();
			}
		}
	}
</script>

<style>
.ringtone_select {
	    padding-top: 1rem;
	    background: #252525;
	    border-radius: 30px;
	  
}
::v-deep .uni-data-checklist .checklist-group {
	display: flex;
	flex-direction: column;
}

::v-deep .uni-forms-item__content {
	
}

::v-deep .uni-data-checklist .checklist-group .checklist-box {
	padding-left:1rem ;	
	margin:0rem;
}

::v-deep .uni-data-checklist .checklist-group .checklist-box .radio__inner {
	
	
}

::v-deep .uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
	border-bottom: 1px solid #5a5a5a;
	padding-bottom:1rem ;
	padding-top:1rem;
	width: 100%;
	color:white;
}

/deep/ .uni-data-checklist .checklist-group .checklist-box:last-child .checklist-content .checklist-text  {
    /* border-bottom: 0px; */
}



</style>
