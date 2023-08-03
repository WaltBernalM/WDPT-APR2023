import "./home.css"

const Home = () => {
  //hook de naviagate 
    return (
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Bienvenido a nuestra AI-administrador de tareas</h1>
          <p className="hero-subtitle">Para que los empleados optimicen su labor hasta en 400%.</p>
          <button
          className="hero-button">Ir al dashboard de administracion</button>
        </div>
      </section>
    );
  };
  
  export default Home;