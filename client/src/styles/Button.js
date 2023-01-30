import styled from "styled-components";

const COLORS = {
  primary: {

    "--main": "rgba(155,140,152,1)",
    "--accent": "rgba(40,40,55,1)",
  },
  secondary: {
    "--main": "black",
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
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 10px;
  text-decoration:none;
  text-align:center;
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
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;
