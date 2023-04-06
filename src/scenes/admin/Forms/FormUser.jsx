import { CloseOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { shades } from '../../../Theme';

export const FormUser = (props) => {

    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            nombre: '',
            direccion: '',
            numero: '',
            correo_registro: '',
            contrasena_registro: '', 
            contrasena_registro_confirm: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar tu nombre"),
            direccion: Yup.string().required("Debes ingresar tu dirección "),
            numero: Yup.string().required("Debes ingresar tu número de teléfono ").max(10, "Ingresa solo 10 dígitos").min(10, "Ingresa los 10 dígitos de tu número telefónico"),
            correo_registro: Yup.string().required("Debes ingresar tu correo").email("Ingresa un correo válido"),
            contrasena_registro: Yup.string().required("Debes ingresar una contraseña ").min(8, "Tu contraseña debe tener al menos 8 carácteres"),
            contrasena_registro_confirm: Yup.string().required("Debes ingresar una contraseña").oneOf([Yup.ref("contrasena_registro")], "Las contraseñas no coinciden")
        }),
        onSubmit: (data) => {
            console.log(data);
        },
      });

    const style = {
        position: 'absolute',
        top: '15%',
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
        <Typography variant='h5' textAlign='center'> Agregar un nuevo usuario </Typography>
        
        
         <form  onSubmit={handleSubmit}>
        <Grid mt={3} container spacing={3} alignItems='center'>
                            <Grid item xs={12} sm={12} md={6}>

                                <TextField
                                    required
                                    type='text'
                                    label="Nombre completo"
                                    fullWidth
                                    name='nombre'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nombre}
                                    error={touched.nombre && Boolean(errors.nombre)}
                                    helperText={touched.nombre ? errors.nombre : ""}
                                />
                                </Grid>
                                <Grid item  xs={12} sm={12} md={6}>

                                    <TextField
                                        required
                                        type='tel'
                                        label="Número telefónico"
                                        fullWidth
                                        name='numero'
                                        onBlur={handleBlur}
                                        value={values.numero}
                                        onChange={handleChange}
                                        error={touched.numero && Boolean(errors.numero)}
                                        helperText={touched.numero ? errors.numero : ""}
                                        />
                                </Grid>
                            <Grid item  xs={12} sm={12} md={12}>

                                <TextField
                                    required
                                    type='text'
                                    label="Dirección"
                                    fullWidth
                                    name='direccion'
                                    onBlur={handleBlur}
                                    value={values.direccion}
                                    onChange={handleChange}
                                    error={touched.direccion && Boolean(errors.direccion)}
                                    helperText={touched.direccion ? errors.direccion : ""}
                                    />
                            </Grid>

                            

                            <Grid item  xs={12} sm={12} md={12}>

                                <TextField
                                    required
                                    type='email'
                                    label="Correo electrónico"
                                    fullWidth
                                    name='correo_registro'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.correo_registro}
                                    error={touched.correo_registro && Boolean(errors.correo_registro)}
                                    helperText={touched.correo_registro ? errors.correo_registro : ""}
                                    />
                            </Grid>
                            <Grid item  xs={12} sm={12} md={6}>
                                <TextField
                                    required
                                    label="Contraseña"
                                    type="password"
                                    fullWidth
                                    name='contrasena_registro'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contrasena_registro}
                                    error={touched.contrasena_registro && Boolean(errors.contrasena_registro)}
                                    helperText={touched.contrasena_registro ? errors.contrasena_registro : ""}
                                    />
                            </Grid>

                            <Grid item  xs={12} sm={12} md={6}>
                                <TextField
                                    required
                                    label="Confirmar contraseña"
                                    type="password"
                                    fullWidth
                                    name='contrasena_registro_confirm'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contrasena_registro_confirm}
                                    error={touched.contrasena_registro_confirm && Boolean(errors.contrasena_registro_confirm)}
                                    helperText={touched.contrasena_registro_confirm ? errors.contrasena_registro_confirm : ""}
                                    />
                            </Grid>


                        </Grid>

                        <Button type='submit' sx={{ ml: '15%', backgroundColor: shades.primary[400], '&:hover': {backgroundColor: shades.primary[700]}, marginTop: '30px' }} 
                                style={{width: '70%', borderRadius: '8px'}} size='medium' variant='contained' 
                        > Agregar </Button>
        </form>
    </Box>
  )
}
