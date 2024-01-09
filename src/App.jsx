import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Overview from './components/Overview'

function App() {

  return (
      <div style={{width: '100%', height: '100vh', display: 'flex', flex: 1, margin: '0px', padding: '0px', flexDirection: "row"}}>
      <Navbar />
      <div style={{width: "100%", display: 'flex', flexDirection: 'column', flex: 1}}>
      <Header />
      <Overview/>
      </div>
      {/* <Page /> */}
    </div>
  )
}

export default App
