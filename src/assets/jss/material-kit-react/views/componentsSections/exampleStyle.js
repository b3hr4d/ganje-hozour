import { containerFluid } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "50px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important",
  },
  paddingContain: {
    ...containerFluid,
    textAlign: "center !important",
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  },
  reactPlayer: {
    width: '100%',
    marginBottom: '-10px'
  },
  titr: {
    textAlign: "left",
    marginLeft: '20px',
    fontWeight: "bolder",
    marginBottom: '40px'
  }
};

export default exampleStyle;
