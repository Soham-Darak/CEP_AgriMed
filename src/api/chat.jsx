// api/chat.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body; // Get the prompt from the frontend

    try {
      // Make the request to the Gemini API
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': process.env.GEMINI_API_KEY, // Use your Gemini API key
          },
        }
      );

      // Extract the response text from Gemini API
      const reply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No response.';
      
      // Return the reply to the frontend
      return res.status(200).json({ reply });
    } catch (error) {
      console.error('Gemini API Error:', error.response?.data || error.message);
      return res.status(500).json({ error: 'Failed to get response from Gemini API' });
    }
  } else {
    // Return error if method is not POST
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
