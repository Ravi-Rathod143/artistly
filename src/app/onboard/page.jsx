"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "@/components/Header";

//Validation schema krta he 
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Select a fee range"),
  location: yup.string().required("Location is required"),
});

export default function OnboardForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Register manually for checkboxes
  useEffect(() => {
    register("category");
    register("languages");
  }, [register]);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Congratulation Your Form submitted successfully!");
  };

  const handleCheckboxChange = (name, value) => {
    const values = watch(name) || [];
    if (values.includes(value)) {
      setValue(
        name,
        values.filter((v) => v !== value)
      );
    } else {
      setValue(name, [...values, value]);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-center">Artist Onboarding</h2>

        <input
          className="w-full p-2 border rounded"
          placeholder="Full Name"
          {...register("name")}
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Short Bio"
          {...register("bio")}
        />
        <p className="text-red-500 text-sm">{errors.bio?.message}</p>

        <label className="font-semibold">Categories:</label>
        <div className="flex flex-wrap gap-3">
          {["Singers", "Dancers", "DJs", "Speakers"].map((cat) => (
            <label key={cat} className="flex items-center gap-1">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("category", cat)}
              />
              {cat}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm">{errors.category?.message}</p>

        <label className="font-semibold">Languages:</label>
        <div className="flex flex-wrap gap-3">
          {["English", "Hindi", "Marathi", "Punjabi"].map((lang) => (
            <label key={lang} className="flex items-center gap-1">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("languages", lang)}
              />
              {lang}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm">{errors.languages?.message}</p>

        <select className="w-full p-2 border rounded" {...register("fee")}>
          <option value="">Select Fee Range</option>
          <option value="0-5000">0-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000+">10000+</option>
        </select>
        <p className="text-red-500 text-sm">{errors.fee?.message}</p>

        <input
          className="w-full p-2 border rounded"
          placeholder="City / Location"
          {...register("location")}
        />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>

        <button
          className="bg-purple-600 text-white px-6 py-2 rounded w-full hover:bg-purple-700 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
