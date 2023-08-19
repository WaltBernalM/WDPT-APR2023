import Button from './components/Button';
import './styles.css'
function App() {
    return (
        <div className="App">
            {/* Navbar  */}
            <nav>
                <img 
                    src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/code-examples/react-logo-round-black.png" 
                    alt="logo" 
                    id="nav-img" />
                <p>Hello React</p>
            </nav>

            {/* Headline  */}
            <div>
                <h2>REACT INTRODUCTION</h2>
            </div>

            {/* Buttons  */}

            <Button/>

            <Button/>

            <Button/>


            {/* Galery  */}

                {/* Img One  */}
                {/* Img Two  */}
                {/* Img Three  */}
                {/* Img Four  */}
        </div>
    )
}

export default App;  // ES6
// module.exports = App  // CommonJS