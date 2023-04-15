import openai from 'openai';

openai.apiKey = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { topic, ideas, duration } = req.body;

    try {
      const prompt = `Generate a presentation outline with slides for a ${duration}-minute presentation about "${topic}". The main ideas are: ${ideas}.`;

      const response = await openai.Completion.create({
        engine: 'gpt-3.5-turbo',
        prompt,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      });

      const slideContent = response.choices[0].text.trim();
      res.status(200).json({ slideContent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to generate slides' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}