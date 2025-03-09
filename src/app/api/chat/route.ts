// src/app/api/chat/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { getButtrData } from '@/utils/markdown-loader';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key is not configured' },
        { status: 500 },
      );
    }

    // Load BUTTR data from markdown
    const buttrData = getButtrData();

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

    // Enhanced system context with actual BUTTR data
    const systemContext = `
          You are a helpful customer service chatbot for BUTTR, a sustainable paper products company.
          
          Here is the official BUTTR product and company information:
          
          ${buttrData}
          
          Use this information to answer customer questions accurately.
          Be helpful, friendly, and knowledgeable about sustainability and paper products.
          Keep responses concise and focused on helping customers.
          If asked about information not contained in this data, politely indicate that you don't have that specific information.
        `;

    const result = await model.generateContent([systemContext, message]);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error('Gemini API error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 },
    );
  }
}
