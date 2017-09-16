import React, {Component} from 'react';

//const Component = React.Component;

// const SearchBar = () => {
// 	return <input />;
// }

// export default SearchBar; 


class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state={term:""};
	}
	render(){
		return(
			 /*<input onChange={this.onInputChange}/>*/
			 /*<input onChange={(event)=>console.log(event.target.value)}/>*/
			 <div className="search-bar">
			 <input
			  value={this.state.term}
			  onChange={event=>this.onInputChange(event.target.value)}/>
			 </div>
			); 
	}

	/*onInputChange(event){
		console.log(event.target.value);
	}*/

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term); 
	}
}

export default SearchBar;  