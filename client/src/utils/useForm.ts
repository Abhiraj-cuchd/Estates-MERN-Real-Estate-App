import React, { useState, ChangeEvent, useCallback } from "react";

interface FormData {
  [key: string]: any;
}

const useForm = () => {
  const [form, setForm] = useState<FormData>({});

  const handleChange = useCallback(
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, type, value } = event.target;

      setForm((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    },
    []
  );

  return {
    form,
    handleChange,
    setForm,
  };
};

export default useForm;
