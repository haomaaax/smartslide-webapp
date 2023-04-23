import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateSlidesHandler = async (req, res) => {
    if (req.method === 'POST') {
    try {
        const { topic, ideas, duration } = req.body;

        // Call GPT-3.5-turbo API to generate slides
        const slideContent = await generateSlidesWithGpt35API(topic, ideas, duration);

        res.status(200).json({ slideContent });
    } catch (error) {
        console.error('Error generating slides:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default generateSlidesHandler;

async function generateSlidesWithGpt35API(topic, ideas, duration) {
    // Construct the messages for GPT-3.5-turbo
    try{
    const messages = [
        { role: 'system', content: 'You are a helpful assistant that generates presentation slides.' },
        { role: 'user', content: `Generate a summary and slide content for a presentation about "${topic}" with the main ideas: "${ideas}", to be presented in ${duration} minutes.` },
        { role: 'user', content: `Be sure to have Slide %d: format as delimiter with your output.` },
        { role: 'user', content: `Giving estimate time for each slide and key takeaways to be mentioned in each slides.` },
    ];

    // Call the OpenAI API
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-0301',
        messages: messages,
    });

    // Log the entire response object
    console.log('OpenAI API response:', response.data.choices[0].message);

    // Extract the generated content
    const generatedText = response.data.choices[0].message.content.trim();

    // Parse the generated text into slides
    const slideContent = generatedText.split(/\n\s*Slide \d+:/).slice(1).map((text, index) => {
        const lines = text.trim().split('\n');
        return { title: `Slide ${index + 1}`, content: lines.join(' ') };
    });

    return slideContent;
    } catch (error) {
        console.error('Error in generateSlidesWithGpt35API:', error.message);
        throw error;
    }
}