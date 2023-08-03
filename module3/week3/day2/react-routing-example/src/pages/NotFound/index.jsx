const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif"
const NotFound = ()=>{
    return (
        <div>
            <h1>404 Not Found</h1>
            <img src={imgURL} alt="404 error" className="notFound" />
        </div>
    )
}

export default NotFound;