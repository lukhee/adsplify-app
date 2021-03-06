import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert,Typography,Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name required'),
    phoneNumber: Yup.string().required('Phone number  required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,

    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await register(data.email, data.password, data.fullName, data.phoneNumber);
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', error);
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="fullName" label="Full name" />
        
        </Stack>

        <RHFTextField name="email" label="Email address" />
        <RHFTextField name="phoneNumber" label="Phone number" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
     <Typography  variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>Register As:</Typography>
     <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
     <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Creator
        </LoadingButton>  <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Influencer
        </LoadingButton>
        </Stack>
   
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                   By registering, I agree to &nbsp;
                   <Link underline="always" color="text.primary" href="#">
                     Terms of Service  
                   </Link>
                    and 
                   <Link underline="always" color="text.primary" href="#">
                     Privacy Policy
                   </Link>
                   .
                 </Typography>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Sign Up
        </LoadingButton>

      </Stack>
    </FormProvider>
  );
}
