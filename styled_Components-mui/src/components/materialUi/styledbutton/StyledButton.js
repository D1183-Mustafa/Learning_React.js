import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";

const kendiStilim = makeStyles({
    btn:{
        background:'Linear-gradient(45deg, #FF688B, #FF8E53)',
        border: 0,
        borderRadius: 7,
        color: '#fff',
        padding: '10px 50px',
        marginBottom: '1rem',
        fontSize:"25px"
    },
})

const styledButton = () => {
    const classes = kendiStilim();
    return(
        <Button className={classes.btn}>Kendi Stilimi kullandığım button</Button>
    )
}

export default styledButton;