import React from 'react';
import { Animated, StyleSheet, View, Easing } from 'react-native';

const Loading = props => {

    let spinValue = new Animated.Value(0)

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        )
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.view}>
            <Animated.Image style={{ ...styles.image, transform: [{ rotate: spin }] }} resizeMode='contain' source={require('../Image/Loading.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '100%'
    }
})

export default Loading