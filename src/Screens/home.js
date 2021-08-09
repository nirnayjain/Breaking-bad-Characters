import { Grid, Typography, Container, CircularProgress, makeStyles, Button, TextField } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ListCard from '../Components/ListCard'
import SearchBar from "material-ui-search-bar";
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: '30px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10px'
        },
    },
    filter: {
        margin: 10
    },
    box: {
        padding: '30px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px'
        },
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '5px',
    }
}))
const Home = ({ setId, setAuthor }) => {
    const classes = useStyles()
    const [lists, setLists] = useState(null)
    const [totalCount, setTotalCount] = useState(null);
    const [category, setCategory] = useState()
    const [query, setQuery] = useState({
        keyword: "",
        category: "",
        offset: 0
    })
    useEffect(() => {
        getTotal()
    }, [])
    useEffect(() => {
        getCharacterTotal()
    }, [query.keyword])
    useEffect(() => {
        getCategoryTotal()
    }, [query.category])
 const baseUrl="https://breakingbadapi.com/api/characters"
    const getTotal = async () => {
        try {
            const response = await axios.get(`${baseUrl}`)
            setTotalCount(Math.ceil(response.data.length / 10));
        }

        catch (err) {
            alert(err)
        }
    }
    const getCharacterTotal = async () => {
        try {
            const response = await axios.get(`${baseUrl}?name=${query.keyword}`)
            setTotalCount(Math.ceil(response.data.length / 10));
        }

        catch (err) {
            alert(err)
        }
    }
    const getCategoryTotal = async () => {
        try {
            const response = await axios.get(`${baseUrl}?category=${query.category}`)
            setTotalCount(Math.ceil(response.data.length / 10));
        }

        catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        getCharacters();

    }, [query]);
    const getCharacters = async () => {
        try {
            const response = await axios.get(`${baseUrl}?name=${query.keyword}&limit=10&offset=${query.offset}&category=${query.category}`)
            setLists(response.data)

        }

        catch (err) {
            alert(err)
        }
    }
    const applyFilter = () => {
        setQuery({ ...query, category: category })
    }



    return (
        <div className={classes.root}>
            <Typography variant='h3' color='text-primary' align='center' paragraph>Breaking Bad</Typography>
            <Container maxWidth="md" className={classes.box} >
                <Grid container spacing={2} justify='center'>
                    {lists === null ?
                        <Grid item xs={12} sm={12} lg={8} md={8} xl={8} container justify='center'>
                            <CircularProgress style={{ marginTop: '100px' }} />
                        </Grid>
                        :
                        <>


                            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} container justify='center' >
                                <SearchBar
                                    placeholder="Search by name..."
                                    value={query.name}
                                    onChange={(newValue) => {
                                        setQuery({
                                            ...query,
                                            keyword: newValue
                                        })
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} md={6} lg={6} sm={12} xl={6} container justify='center' >
                                <TextField
                                    id="category"
                                    vaiant='outlined'
                                    label="Search by Filter"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                                <Button className={classes.filter} color='primary' variant='contained' onClick={applyFilter}>Apply Filter</Button>
                            </Grid>
                            {lists.length > 0 ?
                                <>
                                    <Grid item xs={12} sm={12} lg={12} md={12} xl={12} container spacing={2} style={{ alignItems: 'center' }}  >
                                        {lists.map((item, index) => (
                                            <>

                                                <ListCard {...item} setId={setId} setAuthor={setAuthor} index={index} />
                                            </>
                                        ))}
                                    </Grid>

                                    <Grid item xs={12} sm={12} lg={12} md={12} xl={12} container justify='center' >

                                        <Pagination
                                            style={{ marginTop: '50px', marginBottom: '20px' }}
                                            showFirstButton
                                            showLastButton
                                            count={totalCount}
                                            page={(query.offset) / 10 + 1}
                                            onChange={(e, value) => {
                                                setQuery({
                                                    ...query,
                                                    offset: (value - 1) * 10
                                                })
                                            }}
                                            color="primary" />
                                    </Grid>

                                </>
                                :
                                <Typography variant='h5' align='center' style={{ marginTop: 150 }}>No Character Found</Typography>
                            }
                        </>

                    }
                </Grid>
            </Container>
        </div>


    )
}
export default Home

