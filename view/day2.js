/**
 * Day 2
 * A weather app
 * Have trouble completing the animation part
 * will study on the animation in later experiments
 */

'use strict';
import React, {
  AppRegistry,
  AlertIOS,
  Component,
  ListView,
  Image,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var Util = require('./utils');
var Icon = require('react-native-vector-icons/Ionicons');
var Swiper = require('react-native-swiper');

var Weather = React.createClass({
	getInitialState: function () {
		StatusBarIOS.setStyle(1);
		var weatherData = [{
			key:0,
			city: "福州",
			night: true,
			bg:require('./img/day2/w2.png'),
			abs:"大部晴朗",
			degree: 15,
			today:{
				week:"星期六",
				day:"今天",
				high:16,
				low:14
			},
			hours:[{
				key: 101,
				time:"现在",
				icon:"ios-moon",
				degree:"15°",
				color:"rgba(255,255,255,1)"
			},{
				key: 102,
				time:"3时",
				icon:"ios-cloudy-night",
				degree:"15°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 103,
				time:"4时",
				icon:"ios-cloudy-night",
				degree:"16°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 104,
				time:"5时",
				icon:"ios-cloudy-night",
				degree:"16°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 105,
				time:"6时",
				icon:"ios-cloudy-night",
				degree:"16°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 106,
				time:"06:21",
				icon:"ios-sunny-outline",
				degree:"日出",
				color:"#fedf32"			
			},{
				key: 107,
				time:"7时",
				icon:"ios-partlysunny",
				degree:"16°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 108,
				time:"8时",
				icon:"ios-partlysunny",
				degree:"18°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 109,
				time:"9时",
				icon:"ios-sunny",
				degree:"19°",
				color:"#fedf32"
			},{
				key: 110,
				time:"10时",
				icon:"ios-sunny",
				degree:"122°",
				color:"#fedf32"
			},{
				key: 111,
				time:"11时",
				icon:"ios-sunny",
				degree:"23°",
				color:"#fedf32"
			},{
				key: 112,
				time:"13时",
				icon:"ios-sunny",
				degree:"22°",
				color:"#fedf32"
			},{
				key: 113,
				time:"13时",
				icon:"ios-sunny",
				degree:"22°",
				color:"#fedf32"
			},{
				key: 114,
				time:"14时",
				icon:"ios-partlysunny",
				degree:"16°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 115,
				time:"15时",
				icon:"ios-partlysunny",
				degree:"22°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 116,
				time:"16时",
				icon:"ios-partlysunny",
				degree:"21°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 117,
				time:"17时",
				icon:"ios-partlysunny",
				degree:"19°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 118,
				time:"18时",
				icon:"ios-partlysunny",
				degree:"18°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 119,
				time:"18:06",
				icon:"ios-partlysunny-outline",
				degree:"日落",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 120,
				time:"19时",
				icon:"ios-cloudy-night",
				degree:"18°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 121,
				time:"20时",
				icon:"ios-cloudy-night",
				degree:"18°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 122,
				time:"21时",
				icon:"ios-cloudy-night",
				degree:"18°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 123,
				time:"22时",
				icon:"ios-cloudy-night",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 124,
				time:"23时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 125,
				time:"0时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 126,
				time:"1时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 127,
				time:"2时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			}],
			days:[{
				key:21,
				day:"星期一",
				icon:"ios-partlysunny",
				high: 21,
				low:16
			},{
				key:22,
				day:"星期二",
				icon:"ios-rainy",
				high: 22,
				low:14
			},{
				key:23,
				day:"星期三",
				icon:"ios-rainy",
				high: 21,
				low:11
			},{
				key:24,
				day:"星期四",
				icon:"ios-rainy",
				high: 12,
				low:8
			},{
				key:25,
				day:"星期五",
				icon:"ios-rainy",
				high: 9,
				low:7
			},{
				key:26,
				day:"星期六",
				icon:"ios-partlysunny",
				high: 13,
				low:9
			},{
				key:27,
				day:"星期日",
				icon:"ios-rainy",
				high: 17,
				low:13
			},{
				key:28,
				day:"星期一",
				icon:"ios-partlysunny",
				high: 18,
				low:14
			},{
				key:29,
				day:"星期二",
				icon:"ios-partlysunny",
				high: 22,
				low:17
			}],
			info:"今天：今天大部多云。现在气温 15°；最高气温23°。",
			rise:"06:21",
			down:"18:06",
			prop:"10%",
			humi:"94%",
			dir:"东北偏北",
			speed:"3千米／小时",
			feel:"15°",
			rain:"0.0 厘米",
			pres:"1,016 百帕",
			sight:"5.0 公里",
			uv:"0"
		},{
			key:1,
			city: "卡尔加里",
			night:false,
			bg:require('./img/day2/w3.png'),
			abs:"大部晴朗",
			degree: 15,
			today:{
				week:"星期六",
				day:"今天",
				high:16,
				low:14
			},
			hours:[{
				key: 101,
				time:"现在",
				icon:"ios-moon",
				degree:"15°",
				color:"rgba(255,255,255,1)"
			},{
				key: 102,
				time:"3时",
				icon:"ios-cloudy-night",
				degree:"15°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 103,
				time:"4时",
				icon:"ios-cloudy-night",
				degree:"16°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 104,
				time:"5时",
				icon:"ios-cloudy-night",
				degree:"16°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 105,
				time:"6时",
				icon:"ios-cloudy-night",
				degree:"16°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 106,
				time:"06:21",
				icon:"ios-sunny-outline",
				degree:"日出",
				color:"#fedf32"			
			},{
				key: 107,
				time:"7时",
				icon:"ios-partlysunny",
				degree:"16°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 108,
				time:"8时",
				icon:"ios-partlysunny",
				degree:"18°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 109,
				time:"9时",
				icon:"ios-sunny",
				degree:"19°",
				color:"#fedf32"
			},{
				key: 110,
				time:"10时",
				icon:"ios-sunny",
				degree:"122°",
				color:"#fedf32"
			},{
				key: 111,
				time:"11时",
				icon:"ios-sunny",
				degree:"23°",
				color:"#fedf32"
			},{
				key: 112,
				time:"13时",
				icon:"ios-sunny",
				degree:"22°",
				color:"#fedf32"
			},{
				key: 113,
				time:"13时",
				icon:"ios-sunny",
				degree:"22°",
				color:"#fedf32"
			},{
				key: 114,
				time:"14时",
				icon:"ios-partlysunny",
				degree:"16°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 115,
				time:"15时",
				icon:"ios-partlysunny",
				degree:"22°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 116,
				time:"16时",
				icon:"ios-partlysunny",
				degree:"21°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 117,
				time:"17时",
				icon:"ios-partlysunny",
				degree:"19°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 118,
				time:"18时",
				icon:"ios-partlysunny",
				degree:"18°",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 119,
				time:"18:06",
				icon:"ios-partlysunny-outline",
				degree:"日落",
				color:"rgba(255,255,255,0.9)"
			},{
				key: 120,
				time:"19时",
				icon:"ios-cloudy-night",
				degree:"18°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 121,
				time:"20时",
				icon:"ios-cloudy-night",
				degree:"18°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 122,
				time:"21时",
				icon:"ios-cloudy-night",
				degree:"18°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 123,
				time:"22时",
				icon:"ios-cloudy-night",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 124,
				time:"23时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 125,
				time:"0时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 126,
				time:"1时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			},{
				key: 127,
				time:"2时",
				icon:"ios-cloudy",
				degree:"17°",
				color:"rgba(255,255,255,0.8)"
			}],
			days:[{
				key:21,
				day:"星期一",
				icon:"ios-partlysunny",
				high: 21,
				low:16
			},{
				key:22,
				day:"星期二",
				icon:"ios-rainy",
				high: 22,
				low:14
			},{
				key:23,
				day:"星期三",
				icon:"ios-rainy",
				high: 21,
				low:11
			},{
				key:24,
				day:"星期四",
				icon:"ios-rainy",
				high: 12,
				low:8
			},{
				key:25,
				day:"星期五",
				icon:"ios-rainy",
				high: 9,
				low:7
			},{
				key:26,
				day:"星期六",
				icon:"ios-partlysunny",
				high: 13,
				low:9
			},{
				key:27,
				day:"星期日",
				icon:"ios-rainy",
				high: 17,
				low:13
			},{
				key:28,
				day:"星期一",
				icon:"ios-partlysunny",
				high: 18,
				low:14
			},{
				key:29,
				day:"星期二",
				icon:"ios-partlysunny",
				high: 22,
				low:17
			}],
			info:"今天：今天大部多云。现在气温 15°；最高气温23°。",
			rise:"06:21",
			down:"18:06",
			prop:"10%",
			humi:"94%",
			dir:"东北偏北",
			speed:"3千米／小时",
			feel:"15°",
			rain:"0.0 厘米",
			pres:"1,016 百帕",
			sight:"5.0 公里",
			uv:"0"
		}]
		return {
			weather: weatherData,
			// degreeOpacity: [1,1],
			// headOpacity:[0,0]
		}
	},
	// _animateScroll: function (index,e) {
	// 	if (index==0) {
	// 		var offsetY = e.nativeEvent.contentOffset.y,
	// 			opacities = this.state.degreeOpacity,
	// 			headOpacities = this.state.headOpacity;
	// 		if (offsetY<0) {
	// 			opacities[index] = 1;
	// 		}else if(offsetY< 110){
	// 			opacities[index] = 1-(offsetY+10)/110;
	// 		}else{
	// 			opacities[index] = 0;
	// 		}
	// 		if (offsetY<35) {
	// 			headOpacities[index] = 0
	// 		}else{
	// 			headOpacities[index] = 1
	// 		}
	// 		this.setState({
	// 			degreeOpacity: opacities,
	// 			headOpacity: headOpacities
	// 		})
	// 	};

	// },
	_back: function () {
		this.props.back();
	},
	render: function () {
		// for scroll 
		// onScroll={onThis._animateScroll.bind(onThis, index)} scrollEventThrottle={16}
		// for head into
		// {[styles.abs,{opacity:1-onThis.state.headOpacity[index]}]}
		var onThis = this;
		var slides = this.state.weather.map(function(elem, index) {
			var hourView = elem.hours.map(function(hourElem, hourIndex) {
				return (
					<View key={hourElem.key} style={styles.withinDayHoursBox}>
			            <Text style={hourIndex==0? styles.withinDayHoursTimeBold:styles.withinDayHoursTime}>{hourElem.time}</Text>
          				<Icon name={hourElem.icon} size={25} style={[styles.withinDayHoursIcon,{color:hourElem.color}]}></Icon>
          				<Text style={hourIndex==0? styles.withinDayHoursDegreeBold:styles.withinDayHoursDegree}>{hourElem.degree}</Text>
          			</View>
				);
			});

			var dayView = elem.days.map(function(dayElem, dayIndex) {
				return (
					<View key={dayElem.key} style={styles.withinWeekLine}>
      					<View style={styles.withinWeekDay}>
      						<Text style={styles.withinWeekDayText}>{dayElem.day}</Text>
      					</View>
      					<View style={styles.withinWeekIcon}>
      						<Icon name={dayElem.icon}  style={styles.withinWeekIconIcon} size={25}></Icon>
      					</View>
      					<View style={styles.withinWeekDegree}>
      						<Text style={styles.withinWeekHigh}>{dayElem.high}</Text>
      						<Text style={elem.night?styles.withinWeekLowNight:styles.withinWeekLow}>{dayElem.low}</Text>
      					</View>
      				</View>
				);
			})

			return (
				<View key={elem.key}>
	              <Image style={styles.image} source={elem.bg}></Image>
	              <ScrollView style={styles.pageContainer}  showsVerticalScrollIndicator={false}>
	              	<View style={styles.headInfo}>
	              		<Text style={styles.city}>{elem.city}</Text>
	              		<Text style={styles.abs}>{elem.abs}</Text>
	              		<Text style={styles.degree}>{elem.degree}</Text>
	              		<Text style={styles.circle}>°</Text>
	              	</View>
	              	<View style={styles.withinDay}>
	              		<View style={styles.withinDayGeneral}>
	              			<View style={styles.withinDayHead}>
		              			<Text style={styles.withinDayWeek}>{elem.today.week}</Text>
		              			<Text style={styles.withinDayDay}>{elem.today.day}</Text>
		              		</View>
		              		<View style={styles.withinDayTail}>
		              			<Text style={styles.withinDayHigh}>{elem.today.high}</Text>
		              			<Text style={elem.night?styles.withinDayLowNight:styles.withinDayLow}>{elem.today.low}</Text>
		              		</View>
	              		</View>
	              		<ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.withinDayHoursContainer}> 
	              			<View style={styles.withinDayHours}>
		              			{hourView}
	              			</View>
	          			</ScrollView>
	          			<View style={styles.withinWeek}>
	          				{dayView}
	          			</View>
	          			<View style={styles.weatherInfo}>
	          				<Text style={styles.weatherInfoText}>{elem.info}</Text>
	          			</View>
	          			<View style={styles.weatherOther}>
		          			<View style={styles.weatherOtherSection}>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>日出：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.rise}</Text>
		          				</View>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>日落：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.down}</Text>
		          				</View>
		          			</View>
		          			<View style={styles.weatherOtherSection}>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>降雨概率：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.prop}</Text>
		          				</View>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>湿度：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.humi}</Text>
		          				</View>
		          			</View>
		          			<View style={styles.weatherOtherSection}>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>风速：</Text>
		          					<Text style={styles.weatherOtherValue}><Text style={{fontSize:10}}>{elem.dir}</Text>{elem.speed}</Text>
		          				</View>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>体感温度：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.feel}</Text>
		          				</View>
		          			</View>
		          			<View style={styles.weatherOtherSection}>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>降水量：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.rain}</Text>
		          				</View>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>气压：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.pres}</Text>
		          				</View>
		          			</View>
		          			<View style={styles.weatherOtherSection}>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>能见度：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.sight}</Text>
		          				</View>
		          				<View style={styles.weatherOtherLine}>
		          					<Text style={styles.weatherOtherTitle}>紫外线指数：</Text>
		          					<Text style={styles.weatherOtherValue}>{elem.uv}</Text>
		          				</View>
		          			</View>
	          			</View>
	              	</View>
	              </ScrollView>
	            </View>
			);
		})

		// animate
		// <View style={{position:"absolute", top:35, width:Util.size.width,alignItems:"center",opacity:this.state.headOpacity[0]}}>
        // 		<Text style={styles.city}>{this.state.weather[0].city}</Text>
        //   	<Text style={styles.abs}>{this.state.weather[0].abs}</Text>
        // </View>

		return(
			<View>
				<Swiper 
				style={styles.wrapper} 
				showsButtons={false}
				paginationStyle={{bottom:10, paddingTop:10, borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:Util.pixel}}
				dot={<View style={{backgroundColor: 'rgba(255,255,255,0.2)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
				activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.5)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
		            {slides}
	        	</Swiper>
	        	<TouchableHighlight onPress={this._back} style={{position:"absolute", right:20,bottom:7}}>
	        		<Icon size={17} name="ios-list-outline" style={{color:"#fff"}}></Icon>
	        	</TouchableHighlight>
			</View>
		)
	}
})

