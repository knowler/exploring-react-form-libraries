import React from 'react';
import styled from '@emotion/styled';

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({space}) => space}rem;
  }
`;

Stack.displayName = 'Stack';

export const Button = styled.button`
  background-color: hsl(165, 100%, 39%);
  color: white;
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.025em;

  transition-duration: 0.3s;
  transition-property: background-color;

  :hover {
    background-color: hsl(165, 100%, 43%);
  }
`;

Button.displayName = 'Button';

export const FieldLabel = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
`;

FieldLabel.displayName = 'FieldLabel';

export const BasicTextField = ({label, message, id, ...props}) => {
  if (label) {
    return (
      <Stack space={0.5}>
        <FieldLabel htmlFor={id || props.name}>{label}</FieldLabel>
        <input id={id || props.name} {...props} />
      </Stack>
    );
  }

  return <input {...props} />;
};

BasicTextField.displayName = 'TextField';
