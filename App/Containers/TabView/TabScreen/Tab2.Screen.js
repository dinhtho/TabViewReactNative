import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { connect } from 'react-redux'



class Tab2Screen extends PureComponent {



    render() {
        return (
            <View style={[styles.container, { backgroundColor: 'blue' }]} >
                <Text>Tab2</Text>
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
)(Tab2Screen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});