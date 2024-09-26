import React, { useState } from "react";
import { Loading } from "shared/ui/loading";

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showImpulses, setShowImpulses] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(file);
    // Логика отправки файла
  };

  return (
    <div className="min-h-screen flex max-md:flex-col gap-10 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-light/80 p-8 rounded-2xl shadow-deep w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-dark">
          Upload a file
        </h2>
        <div className="mb-6">
          <label className="block text-dark mb-2 font-semibold">
            Сhoose file
          </label>
          <input
            type="file"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-300"
            onChange={handleFileChange}
            accept=".bdf"
          />
          <p className="text-sm text-gray-500 mt-2">Supported formats: BDF</p>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-accent text-white font-semibold rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          onClick={() => setShowImpulses(true)}
        >
          Get Results
        </button>
      </form>
      <div
        className={`rounded-2xl max-w-2xl aspect-square transition-all duration-[2000ms] bg-light/80 flex items-center justify-center ${
          showImpulses ? "w-full scale-1" : "w-0 scale-0"
        }`}
      >
        <Loading className="size-[80px]" color="#3f0f5a" />
      </div>
    </div>
  );
};

export default UploadPage;
