import React, { useEffect,useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../General/loader'
import { allplayersaction } from '../../Actions/buyerloginaction'
import PlayerCard from '../General/PlayerCard';
import PagePagination from '../General/PagePagination'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
const useStyles = makeStyles((theme) => ({

    root: {
        paddingBottom: 10,
        marginTop: 40,
        paddingLeft: 10,
        paddingRight:10
    },


}));

const Homescreen = () => {
    const buyerloginreducer = useSelector(state => state.buyerloginreducer);
    const { userinfo } = buyerloginreducer;
    let [filter, setfilter] = useState("");
    const allplayerreducer = useSelector(state => state.allplayerreducer);
    let { playerslist } = allplayerreducer;
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(allplayersaction());
         
    },[])
    const classes = useStyles();
    let loading = false;
     const [currentPage, setCurrentPage] = useState(1);
    const [CardsPerPage] = useState(8);
    const paginate = pageNumber => setCurrentPage(pageNumber);
     const indexOfLastCard = currentPage * CardsPerPage;
     const indexOfFirstCard = indexOfLastCard - CardsPerPage;
     const currentplayers = playerslist && playerslist.slice(indexOfFirstCard, indexOfLastCard);
    
     
    
    const handleChange = (event) => {
        console.log(playerslist);
             event.preventDefault();
             console.log(event.target.value);
             if (event.target.value == "batsman") {
                 console.log(event.target.value);
                 setfilter(event.target.value);
                playerslist = playerslist.filter((player) => player.Category == "batsman");
            
             } else if (event.target.value == "bowler") {
                  setfilter(event.target.value);
            playerslist = playerslist.filter((player) => player.Category == "bowler");
            
             } else if (event.target.value == "sold") {
                  setfilter(event.target.value);
            playerslist = playerslist.filter((player) => player.sold == false);
           
             } else if (event.target.value == "average") {
                  setfilter(event.target.value);
            playerslist= playerslist.filter((player) => player.average>30);
            
        }
     }
     


    return (
        <>

       
            {loading ? (<Loader></Loader>) : (
                
                

                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    spacing={3}
                >
                  
                    <div className={classes.root}>
                        <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Fil</InputLabel>
                         <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                          value={filter}
                          label="Filters"
                          onChange={handleChange}
                        >
                       <MenuItem value={"batsman"}>Batsman</MenuItem>
                       <MenuItem value={"bowler"}>Bowler</MenuItem>
                        <MenuItem value={"sold"}>Availablity</MenuItem>
                        <MenuItem value={"average"}>Average</MenuItem>       
                     </Select>
                   </FormControl>
                   </Box>
                    </div>
                 
                    {currentplayers && currentplayers.map((player) => (
                        <Grid className={classes.root} item xs={12} sm={6} md={3} lg={3} xl={3} key={player._id}>

                            <div key={player._id}>
                                <PlayerCard player={player}></PlayerCard>
                            </div>
                       
                        </Grid>
                    ))}
                   
                    <Grid >
                        <PagePagination
                            CardsPerPage={CardsPerPage}
                            totalPosts={playerslist&&playerslist.length}
                           paginate={paginate}
                         />
                    </Grid>


                </Grid>

            )}




        </>

    )
}

export default Homescreen