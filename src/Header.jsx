import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>掲示板</h1>
			<div className="setThreadLink">
				<Link to="/threads/new" className="Link">スレッドをたてる</Link>
			</div>
    </header>
  )
}

export default Header