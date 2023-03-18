import {  AccountCircleOutlined, LockOpenOutlined, LockOutlined } from '@mui/icons-material';
import {  Box, Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react'
import { shades } from '../../Theme';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useFormik } from 'formik';

import * as Yup from "yup"


const Login = () => {
    
  const [Loggeado, setLoggeado] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  /* const { register, handleSubmit, errors } = useForm(); */

 

  const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
    initialValues: {
        nombre: '',
        apellidos: '',
        correo_login: '',
        correo_registro: '',
        contrasena_login: '',
        contrasena_registro: ''
    },
    validationSchema: Yup.object({
        nombre: Yup.string().required("Debes ingresar tu nombre"),
        apellidos: Yup.string().required("Debes ingresar tus apelldios "),
        correo_registro: Yup.string().required("Debes ingresar tu correo").email("Ingresa un correo válido"),
        contrasena_registro: Yup.string().required("Debes ingresar una contraseña válida").min(8, "Tu contraseña debe tener al menos 8 carácteres"),
       
    }),
    onSubmit: (data) => {
        console.log(data);
    },
  });
 


  return (
            <Box style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='920' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1848%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1849)'%3e%3c/rect%3e%3cpath d='M1440 0L950.14 0L1440 278.3z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M950.14 0L1440 278.3L1440 383.61L947.1999999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M947.2 0L1440 383.61L1440 391.67L456.22 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M456.22 0L1440 391.67L1440 433.37L420.42 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L82.1 560L0 299.44z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 299.44L82.1 560L226.13 560L0 138.97z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 138.97000000000003L226.13 560L310.71 560L0 100.55000000000003z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 100.55000000000001L310.71 560L343.88 560L0 100.11000000000001z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1848'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1849'%3e%3cstop stop-color='rgba(156%2c 52%2c 166%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(70%2c 138%2c 223%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e") `,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', height: '100vh', paddingBottom: '140px' }}  >
                
                <Box display='flex' flexDirection='column'height='100vh' >
                    <Box maxHeight="600px"  borderRadius={2} padding="15px" width="350px" 
                        maxWidth="350px" margin="140px auto"   sx={{backgroundColor: "white" }}> 
                    <Typography mt={3} fontWeight='bold'  variant='h3'color={shades.secondary[500]} textAlign="center">
                        {Loggeado ? "Crear cuenta" : "Iniciar sesión"}</Typography>
                    <form  onSubmit={handleSubmit}>
                       

                    {!Loggeado && 
                        <Grid container alignItems={'center'} justifyContent='center' >
                            <Grid item mt={6} paddingBottom={3}>
                                
                                    
                                    <TextField
                                        sx={{ width:'250px'}}
                                        type={'text'}
                                        label="Correo electrónico"
                                        placeholder="Persona@correo.com"
                                        name='correo_login'
                                        onChange={handleChange}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"> <AccountCircleOutlined sx={{color: 'action.active',mr:1  }}  /> </InputAdornment>,
                                          }}
                                        />
                                
                            </Grid>

                            <Grid item display='flex' flexDirection='column'>
                                <Container display='flex'>
                                    
                                    <TextField
                                        sx={{width:'250px', mr: '8px'}}
                                        type={showPassword ? 'text' : 'password'}
                                        label="Contraseña"
                                        name='contrasena_login'
                                        placeholder='**********'
                                        onChange={handleChange}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"> <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            
                                            >
                                            {showPassword ? <LockOpenOutlined /> : <LockOutlined />}
                                        </IconButton> </InputAdornment>,
                                          }}
                                        />
                                </Container>
                                 <Typography  variant='caption' textAlign='right' margin='5px 33px 0 0'> <Link style={{color: shades.primary[700], textDecoration: 'none'}} to={{pathname:"/"}}> ¿Olvidaste tu contraseña?</Link> </Typography>
                              
                            </Grid>

                        </Grid>
                    }

                    { Loggeado &&
                        <Grid mt={3} container display='flex' flexDirection='column' gap={'15px'} alignItems='center'>
                            <Grid item>

                                <TextField
                                    required
                                    type='text'
                                    label="Nombre(s)"
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
                                    label="Apellidos"
                                    sx={{width:'250px'}}
                                    name='apellidos'
                                    onBlur={handleBlur}
                                    value={values.apellidos}
                                    onChange={handleChange}
                                    error={touched.apellidos && Boolean(errors.apellidos)}
                                    helperText={touched.apellidos ? errors.apellidos : ""}
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


                        </Grid>
                        
                        
                    }

                    
                        <Button type='submit' sx={{ ml: '11%', backgroundColor: shades.primary[400], '&:hover': {backgroundColor: shades.primary[700]}, marginTop: '45px' }} 
                                style={{width: '80%', borderRadius: '8px'}} size='medium' variant='contained' 
                        > {Loggeado ? "Crear cuenta" : "Entrar"}</Button>

                        <Typography  textAlign='center' variant='body1' mt={3}> { Loggeado ? "¿Ya tienes una cuenta?" : "¿Aún no te has registrado?"}</Typography>
                        <Button variant='text' sx={{ml: '38%'}} style={{fontWeight: 'bold'}} onClick={() => setLoggeado(!Loggeado)}  >  {Loggeado ? "Iniciar sesión" : "Registrate"}   </Button>
                
                    </form>
                    </Box>
                </Box>
               
            </Box>
  )
}


export default Login;