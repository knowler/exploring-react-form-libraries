import React from 'react';
import {Form as BaseForm, useField} from 'informed';
import {Button, Stack, BasicTextField, FieldLabel} from './components';

const TextField = ({name, label, ...props}) => {
  const {fieldState, fieldApi, render, ref, userProps} = useField({
    ...props,
    field: name,
  });

  const {value} = fieldState;
  const {setValue, setTouched} = fieldApi;
  const {onChange, onBlur, ...rest} = userProps;

  return render(
    <Stack space={0.5}>
      <FieldLabel>{label}</FieldLabel>
      <BasicTextField
        {...rest}
        ref={ref}
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={e => {
          setTouched(true);
          if (onBlur) {
            onBlur(e);
          }
        }}
      />
    </Stack>,
  );
};

const Form = ({children, ...props}) => (
  <BaseForm {...props}>
    <Stack space={1}>{children}</Stack>
  </BaseForm>
);

export default {
  title: 'Informed',
  path: '/informed',
  Component: () => (
    <Form onSubmit={values => console.log(values)}>
      <TextField name="firstName" label="First Name" />
      <TextField name="lastName" label="Last Name" />
      <Button type="submit">Submit</Button>
    </Form>
  ),
};
