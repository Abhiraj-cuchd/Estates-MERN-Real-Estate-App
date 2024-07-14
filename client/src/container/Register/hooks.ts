import useForm from "@/utils/useForm";

const useRegister = () => {
  const { form, setForm, handleChange } = useForm();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(form, "form");
    
  }

  return { form, handleChange, handleSubmit };
};

export default useRegister;
