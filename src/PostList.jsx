import Header from './Header'
import NewPost from './NewPost'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export const PostList = () => {
  const [ threadPosts , setthreadPosts ] = useState([]);

  const params = useParams(); //IDの取得
  const threadId = params.thread_id
  const { state: title } = useLocation(); //titleの取得

  const fetchPosts = async () => {
    const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`);
    const data = await response.json();
    setthreadPosts(data.posts);
  }

  useEffect(() => {
    fetchPosts(); 
  }, [])
    
  return (
    <div>
      <Header />
			<div className='Container'>			
				<h2>{ title }</h2>
				<div className='postContainer'>
					<ul>
            {threadPosts.map((threadPost) => (
							<li key={ threadPost.post }>
                { threadPost.post }
              </li>
						))}
					</ul>
					<NewPost threadId={ threadId } fetchPosts={ fetchPosts }/>
				</div>
				<Link to="/">Topに戻る</Link>
			</div>
    </div>
  )
}

export default PostList