import React, { Component } from 'react';
import LikedBy from './LikedBy.js';

class Movie extends Component {
 	render() {
      
      	const profilesliked = this.props.profiles.filter(profile => 
        		profile.favoriteMovieID == this.props.movie.id
          );
      
		return ( 
          <div>
            <h2>{ this.props.movie.name }</h2>
          	<p>Liked By:</p>
          	<ul>
          
          { profilesliked.map(profile => {
          		const user = this.props.users[profile.userID];
          		return <LikedBy name={user.name} />
          }) }
          		
          	</ul>
          </div>
          );
    }
}

export default Movie