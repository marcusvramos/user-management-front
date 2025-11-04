import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import ConfirmDialog, { type ConfirmIntent } from '@/components/confirm-dialog/confirm-dialog';

type ConfirmOptions = {
  title: ReactNode;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  intent?: ConfirmIntent;
};

type ConfirmFn = (options: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn | null>(null);

export function ConfirmProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null);

  const confirm = useCallback<ConfirmFn>((opts) => {
    setOptions(opts);
    setOpen(true);
    return new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
    });
  }, []);

  const handleCancel = () => {
    setOpen(false);
    setOptions(null);
    if (resolver) resolver(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    setOptions(null);
    if (resolver) resolver(true);
  };

  const value = useMemo(() => confirm, [confirm]);

  return (
    <ConfirmContext.Provider value={value}>
      {children}
      <ConfirmDialog
        open={open}
        title={options?.title || ''}
        description={options?.description}
        confirmText={options?.confirmText}
        cancelText={options?.cancelText}
        intent={options?.intent}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </ConfirmContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfirm(): ConfirmFn {
  const ctx = useContext(ConfirmContext);
  if (!ctx) throw new Error('useConfirm must be used within ConfirmProvider');
  return ctx;
}

export default ConfirmProvider;
