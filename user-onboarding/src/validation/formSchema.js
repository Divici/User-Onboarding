import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string().trim().required('First Name is required!'),
    email: yup
        .string()
        .email('Entry needs to be a valid email address!')
        .required('You forgot to enter an email address!'),
    password: yup
        .string().trim().required('Password is required!')
        .min(5, 'Password must be a minimum of five(5) characters'),
    termsOfService: yup.boolean(),
})

export default formSchema;