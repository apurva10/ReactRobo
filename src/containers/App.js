import React, {Component} from 'react';
import RoboList from '../components/RoboList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state = {
			searchfield : '',
			roboData : []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({roboData : users}))
	}

	onSearchChanged = (event) =>{
		this.setState({searchfield : event.target.value})
	}

	render()
	{
		const filteredRobos = this.state.roboData.filter(robot=>{
			return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
			})

		if(this.state.roboData.length === 0)
		{
			return(<h1>Loading...</h1>)
		}
		else{			
			return(
				<div className= 'tc'>				
				<h1 className='f2'> Robofriends </h1>
				<SearchBox searchChange={this.onSearchChanged}/>
				<Scroll>
					<RoboList roboData={filteredRobos}/>
				</Scroll>
				</div>
			    );
			}
	}
}
export default App;