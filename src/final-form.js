import React from 'react';
import {Form as BaseForm, useField} from 'react-final-form';

import {BasicTextField, Button, Stack} from './components';

const asField = Component => {
  const forwardRef = React.forwardRef(({name, ...props}, userRef) => {
    const {input} = useField(name, {
      defaultValue: '',
      ...props,
    });

    return <Component {...input} {...props} />;
  });

  return forwardRef;
};

const TextField = asField(BasicTextField);

const Form = ({children, ...props}) => (
  <BaseForm
    {...props}
    render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <Stack space={1}>{children}</Stack>
      </form>
    )}
  />
);

export default {
  title: 'Final Form',
  path: '/final-form',
  Component: () => (
    <Form onSubmit={values => console.log(values)}>
      <TextField name="firstName" label="First Name" />
      <TextField name="lastName" label="Last Name" />
      <Button type="submit">Submit</Button>
    </Form>
  ),
};
