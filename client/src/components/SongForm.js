import {useState} from 'react';

const SongForm = ({onFormSubmit, keys}) => {

    const [title, setTitle] = useState("")
    const [comment, setComment] = useState("")
    // const [newkeys, setNewKeys] = ([keys])

    // const settingkeys = () => {
    //     setNewKeys(keys)
    // }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
        
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = title.trim()
        const commentToSubmit = comment.trim()
        if (!titleToSubmit || !commentToSubmit){
            return
        }
        onFormSubmit({
            title: titleToSubmit, 
            comment: commentToSubmit
        })
        setTitle ("")
        setComment("")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="TITLE" 
                    value={title}
                    onChange={handleTitleChange} 
                />
                <input 
                    type="text"
                    placeholder="COMMENT"
                    value={comment}
                    onChange={handleCommentChange}
                    />
                <input className="buttons" type="submit" value="POST" />
            </form>
        </>
    )
}

export default SongForm;