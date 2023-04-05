import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Main, Chanell, Vidio, Search, Navbar } from '../'
const App = () => {
    return <Box>
        <Navbar />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Chanell/:id' element={<Chanell />} />
            <Route path='/Vidio/:id' element={<Vidio />} />
            <Route path='/Search/:id' element={<Search />} />
        </Routes>   
    </Box>

}

export default App
