import { Container, Grid, makeStyles, CardMedia, CircularProgress, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
 name: {
        textTransform: "capitalize"

    }
}))
const Details=({details,quotes})=>{
    const classes=useStyles()
    return(
        <>
        {details === null ?
                        <Grid item xs={12} sm={12} lg={12} md={12} xl={12} container justify='center'>
                            <CircularProgress />
                        </Grid>
                        : <>
                            <Grid item xs={12} sm={12} lg={3} md={3} xl={3} container justify='center'>
                                <img src={details[0].img} width={200} height={200} />
                            </Grid>
                            <Grid item xs={12} sm={12} lg={9} md={9} xl={9}>
                                < Typography variant="h5">
                                    Name :&nbsp;{details[0].name}
                                </Typography>
                                < Typography variant="body1">
                                    Date of Birth :&nbsp;{details[0].birthday}
                                </Typography>
                                < Typography variant="body1">
                                    Occupation :&nbsp;
                                    {details[0].occupation.map(i =>
                                        <>
                                            {i},
                                        </>


                                    )}
                                </Typography>
                                < Typography variant="body1">
                                    Status:&nbsp;{details[0].status}
                                </Typography>
                                {details[0].nickname !== undefined &&
                                    < Typography variant="body1" className={classes.name}>
                                        Nickname:&nbsp;{details[0].nickname}
                                    </Typography>
                                }
                                < Typography variant="body1" className={classes.name}>
                                    Actor:&nbsp;{details[0].portrayed}
                                </Typography>
                                < Typography variant="body1">
                                    Appearance:&nbsp;
                                    {details[0].appearance.map(i =>
                                        <>
                                            Season {i}&nbsp;,
                                        </>


                                    )}

                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
                                < Typography variant="h5" paragraph>
                                    Quotes :
                                </Typography>
                                {quotes === null ?
                                "":
                                    <>
                                    {quotes.length>0?
                                    <>
                                        {quotes.map((i, index) =>
                                            < Typography key={i.quote_id} variant="body1">
                                                &nbsp;{index+1}.&nbsp;{i.quote}
                                            </Typography>
                                        )}
                                        </>
                                        :
                                        < Typography variant="body1" align='center'>
                                               No Quotes Availiable
                                            </Typography>
}

                                    </>
                                }
                            </Grid>
                        </>
                    }
                    </>
    )
}
export default Details