import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const SignUp = () => {
    const validate = Yup.object( {
        firstName: Yup.string().max( 20, "Must be 20 Character or less" ).required( 'Required' ),
        lastName: Yup.string().max( 20, "Must be 20 Character or less" ).required( 'Required' ),
        email: Yup.string().max( 40, "Email is Invalid" ).required( 'Email is Required' ),
        password: Yup.string().min( 6, "Password must be at least six character" ).required( 'Password is Required' ),
        conFirmPassword: Yup.string().oneOf( [Yup.ref( 'password' ), null], "Password Must Match" ).required( 'Confirm Password is Required' )
    } )
    return (
        <Formik initialValues={{ firstName: '', lastName: '', email: '', password: '', conFirmPassword: '' }} validationSchema={validate}
            onSubmit={values => {
                console.log( values );
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">
                        Register
                    </h1>

                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignUp;
