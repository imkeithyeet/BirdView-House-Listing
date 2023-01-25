import { useEffect, useState } from "react";

function Listing() {
    const [home, setHome] = useState([]);

    useEffect(() => {
        fetch("/homes")
        .then((r) => r.json())
        .then(setHome);
    }, []);

    return (
        <>
            <div>{home.address}</div>
        </>
    )
}

export default Listing;