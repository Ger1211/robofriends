import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Loader from 'react-loader-spinner';
import '../containers/App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots
            .filter(robot => {
                return robot.name
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
            });
        return isPending ?
            <div className="tc">
                <h3 className="f2">LOADING...</h3>
                <Loader
                    type="Triangle"
                    color="#DBD65C"
                    height={100}
                    width={100}
                    timeout={0} 

                />
            </div> :
            <div className="tc">
                <h3 className="f2">ROBOFRIENDS</h3>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);