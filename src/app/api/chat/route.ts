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
  
  Here is the official BUTTR company information:
  
  ${buttrData}
  
  Use this information to answer customer questions accurately.
  Be helpful, friendly, and knowledgeable about sustainability and paper products.
  Keep responses concise (under 150 words) and focused on helping customers.
  If asked about information not contained in this data, politely indicate you don't have that specific information but still provide a helpful response.
  
  For questions not directly about BUTTR:
  - Demonstrate knowledge about paper production's environmental impact (deforestation, water usage, energy consumption, pollution)
  - Explain why recycled paper is better (reduces landfill waste, saves trees, uses less water and energy)
  - Share basic environmental facts related to paper industry
  - Always circle back to how BUTTR's sustainable approach helps address these issues
  
  Highlight BUTTR's commitment to sustainability and tree-free paper products whenever possible.
`;

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: systemContext }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error('Gemini API error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 },
    );
  }
}
