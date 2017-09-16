//need to create component that has some html
//same html should add in dom

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList  from './components/video_list';
import VideoDetail  from './components/video_detail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAZDs4GBlpYJChh0kQvF4laCbBk4Fuv4YY';

class App extends Component{

	constructor(props) {
		super(props);

		this.state={
			videos:[],
			selectVideo:null
		};
		this.videoSearch('surfboards');
			//(data)=>this.setState({videos:data});			
	}

	videoSearch(term) {
		YTSearch({key:API_KEY,term:term},(videos)=>{
			this.setState({
				videos:videos,
				selectVideo:videos[0]
			});
		});
	}
	render(){

		const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);

		return (
        <div >        
        <SearchBar onSearchTermChange={videoSearch}/>
       	 <VideoDetail video={this.state.selectVideo}/>
        <VideoList 
        onVideoSelect={selectVideo=>this.setState({selectVideo})}
        videos={this.state.videos}/>
        </div>
    )
	}
}

// const App = () => {
//     return (
//         <div >
//         <SearchBar/>
//         </div>
//     )
// }

ReactDOM.render( < App / > , document.querySelector(".container"));