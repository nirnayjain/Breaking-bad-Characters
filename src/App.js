import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Screens/home'
import {useState} from 'react'
import CharacterDetails  from './Screens/characterDetails'
import Nav from './Components/nav'
function App() {
const[id,setId]=useState("")
const[author,setAuthor]=useState("")
 return (
   <>

     <Router>
        <Nav />
    <Switch>
      <Route exact path='/' >
        <Home setId={setId} setAuthor={setAuthor}/>
        </Route>
       <Route path='/details' >
         <CharacterDetails id={id} author={author} />
         </Route>
        </Switch>
 </Router>
 </>

  );
}

export default App;
