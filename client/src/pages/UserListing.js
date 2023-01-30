import { useEffect, useState } from "react";
import "../styles/Listing.css"

function UserListing({ user }) {
    const [showEmail, setShowEmail] = useState({});
    const [home, setHome] = useState([]);
    const id = new URLSearchParams(window.location.search).get('id')

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        fetch(`/homes/${id}`)
        .then((r) => r.json())
        .then(setHome);
    }, []);

    return (
        <>
            {home ? (
            <>
                <h1>{home.address}</h1>
                <img
                className="ListingPic"
                src={home.photos?.length > 0 && home.photos[0].image_url}
                />
                {user && home.offers && home.offers.map((offer, index) => {
                    return (
                        <div className="offers">Offers:
                            <li>${numberWithCommas(offer.amount)}</li>
                            <li>Offered By: {offer.user? capitalizeFirstLetter(offer.user.username) : 'Not found'}</li>
                            <button onClick={()=>setShowEmail({...showEmail, [index]: !showEmail[index]})}>Respond</button>
                            {showEmail[index] ? <div>{offer.user.email}</div> : ""}
                        </div>
                    )
                })}
            </>
            ) : (
            <div>Loading...</div>
            )}
        </>
    );
}

export default UserListing;
