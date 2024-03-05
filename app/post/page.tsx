"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    class: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    // Add your logic for form submission here
  };

  return (
    <main className='flex min-h-screen flex-col items-center bg-white justify-between p-24'>
      <div className='container mx-auto py-10'>
        <form
          onSubmit={handleSubmit}
          className='max-w-lg mx-auto'
        >
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='age'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Age:
            </label>
            <input
              type='text'
              id='age'
              name='age'
              value={formData.age}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your age'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='class'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Class:
            </label>
            <input
              type='text'
              id='class'
              name='class'
              value={formData.class}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your class'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
