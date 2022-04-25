import React from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

export default function Loading() {
        return(
        <Stack sx={{ width: '100%', color: "#ff7d1b" }} >
            <LinearProgress color='inherit'/>
        </Stack>)
}