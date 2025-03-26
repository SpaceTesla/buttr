// src/components/faq-category.tsx
'use client';

import { FAQItem } from './faq-item';

type FAQ = {
  question: string;
  answer: string;
};

type FAQCategoryProps = {
  title: string;
  faqs: FAQ[];
};

export function FAQCategory({ title, faqs }: FAQCategoryProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold text-primary">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
