import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | BUTTR Sustainable Papers',
  description:
    "Get in touch with BUTTR Sustainable Papers. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-[5rem]">
      {/* Hero Section */}
      <section className="bg-buttr-green/10 py-12">
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
                    Ground Floor, Galli No. 3, Nagli Nagla Village,
                    <br />
                    Sector – 134, Noida, Gautam Buddha Nagar,
                    <br />
                    Uttar Pradesh, India – 201 304
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
                      href="mailto:hello@buttrpaper.com"
                      className="transition-colors hover:text-primary"
                    >
                      hello@buttrpaper.com
                    </a>
                  </p>
                  <p className="mt-1 text-gray-700">
                    <a
                      href="mailto:support@buttrpaper.com"
                      className="transition-colors hover:text-primary"
                    >
                      support@buttrpaper.com
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
                      href="tel:+919599634566"
                      className="transition-colors hover:text-primary"
                    >
                      +91-95996 34566
                    </a>
                  </p>
                  <p className="mt-1 text-gray-700">
                    <a
                      href="tel:+919599658766"
                      className="transition-colors hover:text-primary"
                    >
                      +91-95996 58766
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

            {/* Google Map */}
            <div className="relative mt-8 h-64 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.7913471207105!2d77.37792452847278!3d28.500327098477257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce920823414df%3A0xb850d0748e7692b!2sGali%20no.4%20Nagli%20Nagla!5e1!3m2!1sen!2sin!4v1742531317366!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

              {/*<div className="flex items-center">*/}
              {/*  <input*/}
              {/*    id="newsletter"*/}
              {/*    name="newsletter"*/}
              {/*    type="checkbox"*/}
              {/*    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"*/}
              {/*  />*/}
              {/*  <label*/}
              {/*    htmlFor="newsletter"*/}
              {/*    className="ml-2 block text-sm text-gray-700"*/}
              {/*  >*/}
              {/*    Subscribe to our newsletter for sustainable paper tips and*/}
              {/*    updates*/}
              {/*  </label>*/}
              {/*</div>*/}

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
                What is the environmental impact of paper production in India?
              </h3>
              <p className="text-gray-700">
                India has the second highest deforestation rate in the world,
                losing over 600,000 hectares of forest cover annually. The paper
                and paper packaging industry is a major contributor to this
                deforestation, with approximately 95 trees cut every second to
                produce paper and paper packaging products.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                What makes BUTTR papers different from other recycled options?
              </h3>
              <p className="text-gray-700">
                BUTTR Sustainable Papers are 100% recycled, uber-smooth paper
                sheets precisely cut for high-speed printing and compatible with
                all printers and inks. Unlike typical recycled papers that are
                low-grade and expensive, our papers are affordable,
                biodegradable, premium-quality, and tree-free.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Do you offer services for businesses?
              </h3>
              <p className="text-gray-700">
                Yes, we provide 100% traceability, offer last-mile delivery, and
                help businesses save up to 15% on paper procurement costs. We
                work with companies of all sizes and can accommodate both
                regular and specialized paper needs for various applications.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Are sustainable papers available for packaging?
              </h3>
              <p className="text-gray-700">
                Yes, though sustainable packaging paper has traditionally been
                difficult to find at affordable prices. BUTTR offers sustainable
                paper solutions for the packaging industry that don't compromise
                on quality. Our papers are designed to meet the needs of modern
                packaging requirements while maintaining our commitment to
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
