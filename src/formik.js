import React from 'react';
import {Formik, Form as BaseForm, useField} from 'formik';

import {BasicTextField, Button, FieldLabel, Stack} from './components';

const TextField = ({label, ...props}) => {
  const [field] = useField(props);

  return (
    <Stack space={0.5}>
      <FieldLabel>{label}</FieldLabel>
      <BasicTextField {...field} {...props} />
    </Stack>
  );
};

const Form = ({onSubmit, initialValues, children}) => (
  <Formik onSubmit={onSubmit} initialValues={initialValues}>
    <BaseForm>
      <Stack space={1}>{children}</Stack>
    </BaseForm>
  </Formik>
);

export default {
  title: 'Formik',
  path: '/formik',
  Component: () => (
    <Form
      onSubmit={values => console.log(values)}
      initialValues={{firstName: '', lastName: ''}}
    >
      <TextField name="firstName" label="First Name" />
      <TextField name="lastName" label="Last Name" />
      <Button type="submit">Submit</Button>
    </Form>
  ),
};
