import { useState, useEffect, useRef } from "react";

export const useFormNav = valueSearch => {
  const [value, setValue] = useState(valueSearch);

  return [
    value,
    e => {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  ];
};

export function usePrevious(value) {
  const isRef = useRef();
  useEffect(() => {
    isRef.current = value;
  });
  return isRef.current;
}
