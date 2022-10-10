import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import '../Styles/stylesheet.css'


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }
    addPhoto(postSumitted){
        this.setState(state => ({
            posts: state.posts.concat(postSumitted)
        }))
    }
    removePhoto(postRemoved){
        this.setState(state => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }
    componentDidMount(){
        const data = temporaryDatabase();
        this.setState({
            posts: data
        })
    }
    render(){
        return(
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <Title title={'PhotoWall'}/>
                                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
                            </>
                        } />

                        <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={this.addPhoto} />
                        } />
                    </Routes>
                </Router>
            </div>
        );
    }
}

function temporaryDatabase(){
    return [{
        id: 0,
        description: "Lens",
        imageLink: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
    }, {
        id: 1,
        description: "On a vacation!",
        imageLink: "https://www.w3schools.com/css/img_5terre.jpg"
    }, {
        id: 2,
        description: "",
        imageLink: "https://tinypng.com/images/social/website.jpg"
    }];
}

export default Main;