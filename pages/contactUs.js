import Layout from '../src/components/layout';
import { useState } from 'react';
import axios from 'axios';
import { HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints';

const ContactUs = ({ headerFooter }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/contact-us', form);
      if (response.status === 200) {
        alert('Your message has been sent!');
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again later.');
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <Layout headerFooter={headerFooter || {}}>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-96 rounded-lg shadow-lg p-8 bg-white">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help you?"
                value={form.subject}
                onChange={handleChange}
                required
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
Message
</label>
<textarea
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="message"
               name="message"
               placeholder="Enter your message here"
               value={form.message}
               onChange={handleChange}
               required
             />
</div>
<div className="flex items-center justify-between">
<button
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="submit"
             >
Submit
</button>
</div>
</form>
</div>
</div>
</Layout>
);
};

export async function getStaticProps() {
const res = await axios.get(HEADER_FOOTER_ENDPOINT);
const headerFooter = res.data;
return { props: { headerFooter } };
}

export default ContactUs;
