import NewHome from "./NewHome"
import '../styles/dashboard.css';

function Dashboard({ user }) {
    return (
        <>
        <h1 className="H1"style={{color: "DarkSlateGray"}}>Homes for Sale: </h1>
        <h2>{user.homes.map((home) => home.address)}</h2>
        <h2 className="H2"style={{color: "DarkSlateGray"}}>Sell your Home: </h2>
        <NewHome user={user} />
        </>
    );
}

export default Dashboard;