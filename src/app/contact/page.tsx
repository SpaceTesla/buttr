import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | BUTTR Sustainable Papers',
  description:
    "Get in touch with BUTTR Sustainable Papers. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-[5.5rem]">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-gray-700">
              We'd love to hear from you. Reach out with questions, feedback, or
              partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">Our Location</h3>
                  <p className="text-gray-700">
                    123 Eco Street, Green Building
                    <br />
                    Sustainable City, SC 98765
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">Email Us</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:hello@buttrpapers.com"
                      className="transition-colors hover:text-primary"
                    >
                      hello@buttrpapers.com
                    </a>
                  </p>
                  <p className="mt-1 text-gray-700">
                    <a
                      href="mailto:support@buttrpapers.com"
                      className="transition-colors hover:text-primary"
                    >
                      support@buttrpapers.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">Call Us</h3>
                  <p className="text-gray-700">
                    <a
                      href="tel:+18005551234"
                      className="transition-colors hover:text-primary"
                    >
                      +1 (800) 555-1234
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative mt-8 h-64 overflow-hidden rounded-lg bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <MapPin className="mr-2 h-8 w-8" />
                <span>Map Location</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Subscribe to our newsletter for sustainable paper tips and
                  updates
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                How can I place a bulk order?
              </h3>
              <p className="text-gray-700">
                For bulk orders, please contact our sales team directly at
                bulk@buttrpapers.com or call +1 (800) 555-1234. We offer special
                pricing and customization options for large volume orders.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Do you ship internationally?
              </h3>
              <p className="text-gray-700">
                Yes, we ship to most countries worldwide. International shipping
                rates and delivery times vary by location. You can calculate
                shipping costs at checkout or contact our customer service team
                for more information.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                What is your return policy?
              </h3>
              <p className="text-gray-700">
                We accept returns within 30 days of purchase for unused products
                in their original packaging. Please note that custom orders and
                bulk purchases may have different return policies. Contact our
                support team for assistance with returns.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                How sustainable is your packaging?
              </h3>
              <p className="text-gray-700">
                All our packaging is made from recycled materials and is either
                recyclable or biodegradable. We use minimal packaging to reduce
                waste and our shipping materials are plastic-free. We're
                constantly working to improve our packaging sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold">Stay Connected</h2>
          <p className="mb-8 text-lg text-gray-700">
            Subscribe to our newsletter for sustainable paper tips, new product
            announcements, and exclusive offers.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
