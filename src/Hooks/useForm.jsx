import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInput = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.toLowerCase() });
  };

  const clearInput = (e) => {
    e.preventDefault()
    setForm(initialState);
  };

  return { form, onChangeInput, clearInput };
};