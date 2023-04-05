import React, { useState } from 'react'
import { Stack, Box, Container, Typography } from '@mui/material'
import { Catagory } from '../'
const Main = () => {
    const [newCatagory, setnewCatagory] = useState('New')
    return (
        <Stack>
            <Catagory />
            <Box sx={{ height: '90vh' }}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' fontWeight={'bold'} mb={2} >{newCatagory}<span> vidio </span></Typography>
                    vidio
                </Container>
            </Box>
        </Stack>
    )
}

export default Main;