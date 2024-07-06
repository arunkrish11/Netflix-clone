import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import {originals, trending,actions,romance ,comedy, horror, document} from './urls'
import Banner from './Components/Banner/Banner'
import RowPoster from './Components/RowPoster/RowPoster'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      {/* Reusing the Component */}
      <RowPoster title="NETFLIX ORIGINALS" url={originals} />
      <RowPoster isSmall title="TRENDING" url={trending} />
      <RowPoster isSmall title="ACTION" url={actions} />
      <RowPoster isSmall title="ROMANCE" url={romance} />
      <RowPoster isSmall title="COMEDY" url={comedy} />
      <RowPoster isSmall title="HORROR" url={horror}/>
      <RowPoster isSmall title="DOCUMENTARY" url={document}/>

    </div>
  )
}

export default App
