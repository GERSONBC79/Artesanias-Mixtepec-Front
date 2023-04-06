import { Delete, Edit,  } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

export const UserActions = () => {
  return (
    <Box>
        <IconButton>
            <Edit color='action'/>
        </IconButton>
        <IconButton>
            <Delete color='secondary' />
        </IconButton>
    </Box>
  )
}
