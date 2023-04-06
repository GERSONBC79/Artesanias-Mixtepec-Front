import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo } from 'react'
import { UserActions } from './UserActions';

export const Products = () => {

    const columns =  useMemo( () => [ 
        {field: 'id', headerName: 'Id', width: 50, },
        {field: 'name', headerName: 'Nombre', width: 180, editable: true},
        {field: 'descripcion', headerName: 'Descripcion', width: 280},
        {field: 'precio', headerName: 'Precio',type: 'number',  width: 80},
        {field: 'cantidad', headerName: 'Cantidad', width: 80},
        {field: 'categoria', headerName: 'Categoria', width: 80},
        {field: 'offer', headerName: 'Descuento', width: 80},
        {field: 'status', headerName: 'Status', width: 100},
        {field: 'imagen', headerName: 'Image', width: 100, renderCell: () => <img style={{width: '50px', height:'50px'}} src={require("../../../assets/img_prueba.jpg")} alt='img' />},
        {field: 'acciones', headerName: 'Acciones', width: 100, renderCell: () => <UserActions />},

    ], []);

    const rows = [
        {id: 1, name: 'Cazuela de barro', descripcion: 'hecha de barro junto con otros materiales', precio: "$150.00", cantidad: 5, categoria: 'Ollas', offer: 0, status: 'disponible', imagen: 'img', acciones: 'crear'},
        {id: 2, name: 'Cazuela de barro', descripcion: 'hecha de barro junto con otros materiales', precio: "$150.00", cantidad: 5, categoria: 'Ollas', offer: 0, status: 'disponible', imagen: 'img', acciones: 'crear'},
        {id: 3, name: 'Cazuela de barro', descripcion: 'hecha de barro junto con otros materiales', precio: "$150.00", cantidad: 5, categoria: 'Ollas', offer: 0, status: 'disponible', imagen: 'img', acciones: 'crear'},
        {id: 4, name: 'Cazuela de barro', descripcion: 'hecha de barro junto con otros materiales', precio: "$150.00", cantidad: 5, categoria: 'Ollas', offer: 0, status: 'disponible', imagen: 'img', acciones: 'crear'},
       
    ]

  return (
    <Box sx={{ height: 550, width: {xs: '92%', sm: '100%'}, }} mt={10}>
    <Typography variant='h6' sx={{textAlign: 'center'
        ,mt: 5, mb:3}} > 
            Lista de productos
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
        checkboxSelection
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
