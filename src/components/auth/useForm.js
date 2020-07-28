import { useState, useEffect } from 'react';

const useForm = (onSubmit, onVerify, validate) => {
  const [data, setData] = useState({
    email: '',
    pin: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [emailSubmission, setEmailSubmission] = useState(true);
  const [pinSubmission, setPinSubmission] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmission = () => {
    setEmailSubmission(true);
    setPinSubmission(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailSubmission && !pinSubmission) {
      setErrors(validate(data));
      setIsSubmitting(true);
      setEmailSubmission(false);
      setPinSubmission(true);
    }
    if (pinSubmission) {
      setErrors(validate(data));
      setIsVerifying(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmit();
      setIsSubmitting(false);
    }
  }, [errors]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isVerifying) {
      onVerify();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    handleSubmission,
    data,
    errors,
  };
};

export default useForm;
