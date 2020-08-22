const getNavigation = (loggedIn, user) => {

    const authLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Blog',
            link: '/blog'
        },
        {
            title: 'Create',
            link: '/blog/create-post'
        },
        {
            title: 'Profile',
            link: `/profile/${user && user.id}`
        },
        {
            title: 'Logout',
            link: '/'
        }
    ]

    const guestLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Blog',
            link: '/blog'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        },

    ]

    return loggedIn ? authLinks : guestLinks;
}

export default getNavigation;