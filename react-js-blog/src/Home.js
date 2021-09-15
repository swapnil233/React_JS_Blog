const Home = () => {

    const handleClick = (name) => {
        console.log("sfsdnjfnsdf" + name)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {/* Onclick wrapped in {} because its taking in a dynamic value. Dyn value calls an anon func that calls handleClick. Need to do it this way to pass in params. */}
            <button onClick = {() => handleClick("all")}>Click</button>
        </div>
     );
}
 
export default Home;