// src/components/faq-item.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
        ) : (
          <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary" />
        )}
      </button>

      {isOpen && (
        <div className="animate-fadeIn mt-2">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
