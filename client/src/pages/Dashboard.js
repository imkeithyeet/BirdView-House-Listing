import NewHome from "./NewHome"

function Dashboard({ user }) {
    return (
        <>
        <h1>Homes for Sale: </h1>
        <h2>{user.homes.map((home) => home.address)}</h2>
        <h2>Sell your Home: </h2>
        <NewHome user={user} />
        </>
    );
}

export default Dashboard;