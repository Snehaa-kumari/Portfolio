import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch('https://getform.io/f/bzywdkva', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      toast.success('Message sent successfully!');
      form.reset();
    } else {
      toast.error('Something went wrong. Try again!');
    }
  };

  return (
    <>
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <Toaster position="top-center" reverseOrder={false} />
        <h1 className='text-3xl font-bold mb-2'>Contact me</h1>
        <span >Please fill out the form below to contact me</span>

        <div className='flex flex-col items-center justify-center mt-10'>
        <form onSubmit={handleSubmit} className='bg-slate-100 w-full max-w-md px-8 py-6 rounded-xl shadow'>
            <h1 className='text-sm font-bold text-center md:text-2xl mt-4 mb-4'>Send Your Message</h1>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Full Name</label>
              <input
                className='shadow rounded-lg py-2 px-2 w-full'
                type="text"
                name="name"
                placeholder='Enter your name'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Email</label>
              <input
                className='shadow rounded-lg py-2 px-2 w-full'
                type="email"
                name="email"
                placeholder='Enter your email'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Phone Number</label>
              <input
                className='shadow rounded-lg py-2 px-2 w-full'
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Message</label>
              <textarea
                className='shadow rounded-lg py-2 px-2 w-full'
                name="message"
                rows="4"
                placeholder='Enter your message'
                required
              />
            </div>

            <button className='text-white bg-black rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 text-xl' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
