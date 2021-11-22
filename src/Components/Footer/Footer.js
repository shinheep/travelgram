import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PostAddIcon from '@mui/icons-material/PostAdd';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';


function Footer() {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ textAlign: 'center' }}>
			<BottomNavigation
				sx={{ backgroundColor: '#F0F3BD' }}
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction
					sx={{ color: '#02C39A' }}
					label='Create Post'
					icon={<PostAddIcon />}
				/>
				<BottomNavigationAction
					sx={{ color: '#02C39A' }}
					label='Home'
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					sx={{ color: '#02C39A' }}
					label='Search'
					icon={<SearchIcon />}
				/>
			</BottomNavigation>
		</Box>
	);
}

export default Footer;
