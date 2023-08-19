// { isLoggedIn: true, "name": "Eduardo", hobbies: ['bet', 'sleep'], object: { name: "Eduardo" } }
const Navbar = ({ isLoggedIn, createRandomPost, sortByTitle }) => {
    // console.log('que son los props en el Navbar: ', props)
    console.log('isLoggedIn: ', isLoggedIn);
    return (
        <div className="nav">
            <a href="/" className="nav-brand">
                AImgur
            </a>
            <div className="nav-menu">
                <ul>
                    {
                        isLoggedIn  ?
                        //
                        <>
                            <li>
                                <button onClick={createRandomPost}> Create Random Post </button>
                            </li>
                            <li>
                                <button onClick={sortByTitle}> Sort by Post title </button>
                            </li>
                            <li>Logout</li> 
                        </> :
                        <>
                            <li>Sign up</li>
                            <li>Login</li>   
                        </>

                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar;