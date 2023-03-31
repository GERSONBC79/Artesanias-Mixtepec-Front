import { CloseOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { shades } from '../../../Theme';

export const FormUser = () => {

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
        left: {xs: '10%', sm:'28%', md: '35%', lg: '40%'},
        width: 400,
        maxHeight: "850px",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <Box sx={style}>
        <Typography variant='h5' textAlign='center'> Agregar un nuevo usuario </Typography>

        
        
         <form  onSubmit={handleSubmit}>
        <Grid mt={3} container display='flex' flexDirection='column' gap={'10px'} alignItems='center'>
                            <Grid item>

                                <TextField
                                    required
                                    type='text'
                                    label="Nombre completo"
                                    sx={{width:'250px'}}
                                    name='nombre'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nombre}
                                    error={touched.nombre && Boolean(errors.nombre)}
                                    helperText={touched.nombre ? errors.nombre : ""}
                                />
                                </Grid>
                            <Grid item>

                                <TextField
                                    required
                                    type='text'
                                    label="Dirección"
                                    sx={{width:'250px'}}
                                    name='direccion'
                                    onBlur={handleBlur}
                                    value={values.direccion}
                                    onChange={handleChange}
                                    error={touched.direccion && Boolean(errors.direccion)}
                                    helperText={touched.direccion ? errors.direccion : ""}
                                    />
                            </Grid>

                            <Grid item>

                                <TextField
                                    required
                                    type='tel'
                                    label="Número telefónco"
                                    sx={{width:'250px'}}
                                    name='numero'
                                    onBlur={handleBlur}
                                    value={values.numero}
                                    onChange={handleChange}
                                    error={touched.numero && Boolean(errors.numero)}
                                    helperText={touched.numero ? errors.numero : ""}
                                    />
                            </Grid>
                            

                            <Grid item>

                                <TextField
                                    required
                                    type='email'
                                    label="Correo electrónico"
                                    sx={{width:'250px'}}
                                    name='correo_registro'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.correo_registro}
                                    error={touched.correo_registro && Boolean(errors.correo_registro)}
                                    helperText={touched.correo_registro ? errors.correo_registro : ""}
                                    />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    label="Contraseña"
                                    type="password"
                                    sx={{width:'250px'}}
                                    name='contrasena_registro'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contrasena_registro}
                                    error={touched.contrasena_registro && Boolean(errors.contrasena_registro)}
                                    helperText={touched.contrasena_registro ? errors.contrasena_registro : ""}
                                    />
                            </Grid>

                            <Grid item>
                                <TextField
                                    required
                                    label="Confirmar contraseña"
                                    type="password"
                                    sx={{width:'250px'}}
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
