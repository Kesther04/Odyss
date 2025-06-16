import logo from "../assets/logo.png";
const Home = () => {
    return (
        <>
            <img src={logo} alt="logo" width={100} />
            <div className="text-2xl font-bold text-center">
                Welcome to Odyss
            </div>
        </>
    );
}

export default Home;