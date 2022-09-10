import { useState } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return { value, onChange };
};

export default useInput;
