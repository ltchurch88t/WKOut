import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';

export default class WKCar extends React.Component {
	render() {
		return(
			<View style={styles.carContainer}>
				<Text>Stuff</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	carContainer: {
		flex: 1,
	}
});
