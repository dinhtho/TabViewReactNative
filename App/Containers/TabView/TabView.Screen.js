import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Dimensions, TouchableOpacity, Image,Text } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import Tab1Screen from './TabScreen/Tab1.Screen';
import Tab2Screen from './TabScreen/Tab2.Screen';
import Tab3Screen from './TabScreen/Tab3.Screen';

const initialLayout = {
    height: 0,
    width: 0,
};

const Tab1Route = () => <Tab1Screen/>;
const Tab2Route = () => <Tab2Screen/>;
const Tab3Route = () => <Tab3Screen/>;

class TabViewScreen extends PureComponent {
    // set key and begining index=0
    state = {
        index: 0,
        routes: [
            { key: 'tab1', title: 'Tab1' },
            { key: 'tab2', title: 'Tab2' },
            { key: 'tab3', title: 'Tab3' },
        ],
    };

    // set index for tab
    onClickTab1() { this.setState({index:0})}
    onClickTab2() { this.setState({index:1})}
    onClickTab3() { this.setState({index:2})}

    // detect swipe and give index of tab
    _handleIndexChange = index => {this.setState({ index })};

    // render bottom tabs
    _renderFooter = props => <View style={{ height: 40, flexDirection: 'row' }}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.onClickTab1()}>
            <Text style={{ fontSize: 14, color: '#000000' }}>Tab1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.onClickTab2()}>

            <Text style={{ fontSize: 14, color: '#000000' }}>Tab2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.onClickTab3()}>
            <Text style={{ fontSize: 14, color: '#000000' }}>Tab3</Text>
        </TouchableOpacity>
    </View>;

    // set key and screen
    _renderScene = SceneMap({
        tab1: Tab1Route,
        tab2: Tab2Route,
        tab3: Tab3Route,
    });

    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderFooter={this._renderFooter}
                onIndexChange={this._handleIndexChange}
                // disable swipe among tabs
                swipeEnabled={false}
                initialLayout={initialLayout}
            />
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
)(TabViewScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});