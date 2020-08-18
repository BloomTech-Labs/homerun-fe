import { useState, useEffect } from 'react';

const useForm = (onSubmit, inviteValidation) => {
  const [data, setData] = useState([{
    email: 'member.email',
    permissionLevel: '',
  }]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(inviteValidation(data));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmit();
      setIsSubmitting(false);
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
