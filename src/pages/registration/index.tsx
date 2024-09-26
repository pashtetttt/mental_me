import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration: React.FC = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-light/80 p-8 rounded-2xl shadow-deep w-full max-w-4xl max-md:max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-dark">
          Registration
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 items-center">
          <div className="mb-6">
            <label className="block text-dark mb-2 font-semibold">Name</label>
            <input
              name="firstName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-dark mb-2 font-semibold">
              Surname
            </label>
            <input
              name="lastName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-dark mb-2 font-semibold">Post</label>
            <input
              name="position"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-dark mb-2 font-semibold">
              Institution
            </label>
            <input
              name="institution"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-dark mb-2 font-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-dark mb-2 font-semibold">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-dark mb-2 font-semibold">
              Upload the certificate
            </label>
            <input
              name="certificate"
              type="file"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
              onChange={handleFileChange}
              accept=".pdf"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-accent h-11 text-white font-semibold rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            onClick={() => navigate("/upload-page")}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
