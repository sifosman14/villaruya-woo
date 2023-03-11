import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (data.success) {
      setStatus('Message sent. We will get back to you shortly!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Message failed to send. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 font-bold text-gray-700"
        >
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        ></textarea>
      </div>

      {status && (
        <div className="mb-4 text-center text-green-600">{status}</div>
      )}

      <button
        type="submit"
        className="w-full py-3 mt-6 font-medium text-white uppercase bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
