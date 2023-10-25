# Installation Open.ai di React

Installasi Open.ai di React
1. Buat project React baru dengan nama react-openai
2. Buka terminal dan arahkan ke folder project yang telah dibuat
3. Install library openai dengan perintah npm install openai --save
4. Buka file App.js dan tambahkan kode berikut:
``` jsx
import React, { useState, useEffect } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
```
5. Buat state untuk menyimpan hasil dari request ke API OpenAI
