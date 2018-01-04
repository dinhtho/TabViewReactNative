import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, ListView, FlatList } from 'react-native';
import { connect } from 'react-redux'
import StepIndicator from 'react-native-step-indicator';

const customStyles = {
    stepIndicatorSize: 10,
    currentStepIndicatorSize: 10,
    separatorStrokeWidth: 0,
    currentStepStrokeWidth: 0,
    stepIndicatorFinishedColor: 'grey',
    stepIndicatorUnFinishedColor: 'grey',
    stepIndicatorCurrentColor: 'white',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
}


class ViewPagerScreen extends Component {

    constructor() {
        super();
        this.state = {
            currentPosition: 0,
            data: ["item", "item", "item", "item", "item"],
        }
        this.handleViewableItemsChanged = this.handleViewableItemsChanged.bind(this)
        this.viewabilityConfig = { viewAreaCoveragePercentThreshold: 70 }


    }
    handleViewableItemsChanged({ viewableItems }) {
        console.log(viewableItems)
        if (viewableItems.length > 0) {
            this.setState({ currentPosition: viewableItems[0].index })
        }
    }


    onClickItem(index) {
        console.log("aaa" + index);
    }
    renderItem(item, index) {
        return (
            <View style={{ width: 300, height: 100, backgroundColor: 'red' }}>
                <Text>{item}</Text>
                <Text>{index}</Text>
            </View>
        )
    }


    render() {
        return (

            <View style ={{alignItems:'center'}}>
                <FlatList styles={{ height: 50 }}
                    horizontal={true}
                    ref={(ref) => { this.flatListRef = ref; }}
                    keyExtractor={(item, index) => index}
                    data={this.state.data}
                    renderItem={({ item, index }) => this.renderItem(item, index)}

                    onViewableItemsChanged={this.handleViewableItemsChanged}
                    viewabilityConfig={this.viewabilityConfig}
                />

                <View style ={{width:100}}>

                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                    />
                </View>
            </View>

        )
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
)(ViewPagerScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    stepIndicator: {
        marginVertical: 50,
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});