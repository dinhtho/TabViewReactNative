import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { connect } from 'react-redux'



class Tab1Screen extends PureComponent {



    render() {
        return (
            <View style={[styles.container, { backgroundColor: 'pink' }]} >
                <View style={{backgroundColor:'grey',flex:9/10}}></View>
                <Text>Tab1</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab1Screen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});