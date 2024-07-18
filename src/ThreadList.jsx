import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const ThreadList = () => {
  const[ threads, setThreads ] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
    	const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads");
      const data = await response.json();
      setThreads(data);
    }
    fetchThreads(); 
  }, [])
	
  return (
    <main>
			<div className="threadList">
				<h2>新着スレッド</h2>
				<table>
          <tbody>
					  {threads.map((thread) => (
              <tr key={ thread.title }>
                <td>
                  <Link to={`/threads/${ thread.id }`} state={ thread.title }>
                    { thread.title }
                  </Link>
                </td>
              </tr>
					  ))}
          </tbody>
				</table>
			</div>
  	</main>
  )
}

export default ThreadList