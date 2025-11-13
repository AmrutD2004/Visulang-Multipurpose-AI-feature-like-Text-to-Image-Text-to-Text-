import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import OpenAI from 'openai';

const TextToText = () => {
  const [inputstate, setInputstate] = useState({ userinput: '' });
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);

  const token = import.meta.env.VITE_API_KEY; // ✅ Must use VITE_ prefix
  const endpoint = "https://openrouter.ai/api/v1";
  const modelname = "z-ai/glm-4.5-air:free"; // ✅ Removed trailing space

  const client = new OpenAI({
    baseURL: endpoint,
    apiKey: token,
    dangerouslyAllowBrowser: true // ⚠️ Use only for local development
  });

  const handleChange = (e) => {
    setInputstate({ ...inputstate, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutputText('');

    try {
      const response = await client.chat.completions.create({
        model: modelname,
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: inputstate.userinput }
        ],
        temperature: 0.7,
        max_tokens: 512 // ✅ Lower token limit
      });

      setOutputText(response.choices[0].message.content);
    } catch (error) {
      console.error('Text Generation Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[20vh]" />

        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <input
            type="text"
            className="px-3 py-4 w-full border-4 border-neutral-800"
            placeholder="Write text..."
            name="userinput"
            value={inputstate.userinput}
            onChange={handleChange}
          />
          <button className="px-3 py-4 bg-black text-xl font-medium text-white ms-4 rounded">
            Generate
          </button>
        </form>

        {loading && (
          <div className="flex items-center justify-center">
            <h2 className="text-center font-medium text-xl">Loading... please wait</h2>
          </div>
        )}

        {outputText && (
          <div className="mt-6 p-4 border-2 border-neutral-800 rounded">
            <h3 className="font-bold mb-2">AI Response:</h3>
            <p>{outputText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextToText;