var Day2 = React.createClass({
	_back: function () {
		this.props.navigator.pop();
	},
	render: function () {
		return(
			<View style={styles.weatherContainer}>
				<Weather back={this._back}></Weather>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	pageContainer:{
		backgroundColor:"transparent",
		position: "absolute",
		width: Util.size.width,
		left:0,
		top: 20,
		height: Util.size.height - 53
	},
	headInfo:{
		paddingTop:70,
		alignItems:"center",
		paddingBottom:60,
	},
	city:{
		fontSize: 25,
		color:"#fff",
		paddingBottom: 5,
		backgroundColor:"transparent"
	},
	abs:{
		fontSize:15,
		color:"#fff",
		backgroundColor:"transparent"
	},
	degree:{
		fontSize:85,
		color:"#fff",
		fontWeight: "100",
	},
	circle:{
		fontSize:35,
		color:"#fff",
		fontWeight: "300",
		position:"absolute",
		top:130,
		right:Util.size.width/2-55,
	},
	withinDayGeneral:{
		flexDirection:"row",
		width: Util.size.width,
	},
	withinDayHead:{
		flex:1,
		flexDirection:"row",
		justifyContent: 'flex-start',
		paddingLeft: 20,
	},
	withinDayTail:{
		flex:1,
		flexDirection:"row",
		justifyContent: 'flex-end',
		paddingRight: 10,
	},
	withinDayWeek:{
		fontSize:15,
		color: "#fff",
		fontWeight: "400",
		width:50,
	},
	withinDayDay:{
		fontSize:15,
		color: "#fff",
		fontWeight: "300",
		width:50,
	},
	withinDayHigh:{
		fontSize:16,
		color: "#fff",
		fontWeight: "200",
		width:30,
	},
	withinDayLow:{
		fontSize:16,
		color: "#eee",
		fontWeight: "200",
		width:30,
	},
	withinDayLowNight:{
		fontSize:16,
		color: "#aaa",
		fontWeight: "200",
		width:30,
	},
	withinDayHoursBox:{
		width:55,
	},
	withinDayHoursContainer:{
		marginTop:3,
		borderTopColor:"rgba(255,255,255,0.7)",
		borderTopWidth:Util.pixel,
		borderBottomColor:"rgba(255,255,255,0.7)",
		borderBottomWidth:Util.pixel,
	},
	withinDayHours:{
		paddingLeft:7, paddingTop:10, paddingBottom:10,paddingRight:10,
		flexDirection:"row",
		flexWrap:"nowrap"
	},
	withinDayHoursTime:{
		color:"#fff",
		fontSize:12,
		textAlign:"center"
	},
	withinDayHoursTimeBold:{
		color:"#fff",
		fontSize:13,
		textAlign:"center",		
		fontWeight:"500",
	},
	withinDayHoursIcon:{
		textAlign:"center",
		paddingTop:5,
	},
	withinDayHoursDegree:{
		color:"#fff",
		fontSize:14,
		paddingTop:5,
		textAlign:"center"
	},
	withinDayHoursDegreeBold:{
		color:"#fff",
		fontSize:15,
		textAlign:"center",
		paddingTop:5,
		fontWeight:"500"
	},
	withinWeek:{
		paddingTop:5
	},
	withinWeekLine:{
		flexDirection:"row",
		height: 28
	},
	withinWeekDay:{
		justifyContent:"center",
		alignItems:"flex-start",
		flex:1,
	},
	withinWeekIcon:{
		justifyContent:"center",
		alignItems:"center",
		flex:1, 
	},
	withinWeekDegree:{
		justifyContent:"flex-end",
		alignItems:"center",
		flex:1,
		flexDirection:"row",
		paddingRight:25,
	},
	withinWeekHigh:{
		color:"#fff",
		width:35,
		fontSize:16,
		textAlign:"right"
	},
	withinWeekIconIcon:{
		color:"#fff"
	},
	withinWeekLow:{
		color:"#eee",
		width:35,
		fontSize:16,
		textAlign:"right"
	},
	withinWeekLowNight:{
		color:"#aaa",
		width:35,
		fontSize:16,
		textAlign:"right"
	},
	withinWeekDayText:{
		color:"#fff",
		paddingLeft:20,
		fontSize:15,
	},
	weatherInfo:{
		marginTop:5,
		borderTopColor:"rgba(255,255,255,0.7)",
		borderTopWidth:Util.pixel,
		borderBottomColor:"rgba(255,255,255,0.7)",
		borderBottomWidth:Util.pixel,
	},
	weatherInfoText:{
		color:"#fff",
		fontSize:15,
		paddingTop:10,paddingLeft:20,paddingBottom:10,paddingRight:20,
	},
	weatherOther:{
		paddingTop:10
	},
	weatherOtherSection:{
		paddingBottom:10
	},
	weatherOtherLine:{
		flexDirection:"row",
		flexWrap:"nowrap"
	},
	weatherOtherTitle:{
		width: Util.size.width/2-15,
		color:"#fff",
		textAlign:"right",
		fontSize: 15,
	},
	weatherOtherValue:{
		width: Util.size.width/2,
		paddingLeft:15,
		flex:1,
		fontSize: 15,
		color:"#fff",
	}
})

module.exports = Day2;