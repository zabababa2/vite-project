import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
  import App from './App';
  import NewThread from './NewThread';
  import PostList from './PostList';

  const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <App /> } />
          <Route path='/threads/new' element={ <NewThread /> } />
          <Route path='/threads/:thread_id' element={ <PostList /> }/>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRoutes;