import { useEffect, useCallback, useState, Dispatch, SetStateAction } from 'react';

export const useToggle = (initValue = false): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [open, setOpen] = useState(initValue);
  const toggle = useCallback(() => {
    setOpen((s) => !s);
  }, []);

  useEffect(() => {
    if (initValue) setOpen(initValue);
  }, [initValue]);

  return [open, toggle, setOpen];
};
