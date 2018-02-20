import React from 'react';
import { StyleSheet, View } from 'react-native';
import WKCar from './components/weekCarousel.js';

export default class WeekView extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<WKCar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
