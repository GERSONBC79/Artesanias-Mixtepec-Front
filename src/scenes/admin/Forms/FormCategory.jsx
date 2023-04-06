import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { shades } from '../../../Theme';
import { CloseOutlined } from '@mui/icons-material';

export const FormCategory = (props) => {

    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            nombre: '',
            descripcion: '',
            status: '', 
            image:''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar el nombre de la cetgoría"),
            descripcion: Yup.string().required("Debes ingresar una descripcion de la categoría "),
            status: Yup.string().required("Debes agergar el estatus de la categoría"),
            image:Yup.mixed().required('Añade una foto de la categoría') 
        }),
        onSubmit: (data) => {
            console.log(data);
        },
      });

      const style = {
        position: 'absolute',
        top: '10%',
        left: {xs: '6%', sm:'10%', md: '25%', lg: '32%'},
        width: {xs: 450, sm: 550, md: 600},
        maxHeight: "850px",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <Box sx={style}>
    <IconButton  onClick={() => props.handleCloseModal() } size='large' sx={{float: 'right', top: '-25px', padding: '0 0', left: '20px'}} >
        <CloseOutlined  color='warning'/>
    </IconButton>
    <Typography variant='h5' textAlign='center'> Agregar categoría</Typography>
    
    
    <form  onSubmit={handleSubmit}>
        <Grid container mt={3} spacing={3} alignItems='center'>
                        <Grid item xs={12} sm={12} md={6} >

                            <TextField
                                required
                                type='text'
                                label="Nombre de la categoría"
                                fullWidth
                                name='nombre'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nombre}
                                error={touched.nombre && Boolean(errors.nombre)}
                                helperText={touched.nombre ? errors.nombre : ""}
                            />
                            </Grid>


                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                required
                                label="Status"
                                type="text"
                                fullWidth
                                name='status'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                                error={touched.status && Boolean(errors.status)}
                                helperText={touched.status ? errors.status : ""}
                                />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>

                            <TextField
                                required
                                type='text'
                                label="Breve descipción de la categoría"
                                fullWidth 
                                multiline
                                rows={3}
                                name='descripcion'
                                onBlur={handleBlur}
                                value={values.descripcion}
                                onChange={handleChange}
                                error={touched.descripcion && Boolean(errors.descripcion)}
                                helperText={touched.descripcion ? errors.descripcion : ""}
                                />
                        </Grid>
                        
                        


                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                required
                                label="Imagen"
                                type="file"
                                fullWidth
                                name='image'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.image}
                                error={touched.image && Boolean(errors.image)}
                                helperText={touched.image ? errors.image : ""}
                                />
                        </Grid>


                    </Grid>

                    <Button type='submit' sx={{ ml: '15%', backgroundColor: shades.primary[400], '&:hover': {backgroundColor: shades.primary[700]}, marginTop: '30px' }} 
                            style={{width: '70%', borderRadius: '8px'}} size='medium' variant='contained' 
                    > Agregar categoría </Button>
    </form>
</Box>
  )
}
