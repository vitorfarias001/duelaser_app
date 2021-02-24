import { StyleSheet, View, TouchableHighlight, Dimensions, Animated, Image, Text } from 'react-native';
import React, { Component } from 'react';

import Svg, { Circle, Path } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class DueTabBar extends Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <View style={styles.content}>
            //     <View style={styles.subContent}>
                    
            //     </View>
            //     <Svg version="1.1" id="bottom-bar" x="0px" y="0px" width="100%" height="100" viewBox="0 0 1092 260" space="preserve">
            //         <AnimatedPath fill='#333333'
            //             stroke='#ffff'
            //             d={'M 295.74442,3.94678 H 796.2555 c 43.08994,0 77.77968,34.68971 77.77968,77.7796 0,43.0899 -34.68974,77.77956 -77.77968,77.77956 H 295.74442 c -43.08989,0 -77.77959,-34.68966 -77.77959,-77.77956 0,-43.08989 34.6897,-77.7796 77.77959,-77.7796 z'}
            //         />
            //     </Svg>
            // </View>
            <View>
                <Text>TESTE</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection:'column',
        zIndex: 0,
        width: (Dimensions.get('window').width - 30),
        left: '4%',
        right: '4%',
        position: 'absolute',
        bottom: '10%',
    },
    subContent: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        zIndex: 1,
        position: 'absolute',
        bottom: 5,
    },
    navItem: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        zIndex: 0,
    },
    navImage: {
        width: 45,
        height: 45,
    },
    circle: {
        bottom: 18,
    },
});