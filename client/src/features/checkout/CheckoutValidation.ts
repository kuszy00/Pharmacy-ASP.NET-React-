import * as yup from 'yup';

export const validationSchema = [
    yup.object({
        fullName: yup.string().required('Full name is required'),
        address1: yup.string().required('Addres line 1 is required'),
        address2: yup.string().notRequired(),
        city: yup.string().required('City is required'),
        zip: yup.string().required('Zip code is required'),
    }),
    yup.object(),
    yup.object()
]