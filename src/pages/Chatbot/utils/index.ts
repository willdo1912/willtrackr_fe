import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY!)

export const runGemini: any = async (prompt: string, setResponse: (response: string) => void) => {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
  model
    .generateContent(prompt)
    .then(result => result.response)
    .then(response => {
      console.log(response.text())
      setResponse(response.text())
    })
}
