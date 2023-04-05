// import {} from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import icon from '../../assets/img/icon.png'
import { colors } from '../const/const'
import { Searchbar } from '../'
const Navbar = () => {
    return (
        <Stack direction={'row'} p={2}
            justifyContent={'space-between'} alignItems={'center'}
            sx={{ position: "sticky", top: 0, zIndex: 999, background: colors.yellow }}>
            <NavLink to={'/'}>
                <img src={icon} alt="logo" height={50} />
            </NavLink>
            <Searchbar />
            <Box />
        </Stack>
    )
}

export default Navbar
