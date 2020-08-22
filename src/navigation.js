import React, { useContext } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import RegisterPage from './pages/register';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import UserContext from './Context/Context';
import BlogPage from './pages/blog';
import CreatePostPage from './pages/create-post';
import PostDetailsPage from './pages/post-details/index';
import ProfilePage from './pages/profile';
import UpdateProfilePage from './pages/update-profile';
import UpdatePostPage from './pages/edit-post'
import Error from './pages/error-page';

const Navigation = () => {

    const context = useContext(UserContext);

    const {
        loggedIn
    } = context;

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/blog' exact>
                    {loggedIn ? (<BlogPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/register'>
                    {!loggedIn ? (<RegisterPage />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/login'>
                    {!loggedIn ? (<LoginPage />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/profile/:userId' >
                    {loggedIn ? (<ProfilePage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/update-profile/:userId' >
                    {loggedIn ? (<UpdateProfilePage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/blog/create-post'>
                    {loggedIn ? (<CreatePostPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/blog/post/:postId' >
                    {loggedIn ? (<PostDetailsPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/blog/update-post/:postId'>
                    {loggedIn ? (<UpdatePostPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;