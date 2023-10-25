Code yang digunakan:
``` jsx
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "system",
      "content": "You will be provided with a sentence in English, and your task is to translate it into Indonesia."
    },
    {
      "role": "user",
      "content": "My name is Jane. What is yours?"
    },
    {
      "role": "assistant",
      "content": "Nama saya Jane. Siapa namamu?"
    }
  ],
  temperature: 0,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
```
Dari kodingan tersebut sistem akan menerjemahkan kalimat yang akan diberikan dari bahasa Inggris ke bahasa Indonesia.Selain itu kita dapat melihat bahwa kita dapat mengatur beberapa parameter seperti model, messages, temperature, max_tokens, top_p, frequency_penalty, dan presence_penalty.