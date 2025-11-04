import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material/Button';
import { WarningAmberRounded as WarningIcon } from '@mui/icons-material';
import type { ReactNode } from 'react';
import {
  Actions,
  Content,
  Description,
  IconBox,
  StyledDialog,
  Title,
} from './confirm-dialog.styles';

export type ConfirmIntent = 'primary' | 'danger';

export interface ConfirmDialogProps {
  open: boolean;
  title: ReactNode;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  intent?: ConfirmIntent;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ConfirmDialog({
  open,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  intent = 'primary',
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  const color: ButtonProps['color'] = intent === 'danger' ? 'error' : 'primary';

  return (
    <StyledDialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <Title>
        <IconBox>
          <WarningIcon fontSize="small" />
        </IconBox>
        {title}
      </Title>
      {description && (
        <Content>
          <Description variant="body2">{description}</Description>
        </Content>
      )}
      <Actions>
        <Button onClick={onCancel} color="inherit">
          {cancelText}
        </Button>
        <Button onClick={onConfirm} variant="contained" color={color} autoFocus>
          {confirmText}
        </Button>
      </Actions>
    </StyledDialog>
  );
}

export default ConfirmDialog;
