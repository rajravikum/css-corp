/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form } from 'formik';
import cn from 'classnames';

const Register = () => {
  const onSubmitRegister = (values) => {
    console.log(values);
  };

  const validateRegister = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email Required...';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password Required...';
    }
    if (!values.name) {
      errors.name = 'Name Required...';
    }
    if (!values.age) {
      errors.age = 'Age Required...';
    }
    
    return errors;
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        gender: '',
        age: '',
      }}
      onSubmit={onSubmitRegister}
      validate={validateRegister}
    >
      {({
        values, handleChange, errors, handleBlur, touched,
      }) => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstname" className="sr-only">
                Name
              </label>
              <input
                id="firstname"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="firstname"
                className={cn(
                  'appearance-none rounded-none relative block w-full mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                  {
                    'border-red-300': touched.name && !!errors.name,
                    'focus:border-red-500': touched.name && !!errors.name,
                  },
                )}
                placeholder="Enter Your First Name"
              />
              {touched.name && !!errors.name && <p>{errors.name}</p>}
            </div>

            <div className="flex px-2 py-2">
              <div>
                <label className="pr-2">
                  <input type="radio" name="gender" value="male" checked />
                  Male
                </label>
                <label className="pr-2">
                  <input type="radio" name="gender" value="female" className="pr-2" />
                  Female
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="Age"
                className={cn(
                  'appearance-none rounded-none relative block w-full mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                  {
                    'border-red-300': touched.age && !!errors.age,
                    'focus:border-red-500': touched.age && !!errors.age,
                  },
                )}
                placeholder="Enter Your Age"
              />
              {touched.age && !!errors.age && <p>{errors.age}</p>}
            </div>

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                className={cn(
                  'appearance-none rounded-none relative block w-full  mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                  {
                    'border-red-300': touched.email && !!errors.email,
                    'focus:border-red-500': touched.email && !!errors.email,
                  },
                )}
                placeholder="Email address"
              />
              {touched.email && !!errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
                className={cn(
                  'appearance-none rounded-none relative block w-full  mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                  {
                    'border-red-300': touched.password && !!errors.password,
                    'focus:border-red-500':
                      touched.password && !!errors.password,
                  },
                )}
                placeholder="Password"
              />
              {touched.password && !!errors.password && (
              <p>{errors.password}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="conditions"
                name="conditions"
                type="checkbox"
                checked={values.conditions}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="conditions"
                className="ml-2 block text-sm text-gray-900"
              >
                Accept the Terms and condtions.
              </label>
            </div>
          </div>  
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              /> */}
              </span>
              Sign Up / Register
            </button>
          </div>
          <a className="group relative w-full flex justify-center mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="/">Login In</a>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
