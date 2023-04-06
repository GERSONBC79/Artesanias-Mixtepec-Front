import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo } from 'react'
import { UserActions } from './UserActions';

export const Category = () => {


    const columns =  useMemo( () => [ 
        {field: 'id', headerName: 'Id', width: 50, },
        {field: 'name', headerName: 'Nombre', width: 180, editable: true},
        {field: 'descripcion', headerName: 'Descripcion', width: 250},
        {field: 'status', headerName: 'Status',  width: 120},
        {field: 'image', headerName: 'Imagen', width: 200,  renderCell: () => <img style={{width: '50px', height:'50px'}} src={require("../../../assets/img_prueba.jpg")} alt='img' />},
        {field: 'acciones', headerName: 'Acciones', width: 200,  renderCell: () => <UserActions />},

    ], []);

    const rows = [
        {id: 1, name: "Ollas", descripcion: 'Olla tamaño mediano para comida ', status: 'Disponible', image: 'img'},
    ]


  return (
    <Box sx={{ height: 550, width: {xs: '90%', sm: '90%', md: '90%', lg: '82%'}}} mt={10}>
        <Typography variant='h6' sx={{textAlign: 'center'
            ,mt: 5, mb:3}} > 
                Lista de categorías
        </Typography>
        <DataGrid columns={columns} rows={rows} 
           pageSizeOptions={[8]}
           initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 8,
                  },
                },
              }}
            
            sx={{ boxShadow: 2, border:2, 
                borderColor: 'primary.light',
                '& .MuiDataGrid-cell:hover': {
                    bgcolor: theme =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[400]
                      : theme.palette.grey[100],}}}
             />

        
    </Box>
  )
}
