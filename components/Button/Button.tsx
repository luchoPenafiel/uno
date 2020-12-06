import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';

const StyledButton = styled.button`
  display: block;

  width: 100%;

  padding: 12px;
  margin-bottom: 8px;

  font-size: ${({ variant }) => (variant === 'primary' ? '22px' : '16px')};
  color: ${({ disabled }) => (disabled ? '#a8a8a8' : theme.color.white)};

  background: none;
  appearance: none;
  box-shadow: none;
  border: ${({ variant }) => (variant === 'primary' ? `1px solid ${theme.color.yellow}` : 'none')};
`;

type ButtonTypes = {
  variant?: 'primary' | 'secondary';
  text: string;
  type?: string;
  onClick?: (data?) => void;
  disabled?: boolean;
};

const Button = ({ variant, text, type, onClick, disabled }: ButtonTypes): ReactElement => {
  const handleClic = () => {
    onClick && onClick();
  };

  return (
    <StyledButton variant={variant || 'primary'} type={type || 'text'} onClick={handleClic} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;