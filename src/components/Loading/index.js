import React, {} from 'react';
// import * as S from "./styles";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function Loading() {
        return(
        <Box sx={{ width: '100%' }} >
            <LinearProgress />
        </Box>)
}