import styled from "styled-components";

const COLORS = {
  primary: {

    "--main": "rgba(155,140,152,1)",
    "--accent": "rgba(40,40,55,1)",
  },
  secondary: {
    "--main": "white",
    "--accent": "white",

    "--main": "black",
    "--accent": "white",
  },
  secondary: {
    "--main": "rgba(177,164,174,1)",
    "--accent": "rgba(40,40,55,1)",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  box-shadow: 2px 2px 2px;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 10px;
  text-decoration:none;
  text-align:center;
  font-family: "Noto-Sans", sans-serif;
`
;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: #d9d9d9;
  color: rgba(40,40,55,1);
  border: 2px solid rgba(40,40,55,1);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;
