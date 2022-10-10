import React from 'react';

export default function Photo(props){
    const post = props.post;
    return <figure className="figure">
        <img className='photo' src={post.imageLink} alt={post.description} />
        <p className="description">{post.description}</p>
        <div className="remove-image">
            <button type="button" onClick={()=>{
                props.onRemovePhoto(post)
            }}>Remove</button>
        </div>
    </figure>;
}

