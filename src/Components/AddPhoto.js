import React, {Component} from 'react';

class AddPhoto extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;

        const post = {
            id: Number(new Date()),
            imageLink: imageLink,
            description: description
        }
        if(imageLink && description){
            this.props.onAddPhoto(post);
            document.querySelector("#uploadBtn").textContent = "Uploaded";
        }
            
        
        event.target.elements.link.value = "";
        event.target.elements.description.value = ""
        // {alert('Photo added Successfully!')}
        console.log('added');
    }
    render(){
        return(
            <div>
                <h1>PhotoWall</h1>
                <div className="form1">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button id="uploadBtn">Upload</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;