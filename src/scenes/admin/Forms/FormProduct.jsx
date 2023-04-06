import { CloseOutlined } from '@mui/icons-material';
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { shades } from '../../../Theme';

export const FormProduct = (props) => {

    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            nombre: '',
            descripcion: '',
            precio: '',
            cantidad: '',
            categoria: '', 
            offer: '', 
            status: '', 
            image:''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar el nombre del producto"),
            descripcion: Yup.string().required("Debes ingresar una descripcion del producto "),
            precio: Yup.number().required("Debes ingresar el precio del producto "),
            cantidad: Yup.string().required("Debes ingresar el stock del producto"),
            categoria: Yup.string().required("Debes ingresar una categoria "),
            offer: Yup.string().required("Debes ingresar un porcentaje, puede ser 0"),
            status: Yup.string().required("Debes agergar el estatus del producto"),
            image:Yup.mixed().required('Añade una foto del producto') 
        }),
        onSubmit: (data) => {
            console.log(data);
        },
      });

      const style = {
        position: 'absolute',
        top: '10%',
        left: {xs: '10%', sm:'10%', md: '25%', lg: '32%'},
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
        <Typography variant='h5' textAlign='center'> Agregar producto</Typography>
        
        
        <form  onSubmit={handleSubmit}>
            <Grid container mt={3} spacing={3} alignItems='center'>
                            <Grid item xs={12} sm={12} md={6} >

                                <TextField
                                    required
                                    type='text'
                                    label="Nombre del producto"
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
                                    type='number'
                                    label="Precio"
                                    fullWidth
                                    name='precio'
                                    onBlur={handleBlur}
                                    value={values.precio}
                                    onChange={handleChange}
                                    error={touched.precio && Boolean(errors.precio)}
                                    helperText={touched.precio ? errors.precio : ""}
                                    />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}>

                                <TextField
                                    required
                                    type='text'
                                    label="Breve descipción"
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
                            
                            <Grid item xs={12} sm={12} md={6}>
                                <FormControl fullWidth >
                                    <InputLabel >Categoría</InputLabel>
                                    <Select
                                        required
                                        label='Categoria'
                                        name='categoria'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.categoria}
                                        error={touched.categoria && Boolean(errors.categoria)}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    required
                                    label="Cantidad"
                                    type="number"
                                    fullWidth
                                    name='cantidad'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cantidad}
                                    error={touched.cantidad && Boolean(errors.cantidad)}
                                    helperText={touched.cantidad ? errors.cantidad : ""}
                                    />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    required
                                    label="Descuento (%)"
                                    type="number"
                                    fullWidth
                                    name='offer'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.offer}
                                    error={touched.offer && Boolean(errors.offer)}
                                    helperText={touched.offer ? errors.offer : ""}
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
                        > Agregar producto </Button>
        </form>
    </Box>
  )
}
