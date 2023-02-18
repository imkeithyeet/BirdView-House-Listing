import { useEffect, useState } from "react";
import "../styles/Listing.css"
import { Button, FormField, Error, Input } from "../styles";
import { useHistory } from "react-router-dom";

function UserListing({ user, setUser }) {
    const [showEmail, setShowEmail] = useState({});
    const [home, setHome] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [errors, setErrors] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [ setIsLoading] = useState(false);
    const history = useHistory();
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

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        console.log(errors)
        fetch(`/homes/${id}/photos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image_url: imageUrl,
                description
            }),
            }).then((r) => {
            if (r.status === 201) {
                r.json().then((data) => {
                if(home){
                    setUser({ ...home, photos: [...home.photos, data] });
                    setIsLoading(false);
                }
                });
                history.push("/dashboard");
            } else {
                r.json().then((err) => {
                setErrors(err.errors);
                setIsLoading(false);
                });
            }
            })
            .catch((error) => {
            console.log(error);
            setIsLoading(false);
        });
    }

    const handleDelete = (homeId) => {
        fetch(`/homes/${homeId}`, {
            method: "DELETE",
        })
            .then((res) => {
            if (res.ok) {
                history.push('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error);
            });
        };

    return (
        <>
            {home ? (
            <>
                <h1>{home.address}</h1>
                <img
                className="ListingPic"
                src={
                    (home.photos?.length > 0 &&
                    home.photos[0].image_url) ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                }
                />
                {user && home.offers && home.offers.map((offer, index) => {
                    return (
                        <div className="offers">
                            <h1>Offers:</h1>
                                <h3>${numberWithCommas(offer.amount)}</h3>
                                <h3>Offered By: {offer.user? capitalizeFirstLetter(offer.user.username) : 'Not found'}</h3>
                                <div className="buttons">
                                <Button variant="outline" onClick={()=>setShowEmail({...showEmail, [index]: !showEmail[index]})}>Respond</Button>
                                {showEmail[index] ? <h3>{offer.user.email}</h3> : ""}
                            </div>
                        </div>
                    )
                })}
                <div className="buttons">
                <Button onClick={() =>
                                    setShowForm(!showForm)
                                        } variant="outline" >{showForm ? "Cancel" : "Add Photos"}</Button>
                                    {showForm && (
                                        <form>
                                            <FormField>
                                                <Input
                                                type="text"
                                                placeholder="Image Url..."
                                                value={imageUrl}
                                                onChange={(e) => setImageUrl(e.target.value)}
                                                />
                                            </FormField>
                                            <FormField>
                                                <Input
                                                    type="text"
                                                    value={description}
                                                    placeholder="Photo Description..."
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </FormField>
                                        <Button
                                            variant="outline"
                                            onClick={(e) => handleSubmit(e)}
                                        >
                                            Upload Photo!
                                        </Button>
                                        <FormField>
                                            {errors.map((err) => (
                                            <Error key={err}>{err}</Error>
                                            ))}
                                        </FormField>
                                        </form>
                                    )}
                                <Button variant="outline" onClick={() => handleDelete(home.id)} >Delete This Listing</Button>
                                </div>
            </>
            ) : (
            <div>Loading...</div>
            )}
        </>
    );
}

export default UserListing;
