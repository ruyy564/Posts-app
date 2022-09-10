import { useState } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return { value, onChange, clear };
};

export default useInput;
