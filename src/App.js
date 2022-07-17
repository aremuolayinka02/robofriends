import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    searchRobots = (event) => {
        //This is used to update the state info of searchfield
        this.setState({searchfield: event.target.value})
    }

    render(){

        const filteredRobots = this.state.robots.filter((robot, i)=> {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        } )
        // console.log(filteredRobots);

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.searchRobots}/>
                <CardList robots={filteredRobots}/>

            </div>
        );
    }
}

export default App;