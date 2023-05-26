import React, { useRef } from 'react';
import { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
const user = {
        firstName: 'Atamyrat',
        lastName: 'Ovlyakuliyev',
        isLoggedIn: true
    }




const TwitterCrud = () => {
    const [posts, setPosts] = useState([]);    

    const currentTime = Date.now();
    const formattedDate = (timeStamp) => {
        const date = new Date(timeStamp);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleDateString('en-US', options)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const postContent = e.target.textArea.value;
        const postTime = formattedDate(currentTime);
        const {firstName, lastName, isLoggedIn} = user;
        const newPost = {postContent, postTime, firstName, lastName, isLoggedIn};
        setPosts([...posts, newPost])
        console.log(posts);
    }

    const PostToDisplay = ({postToDisp}) => {
        const {firstName, lastName, isLoggedIn, postContent, postTime} = postToDisp;
        const ref = useRef(null)
        const [editPost, setEditPost] = useState(false);
        const [editedContent, setEditedContent] = useState(postContent);

        const deletePost = (clicked) => {
            const updatePosts = posts.filter(post => post !== clicked);
            if(postToDisp === clicked ) {
                posts.pop(clicked)
                console.log(posts.length)
            }

            setPosts(updatePosts);
        }

        const toggleEdit = () => {
            setEditPost(prevEditPost => !prevEditPost);
        }

        const handlePostContentChange = event => {
            setEditedContent(event.target.value);
        }

        const savePost = () => {
            const updatedPost = {...postToDisp, postContent: editedContent};
            const postIndex = posts.findIndex(post => post === postToDisp);
            const updatedPosts = [...posts];
            updatedPosts[postIndex] = updatedPost;
            setPosts(updatedPosts);
            toggleEdit();
        }
    
        return (
            <div ref={ref} className='post-main_container'>
                <div className='post-container'>
                    <div className='post-user_avatar'>
                        <p><RxAvatar /></p>
                        <h2>{`${firstName} ${lastName}`} <span>{`@${firstName}`}</span></h2>
                    </div>
                    <div>
                        {editPost ? (
                        <form className='post-edit_form'>
                            <textarea 
                            name="editPost" 
                            id="editPost" 
                            value={editedContent}
                            onChange={handlePostContentChange}
                            cols="30" 
                            rows="2"></textarea>
                            <input type="button" value='Save' onClick={savePost}/>
                            <input type="button" value='Cancel' onClick={toggleEdit}/>
                        </form>) 
                        : (
                            <div className='post-content_container'>
                            <p>{postContent}</p>
                            <div className='post-edit_delete'>
                                <p onClick={toggleEdit}><FaEdit /></p>
                                <p onClick={() => {deletePost(postToDisp)}}><MdDeleteForever /></p>
                            </div>
                            </div>
                        )    
                    }
                    </div>
                    <div className='post-date_container'>
                        <small>{postTime}</small>
                        <small>{isLoggedIn}</small>
                    </div>
                </div>
            </div>
        )
    }


  return (
    <div className='twitter-crud_main'>
        <div className='twitter-form_container'>
            <form onSubmit={handleSubmit}>
                <textarea 
                name="post"
                id='textArea' 
                cols="30" 
                rows="2"
                >
                </textarea>
                <input type="submit" value='Post' />
            </form>

        </div>
        <div className='twitter-posts_container'>
            { posts.length === 0
            ? <p>No Post</p>
            : posts.map((postDisp) => (
                <PostToDisplay key= {posts.indexOf(postDisp)} postToDisp={postDisp} />))
        }
        </div>
    </div>
  )
}

export default TwitterCrud;