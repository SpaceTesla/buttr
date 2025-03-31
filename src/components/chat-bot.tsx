// src/components/chat-bot.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import axios from 'axios';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';

const markdownToHtml = async (markdown: string) => {
  const processedContent = await remark().use(html).process(markdown);
  return processedContent.toString();
};

type Message = {
  role: 'user' | 'bot';
  content: string;
  isHtml?: boolean;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: 'Hello! How can I help you with BUTTR sustainable papers today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // WhatsApp number - Replace with your actual WhatsApp business number
  const whatsappNumber = '+919599634566';

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input.trim() };
    const currentInput = input.trim(); // Store the current input

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        '/api/chat',
        {
          message: currentInput,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 30000, // Add timeout to prevent hanging requests
        },
      );

      if (response.status === 200 && response.data) {
        const botResponse =
          response.data.response || "Sorry, I couldn't process that request.";
        const htmlContent = await markdownToHtml(botResponse);

        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            content: htmlContent,
            isHtml: true,
          },
        ]);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: 'Sorry, I encountered an error. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello, I'd like to know more about BUTTR sustainable papers.`,
      '_blank',
    );
  };

  return (
    <>
      {/* Chat Buttons Container */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4">
        {/* WhatsApp Chat Button */}
        <button
          onClick={openWhatsApp}
          className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
          aria-label="Chat on WhatsApp"
          aria-details={'Chat with us on WhatsApp'}
          title={'Chat with us on WhatsApp'}
        >
          <Image
            src={'/socials/whatsapp.svg'}
            width={60}
            height={60}
            alt={'whatsapp'}
          />
        </button>

        {/* AI Chat Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f2f2f] text-white shadow-lg hover:bg-[#4a4a4a]"
          aria-label="Open AI chat"
        >
          <MessageCircle className="h-8 w-8" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-lg bg-white text-sm shadow-xl">
          <div className="flex items-center justify-between bg-buttr-green p-4 text-white">
            <h3 className="text-sm font-medium">BUTTR Chat Assistant</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 text-xs ${
                    message.role === 'user'
                      ? 'bg-buttr-green text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.isHtml ? (
                    <div
                      className="prose prose-sm max-w-none text-xs leading-normal tracking-wide"
                      dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg bg-gray-100 p-3 text-xs text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400 delay-75"></div>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400 delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-xs focus:border-buttr-green focus:outline-none focus:ring-1 focus:ring-buttr-green"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="inline-flex items-center rounded-r-md bg-buttr-green px-4 py-2 text-white disabled:bg-gray-300"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/*<div className="border-t p-3 text-center">*/}
          {/*  <button*/}
          {/*    onClick={openWhatsApp}*/}
          {/*    className="text-xs text-gray-600 hover:text-buttr-green"*/}
          {/*  >*/}
          {/*    Prefer to chat with a human? Connect on WhatsApp*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      )}
    </>
  );
}
