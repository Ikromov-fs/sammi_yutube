import React from 'react'
import { Stack } from '@mui/material'
import { catagory } from '../const/const'
const Catagory = () => {
    return (
        <Stack sx={{ height: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between' }} direction={'row'}>
            {catagory.map(item => (
                <button key={item.name} className="catagoriy-btn">
                    <span>{item.name}</span>
                    <span>{item.icon}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Catagory;
