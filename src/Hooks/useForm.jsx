import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInput = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearInput = () => {
    setForm(initialState);
  };

  return { form, onChangeInput, clearInput };
};