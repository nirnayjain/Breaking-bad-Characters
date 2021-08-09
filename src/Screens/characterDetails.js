import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Details from '../Components/Details'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '30px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10px'
        },
        minHeight: '100vh',

    },
    box: {
        padding: '30px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px'
        },
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '0.8rem',

    },
}))
const CharacterDetails = ({ id, author }) => {
    const classes = useStyles();
    const [details, setDetails] = useState(null)
    const [quotes, setQuotes] = useState(null)
    useEffect(() => {
        getCharacterById()
        getQuotesByCharacter()
    }, [])

const baseUrl="https://breakingbadapi.com/api/characters"
    const getCharacterById = async () => {
        const response = await axios.get(`${baseUrl}/${id}`)
        setDetails(response.data)

    }
    const getQuotesByCharacter = async () => {
        const response = await axios.get(`https://breakingbadapi.com/api/quote?author=${author}`)
        setQuotes(response.data)
    }

    return (
        <div className={classes.root}>
            {details === null ?
                "" :
                <Typography variant='h3' color='text-primary' align='center' paragraph>{details[0].name}</Typography>
            }
            <Container maxWidth='md' className={classes.box}>

                <Grid container spacing={2}>
                    <Details details={details} quotes={quotes} />
                </Grid>

            </Container>
        </div>
    )
}
export default CharacterDetails