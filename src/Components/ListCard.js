import { Grid, Typography, Container, Avatar, makeStyles, Card } from '@material-ui/core'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
        transition: "transform 0.20s ease-in-out",
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '0.8rem',
        position: 'relative',
        cursor:'pointer',
        [theme.breakpoints.down('sm')]: {
            padding: '5px'
        },
    },
    cardHovered: {
        transform: "scale3d(1.09, 1.09, 1)",
    },
    
    link:{
        textDecoration: "none"
    },
    large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))
const List = ({ setId, setAuthor, img, name, occupation,birthday,status,char_id,index}) => {
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    });
    const classes = useStyles()
    const setDetails = (charId, name) => {

        setId(charId);
        setAuthor(name)

    }
    return (
        <Grid item xs={12} sm={12} lg={12} xl={12} md={12} className={classes.gridBox}>
             
            <Link to="/details" className={classes.link}>
            <Card
                onClick={()=>setDetails(char_id,name)}
                className={classes.root}
                classes={{ root: state.raised ? classes.cardHovered : "" }}
                onMouseOver={() => setState({ raised: true, shadow: 3 })}
                onMouseOut={() => setState({ raised: false, shadow: 1 })}
                raised={state.raised}
                zdepth={state.shadow}>
                <Grid container spacing={2}>
                    <Grid item xs={3} sm={3} md={1} lg={1} xl={1} container alignItems='center'>
                        <Avatar src={img} className={classes.large} />
                    </Grid>
                    <Grid item xs={9} sm={9} md={11} lg={11} xl={11} container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Typography variant='body1'>Name : &nbsp;{name}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Typography variant='body1' >Occupation :
                                {occupation.map(i =>
                                    <>
                                        {i},
                                    </>
                                )}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Typography variant='body1'>Date of Birth : &nbsp;{birthday}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Typography variant='body1'>Status : &nbsp;{status}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            </Link>
        </Grid >
    )
}
export default List;