import { withStyles } from "@material-ui/styles";
import { InputBase } from "@material-ui/core";

const CustomInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid #ced4da",
    fontSize: 12,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      backgroundColor: "white",
      borderColor: "none",
      boxShadow: "none",
    },
  },
}))(InputBase);

export default CustomInput;
