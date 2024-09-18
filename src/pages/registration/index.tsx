import React, { useState } from "react";

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    institution: "",
    email: "",
    password: "",
    certificate: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        certificate: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Логика отправки формы
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-light p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Регистрация
        </h2>
        <div className="mb-4">
          <label className="block text-primary mb-1">Имя</label>
          <input
            name="firstName"
            type="text"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary mb-1">Фамилия</label>
          <input
            name="lastName"
            type="text"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary mb-1">Должность</label>
          <input
            name="position"
            type="text"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary mb-1">Учреждение</label>
          <input
            name="institution"
            type="text"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary mb-1">Пароль</label>
          <input
            name="password"
            type="password"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary mb-1">
            Загрузить сертификат
          </label>
          <input
            name="certificate"
            type="file"
            className="w-full p-2"
            onChange={handleFileChange}
            accept=".pdf"
          />
        </div>
        <button
          type="submit"
          className="bg-accent text-white w-full py-2 rounded"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Registration;
