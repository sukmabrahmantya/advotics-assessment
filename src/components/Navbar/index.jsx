import {
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { 
  AccountCircle,
  ExitToApp 
} from "@material-ui/icons";
import AdvoticsIcon from "../../assets/logo-full.png";
import { useStyles } from "./styles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <div className={classes.navHeading}>
            <div className={classes.icon}>
              <img src={AdvoticsIcon} alt="icon" />
            </div>
            <div className={classes.navHeading2}>
              <div className={classes.user}>
                <div className={classes.rootContent}>
                  <div className={classes.details}>
                    <div className={classes.username}>
                      <p>Username</p>
                    </div>
                    <div className={classes.company}>
                      <div>
                        <p>Company Name</p>
                      </div>
                    </div>
                  </div>
                  <AccountCircle className={classes.iconAccount}/>
                </div>
              </div>
              <IconButton aria-label="logout" component="span">
                <ExitToApp className={classes.iconAccount} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
};