import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    data,
    errors,
  };
};

export default useForm;
