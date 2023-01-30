import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewHome({ user, setUser }) {
  const [address, setAddress] = useState("My Awesome Home");
  const [price, setPrice] = useState("250000");
  const [bio, setBio] = useState(`Some facts about my Home`);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/homes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
        price,
        bio
      }),
    }).then((r) => {
      if (r.status === 201) {
        r.json().then((data) => {
          if(user){
            setUser({ ...user, homes: [...user.homes, data] });
            history.push("/dashboard");
            setIsLoading(false);
          }
        });
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

  return (
    <Wrapper>
      <WrapperChild>
        <h2>List your Home</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="bio">About</Label>
            <Textarea
              id="bio"
              rows="10"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button variant="outline" type="submit">
              {isLoading ? "Loading..." : "Submit Listing"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{address}</h1>
        <p>
          <em>Asking: ${numberWithCommas(price)}</em>
          &nbsp;·&nbsp;
          <cite>Listed by: {user.username && capitalizeFirstLetter(user.username)}</cite>
        </p>
        <ReactMarkdown>{bio}</ReactMarkdown>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewHome;
