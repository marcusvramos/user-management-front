import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = Omit<MuiButtonProps, 'variant'> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  const muiVariant = variant === 'primary' ? 'contained' : 'outlined';
  const color = variant === 'primary' ? 'primary' : 'inherit';

  return (
    <MuiButton variant={muiVariant} color={color} {...rest}>
      {children}
    </MuiButton>
  );
}

export default Button;
