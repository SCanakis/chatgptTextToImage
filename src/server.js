import 'dotenv/config';


import OpenAI from 'openai';

const openai = new OpenAI();

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req,res) => {
    try {
        const prompt = req.body.prompt;
        // console.log("request recieved")
        const aiResponse = await openai.images.generate({
            model: "dall-e-2",
            prompt: prompt,
            n:1,
            size: '512x512'
        });

        const image = aiResponse.data[0].url;
        res.send({image});
        // console.log("Response sent")
    } catch(error) {
        console.error(error)
        res.status(500).send(error?.reponse.data.error.message || "Something went wrong");
    }
    
});

app.listen(8080, () => console.log("make art on http://localhost:8080/dream"));