<template>
	<view class="permission">
		<uni-section class="mb-10 section" title="Device settings">
		</uni-section>

		<uni-table>
			<uni-tr>
				<uni-td width="120" align="left">Name</uni-td>
				<uni-td align="right" class="devicel_value" @click="openlang">DeviceName</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>Ringtone</uni-td>
				<uni-td align="right" class="devicel_value" @click="openlang">Tone</uni-td>
			</uni-tr>
		</uni-table>

		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="change">

				<view class="example">
					<h3>Select app language</h3>
					<!-- 基础用法，不包含校验规则 -->
					<uni-forms ref="baseForm" :modelValue="baseFormData">
						<uni-forms-item>
							<uni-data-checkbox v-model="lang" :localdata="langs" />
						</uni-forms-item>

					</uni-forms>
 
					<view class="button-group">
						<ul>
							<li @click="canclehandel" >Cancle</li>
							<li @click="canclehandel">Confirm</li>
						</ul>
					</view>
				</view>


			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseFormData: {
					name: '',
					age: '',
					introduction: '',
					sex: 2,
					hobby: [5],
					datetimesingle: 1627529992399
				},
				langs: [{
					text: 'English',
					value: 0
				}, {
					text: 'Espanol',
					value: 1
				}, {
					text: 'Francais',
					value: 3
				}, {
					text: 'Itailano',
					value: 2
				}],
			}
		},
		methods: {
			change: function() {

			},
			openlang: function() {
				this.$refs.popup.open('center')
			},
			canclehandel:function() {
				this.$refs.popup.close() 
				return false;
			}
		},
		mounted() {

		}
	}
</script>

<style>
	::v-deep .uni-section {
		background-color: var(--main-bg-color);


	}

	::v-deep .uni-list {
		margin-top: 2rem;
	}

	::v-deep .uni-section .uni-section-header__content .distraction span {
		font-size: 16px;
		margin-left: 20px;
		color: white;
	}

	/* ::v-deep .uni-list-item {
		background-color: transparent !important;
	}

	::v-deep .uni-list-item__container {
		background-color: var(--main-bg-color);

	}

	::v-deep .uni-list-item__content-title span {
		color: white;
	}

	::v-deep .uni-list--border-top {
		background-color: transparent;

	}

	::v-deep .uni-list--border-bottom {
		background-color: transparent;
	}
 */
	::v-deep .uni-section .uni-section-header__content .distraction span::before {
		content: '';
		position: absolute;
		left: 2%;
		top: 35%;
		overflow: hidden;
		zoom: 1;
		width: 0.7rem;
		height: 0.7rem;
		text-indent: -99999px;
		border-left: 0.1rem solid #b2b2b2;
		border-top: 0.1rem solid #b2b2b2;
		transform: rotate(-45deg);
		-0-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}

	::v-deep .permission .uni-list-item__extra-text {
		color: #a15621;
	}

	.left-arrow {
		position: absolute;
		left: 6%;
		top: 50%;
		overflow: hidden;
		zoom: 1;
		width: 0.4rem;
		height: 0.4rem;
		text-indent: -99999px;
		border-left: 0.1rem solid #b2b2b2;
		border-top: 0.1rem solid #b2b2b2;
		transform: rotate(-45deg);
		-0-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}


	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}

	::v-deep .uni-data-checklist .checklist-group {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	::v-deep .uni-data-checklist .checklist-group .checklist-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		margin: 5px 0;
		margin-right: 25px;
		height: 40px;
	}

	::v-deep .uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
		margin-left: 10px;
	}

	.example {
		padding: 15px;
		background-color: #262524;
		border-radius: 20px;
		margin: 10px;
	}

	.example h3 {
		color: white;
		margin-bottom: 10px;
	}

	::v-deep .uni-popup .uni-popup__wrapper {
		background-color: #262524 !important;
		border-radius: 20px;
	}

	::v-deep .example .uni-link {
		width: 5rem;
		display: inline-block;
		text-align: right;
		color: #d0702b !important;
	}

	::v-deep .uni-table {
		background-color: var(--main-bg-color);
		padding: 10px;
	}

	::v-deep .uni-table-td {
		border-bottom: 1px #5f6163 solid;
		font-weight: 400;
		height: 50px;
	}

	.devicel_value {
		color: #a15621;
	}
	
	.button-group ul {     display: flex; }
	.button-group ul li { list-style: none; width:80px; color: #a15621; }
</style>