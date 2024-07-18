import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const NewtThread = () => {
	const[ newtThread, setNewThread ] = useState('');

	const handleSubmit = async () => {
		const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify({
				title: newtThread
			})
		});
	}

  return (
    <div>
      <Header />
    	<main>
				<div className="setThread">
					<h2>スレッド新規作成</h2>
					<form onSubmit={ handleSubmit }>
						<input 
							type="text"
							value={ newtThread }
							onChange={ (e) => setNewThread(e.target.value) }
							placeholder= "スレッドタイトルを入力してください"
							className="textBox"
							required
						/>
						<div className='btn'>
							<button type="submit">作成</button>
							<Link to="/" className="backTop">Topに戻る</Link>
						</div>
					</form>
				</div>
  		</main>
    </div>
  )
}

export default NewtThread