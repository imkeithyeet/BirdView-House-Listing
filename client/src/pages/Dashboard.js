import NewHome from "./NewHome"

function Dashboard({ user }) {
    return (
        <>
        <h1>Homes for Sale: </h1>
            <div>
            {user.homes.map((home) => (
            <li>{home.address}</li>
            ))}
            </div>
        <h2>Sell your Home: </h2>
        <NewHome user={user} />
        </>
    );
}

export default Dashboard;