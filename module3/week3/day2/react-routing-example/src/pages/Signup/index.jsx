import "./signup.css";
import { useState, useRef } from "react";

function Signup() {
    // hook por cada valor del formulario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  //useRef
  const inputFile = useRef(null);

  //extra image preview
  const [preview, setPreview] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );

  const handleUsername = (valor) => {
    setUsername(valor);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setUsername("");
    setGender("");
  };

  const handleImage = (e) => {
    const objectURL = URL.createObjectURL(e.target.files[0]);
    setPreview(objectURL);
  };
  const uploadImage = () => {
    const target = inputFile.current;
    target.click();
  };
  return (
    <div className="card" id="card">
      <div className="front">
        <p className="login_word">SIGN UP</p>
        <img onClick={uploadImage} src={preview} alt="person profile" />
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="f1"
            maxLength={10}
            required
            autoComplete="off"
            value={username} 
            onChange={(event) => handleUsername(event.target.value)}
          />
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            placeholder="password"
            className="f1"
            maxLength={10}
            required
            autoComplete="off"
            value={password}
          />

          {/* un selector */}
          <select
            className="f1"
            name="gender"
            value={gender}
            onChange={handleGender}
          >
            <option>Choose one</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="other">I prefer not to say</option>
          </select>
          <input
            ref={inputFile}
            type="file"
            className="ocultoEnLasSombras"
            onChange={handleImage}
            /*multiple nos permite subir varios archivos*/
          />
          <button className="f1" name="login">
            Sign up
          </button>
          <p>already you have account</p>
        </form>
      </div>
    </div>
  );
}

export default Signup;