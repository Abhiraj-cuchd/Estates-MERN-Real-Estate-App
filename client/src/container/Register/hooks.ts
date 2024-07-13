import useForm from "@/utils/useForm";

const useRegister = () => {
  const { form, setForm, handleChange } = useForm();

  return { form, handleChange };
};

export default useRegister;
