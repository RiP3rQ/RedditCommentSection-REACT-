import { useState } from "react"

export default function CommentForm({ 
    initialValue = "",
    loading, 
    error, 
    onSubmit,
    autoFocus = false
}) {
  
    const [ message, setMessage ] = useState(initialValue)

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(message).then( () => setMessage(""))
        console.log("essa");
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="comment-form-row">
            <textarea 
            autoFocus={autoFocus}
            className="message-input"
            value={message}
            onChange={e => setMessage(e.target.value)}/>
            <button className="btn" disabled={loading}>
                {loading ? "Loading" : "Post"}
            </button>
        </div>
        <div className="error-msg">Error</div>
    </form>
  )
}
