import React from 'react';
import {useForm, useField} from 'react-form';

import {BasicTextField, Button, Stack} from './components';

const TextField = ({name, label, ...props}) => {
  const {getInputProps} = useField(name, props);

  return <BasicTextField label={label} {...getInputProps()} />;
};

const Form = ({onSubmit, children, ...props}) => {
  const {Form: BaseForm} = useForm({onSubmit, ...props});

  return (
    <BaseForm>
      <Stack space={1}>{children}</Stack>
    </BaseForm>
  );
};

export default {
  title: 'React Form',
  path: '/react-form',
  Component: () => (
    <Form onSubmit={values => console.log(values)}>
      <TextField name="firstName" label="First Name" />
      <TextField name="lastName" label="Last Name" />
      <Button type="submit">Submit</Button>
    </Form>
  ),
};
