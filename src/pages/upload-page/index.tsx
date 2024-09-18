import React, { useState } from "react";

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(file);
    // Логика отправки файла на сервер
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-light p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Загрузить файл
        </h2>
        <div className="mb-4">
          <label className="block text-primary mb-1">Выберите файл</label>
          <input
            type="file"
            className="w-full p-2"
            onChange={handleFileChange}
            accept=".bdf"
          />
          <p className="text-sm text-gray-500 mt-1">
            Поддерживаемые форматы: BDF
          </p>
        </div>
        <button
          type="submit"
          className="bg-accent text-white w-full py-2 rounded"
        >
          Get Results
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
