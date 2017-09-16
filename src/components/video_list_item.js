import React,{Component} from 'react';

class VideoListItem extends Component {
	constructor(props){
		super(props);
		this.imageUrl=this.props.video.snippet.thumbnails.default.url;
		this.title=this.props.video.snippet.title;
	}

	render(){
		return(
				<li onClick={()=>this.props.onVideoSelect(this.props.video)} className="list-group-item">
				 <div className="video-list media">
				 	<div className="media-left">
				 	  <img src={this.imageUrl} className="media-object" />
				 </div> 

				 <div className="media-body">
				  <div className="media-heading">{this.title}</div>
				 </div>
				 </div>
				</li>
			);
	}
}

export default VideoListItem;