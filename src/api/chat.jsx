export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: req.body.message,
            model: 'gemini-2.0-flash',
          }),
        });
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to communicate with Gemini API' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  