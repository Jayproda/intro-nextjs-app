'use client';

import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState<string>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    console.log('done sending');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
