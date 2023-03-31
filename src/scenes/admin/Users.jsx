import {  Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import React, { useMemo } from 'react'
import { useState } from 'react'

export const Users = () => {


    const [pageSize, setPageSize] = useState(6);
    const columns =  useMemo( () => [ 
        {field: 'id', headerName: 'Id', width: 50, },
        {field: 'name', headerName: 'Nombre', width: 230, editable: true},
        {field: 'direccion', headerName: 'Direccion', width: 250},
        {field: 'telefono', headerName: 'Telefono',type: 'number',  width: 120},
        {field: 'correo', headerName: 'Correo', width: 200},
        {field: 'acciones', headerName: 'Acciones', width: 100},

    ], []);

    const rows = [
        {id: 1, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 2, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 3, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 4, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 5, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 6, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 7, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 8, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 9, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 10, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
        {id: 11, name: 'Juan Perez Lopez', direccion: 'Calle amate #9',telefono: '7351234569', correo: 'juan@gmail.com', acciones: 'Crear'   },
    ]

  return (
    <Box sx={{ height: 550, width: '90%'}} mt={10}>
        <Typography variant='h6' sx={{textAlign: 'center'
            ,mt: 5, mb:3}} > 
                Lista de usuarios
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
