import * as React from 'react';
// import {
//   Flex,
//   Container,
//   Stack,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Link,
//   Button,
//   Icon,
//   Spinner,
//   useBoolean,
// } from '@chakra-ui/react';
// import { FcGoogle } from 'react-icons/fc';
// import { useButtonSize } from 'src/app/hooks';
// import { useForm } from 'react-hook-form';
// import { ToastConfig } from 'src/app/config';
// import {
//   signInWithEmailPassword,
//   signInWithGoogle,
// } from 'src/app/service/Auth';
// import { toast } from 'react-toastify';
// import { parseFirebaseAuthError } from 'src/utils/';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { globalActions } from 'src/app/globalSlice';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

// export function LoginForm() {
//   const buttonSize = useButtonSize();
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm<LoginFormData>();
//   const [isLoginPending, setIsLoginPending] = useBoolean();
//   const [isGoogleLoginPending, setIsGoogleLoginPending] = useBoolean();
//   const dispatch = useDispatch();

//   const signInGoogle = async () => {
//     setIsGoogleLoginPending.on();
//     try {
//       await signInWithGoogle();
//       setIsGoogleLoginPending.off();
//       navigate('/profile');
//       return;
//     } catch (error) {
//       toast.dismiss();
//       const err = parseFirebaseAuthError(error);
//       toast.error(err.message, ToastConfig);
//       setIsGoogleLoginPending.off();
//       return;
//     }
//   };

//   const onSubmit = async (data: LoginFormData) => {
//     setIsLoginPending.on();
//     try {
//       const credential = await signInWithEmailPassword(
//         data.email,
//         data.password,
//       );
//       dispatch(globalActions.setUserProfile(credential.user));
//       setIsLoginPending.off();
//       navigate('/profile');
//     } catch (error) {
//       const err = parseFirebaseAuthError(error);
//       console.log(err);
//       toast.dismiss();
//       toast.error(err.message, ToastConfig);
//       setIsLoginPending.off();
//     }
//   };

//   return (
//     <Container
//       maxW="md"
//       bgColor="gray.400"
//       borderRadius="20px"
//       py={10}
//       px={10}
//       zIndex={2}
//     >
//       <Text textStyle="appTitle" textAlign="center" textTransform="uppercase">
//         Login
//       </Text>
//       <Stack mt={10} gap={2}>
//         <FormControl>
//           <FormLabel
//             textStyle="appNormal"
//             htmlFor="email"
//             fontFamily="Acrom-Bold"
//           >
//             Email
//           </FormLabel>
//           <Input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             bgColor="gray.500"
//             color="white"
//             _focus={{
//               borderColor: 'greenBlur.100',
//             }}
//             _placeholder={{
//               color: 'white.100',
//             }}
//             {...register('email', {})}
//           />
//         </FormControl>
//         <FormControl>
//           <FormLabel
//             textStyle="appNormal"
//             htmlFor="Password"
//             fontFamily="Acrom-Bold"
//           >
//             Password
//           </FormLabel>
//           <Input
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             bgColor="gray.500"
//             color="white"
//             _focus={{
//               borderColor: 'greenBlur.100',
//             }}
//             _placeholder={{
//               color: 'white.100',
//             }}
//             {...register('password', {})}
//           />
//         </FormControl>
//       </Stack>
//       <Stack mt={4}>
//         <Flex justifyContent="flex-end">
//           <Link href="reset-password" color="white.100">
//             Forgot password?
//           </Link>
//         </Flex>
//       </Stack>
//       <Stack mt={10} justifyContent="center" gap={2}>
//         <Button
//           width="100%"
//           variant="solid"
//           size={buttonSize}
//           onClick={handleSubmit(onSubmit)}
//           disabled={isLoginPending || isGoogleLoginPending}
//           rightIcon={
//             isLoginPending ? <Spinner size="sm" color="white" /> : undefined
//           }
//           opacity={isLoginPending ? 0.6 : 1}
//         >
//           Log In
//         </Button>
//         <Text
//           textStyle="appNormal"
//           color="whiteBlur.200"
//           textAlign="center"
//           fontSize={{ base: '12px', lg: '14px' }}
//         >
//           OR
//         </Text>
//         <Button
//           leftIcon={<Icon as={FcGoogle} />}
//           rightIcon={
//             isGoogleLoginPending ? (
//               <Spinner size="sm" color="white" />
//             ) : undefined
//           }
//           variant="outline"
//           size={buttonSize}
//           onClick={signInGoogle}
//           disabled={isLoginPending || isGoogleLoginPending}
//           opacity={isLoginPending ? 0.6 : 1}
//         >
//           Continue with Google
//         </Button>
//       </Stack>
//       <Stack mt={6}>
//         <Text
//           textStyle="appNormal"
//           color="whiteBlur.200"
//           textAlign="center"
//           fontSize={{ base: '12px', lg: '14px' }}
//         >
//           Don't have an account?{' '}
//           <Link href="/signup" color="green.200">
//             Sign up
//           </Link>
//         </Text>
//       </Stack>
//     </Container>
//   );
// }
