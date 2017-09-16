import React,{Component} from 'React';
import VideoListItem from './video_list_item';

// class VideoList extends Component{

// 	constructor(props){
// 		super(props);
// 		this.state={videoItems:''};
// 		//const videoItems = this.props.videos.map((video)=>{return <VideoListItem video={video}/>});
// 	}
// 	render(){
// 		return(           

// 				<ul className="col-md-4 list-group">
// 					this.setState({
// 						videoItems:this.props.videos.map((video)=>{return <VideoListItem video={video}/>})
// 					})
// 				</ul>
// 			);
// 	}
// }

const VideoList = (props) => {
	const videoItems = props.videos.map((video)=>{return <VideoListItem 
		onVideoSelect={props.onVideoSelect}
		key={video.etag} video={video}/>});
return (
	<ul className="col-md-4 list-group">
	{videoItems}
	</ul>
);

}
export default VideoList;