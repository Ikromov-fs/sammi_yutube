import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { colors } from '../const/const'
const Searchbar = () => {
    return (
        <Paper component={'form'} sx={{ border: `1px solid ${colors.primaty}`, pl: 2, boxShadow: 'none  ' }} >
            <input type="text" placeholder='search...' className='search-bar' />
            <IconButton>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default Searchbar;