import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const getGeminiResponse = async (prompt, model = "gemini-2.5-flash") => {
  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    return response.text;
  } catch (error) {
    console.error("Gemini request failed:", error);
    return "Something went wrong. Please try again.";
  }
};

export default getGeminiResponse;