import NewHome from "./NewHome"

function Dashboard({ user, setUser }) {
    return (
        <>
        <h1>Homes for Sale: </h1>
            <div>
            {user.homes.map((home) => (
            <div>
                <img
                    src={home.photos && home.photos.map((photo) => photo && photo.image_url)}
                    alt={home.bio}
                    className="dashListings"
                />
                <li>{home.address}</li>
                </div>
            ))}
            </div>
        <h2>Sell your Home: </h2>
        <NewHome user={user} setUser={setUser} />
        </>
    );
}

export default Dashboard;