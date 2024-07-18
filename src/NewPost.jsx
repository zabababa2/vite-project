import { useState } from "react"

export const NewPost = ({ threadId }) => {
  const [ newPost, setNewPost ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        post: newPost
      })
    });
    window.location.reload();
  } 

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <textarea
          value={ newPost }
          onChange={ (e) => setNewPost(e.target.value) }
          placeholder="投稿しよう！"
          required
        />
        <div className="btn">
          <button type="submit">投稿</button>
        </div>
      </form>
    </div>
  )
}

export default NewPost