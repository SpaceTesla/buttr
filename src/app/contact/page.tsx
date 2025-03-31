import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import { FAQCategory } from '@/components/faq-category';

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

          {/* Contact Form Component */}
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-4xl">
            <FAQCategory
              title="About BUTTR Sustainable Papers"
              faqs={[
                {
                  question: "What's up with the name?",
                  answer:
                    'BUTTR symbolizes premium quality, gender neutrality, and a smooth finish. The R in the name denotes 100% recycled papers.',
                },
                {
                  question: 'Why did you start BUTTR?',
                  answer:
                    'We believe a picture speaks more than words, and a video speaks way more than a picture. Here is a short illustration/video on why we started BUTTR and the transition from natural materials to recyclable sources to make our papers.',
                },
                {
                  question:
                    'Explain the process followed in making BUTTR papers.',
                  answer:
                    "Manufacturing BUTTR papers was a global affair. The entire journey from sourcing waste materials to creating India's most sustainable paper is accessible in the video here.",
                },
                {
                  question: 'Are BUTTR designed for high-speed printers?',
                  answer:
                    'Of course. We designed BUTTR for small and high-speed printers. Our smooth finish and texture make it highly compatible with all kinds of printers and inks.',
                },
                {
                  question: 'How is BUTTR paper made?',
                  answer:
                    'We make BUTTR from waste paper, textiles, and cigarette butts from India. We source, clean, blend, card, finish, and then lab-test each batch of BUTTR Sustainable Papers before packaging and shipping.',
                },
                {
                  question: 'What are the papers made of?',
                  answer:
                    'We make the papers with recycled paper waste, cigarette butts, and textile waste to reduce the carbon footprint of the Papers.',
                },
                {
                  question: 'What is the packaging made of?',
                  answer:
                    'We make the packaging from a composition of waste paper for a perfect blend of lightweight and shock-absorbing capabilities. Their unique brand pattern provides a timeless experience.',
                },
                {
                  question: 'Is BUTTR Paper Traceable?',
                  answer:
                    'Yes. All the waste used to create the papers is traceable to the landfills of India.',
                },
                {
                  question: 'What is BUTTR Paper Box made of?',
                  answer:
                    'Our Paper box is made of 85% recycled wastepaper. Staying true to our promise of replacing synthetic materials with environmentally better and recycled materials! Check out our unboxing video to get a glimpse of our packaging.',
                },
                {
                  question:
                    'How do we know that the staff is treated humanely?',
                  answer:
                    'All the staff involved in making BUTTR papers work under 24x7 supervision to ensure all team members are healthy and provided adequate support throughout the year.',
                },
                {
                  question:
                    'Does BUTTR have offline plants? Where can we try BUTTR Papers?',
                  answer:
                    'Yes. We are happy to host you at two plants (Erode and Noida).',
                },
              ]}
            />

            <FAQCategory
              title="Product"
              faqs={[
                {
                  question: 'What are these papers made of?',
                  answer:
                    'We make the papers with recycled paper waste, cigarette butts, and textile waste to reduce the carbon footprint of the Papers.',
                },
                {
                  question: 'How are they compatible to use during monsoon?',
                  answer:
                    'Textile waste is highly breathable, allowing it to be functional during monsoon. Moreover, it also wicks moisture away from the paper, which evaporates from the surface of the paper. This prevents the clammy feeling you usually experience in other papers, hence keeping your papers dry and functional. Our unique blend absorbs more than 30% of its weight in moisture before you start feeling wet.',
                },
                {
                  question:
                    'How flexible are these papers? Will it fit my printer?',
                  answer:
                    'We designed BUTTR papers to adjust to the feeder of the printer. Hence, these papers are super flexible and will snugly fit even on wide feeders.',
                },
                {
                  question:
                    'How can I try the paper BUTTR has to offer? Does BUTTR have a physical store where I can walk into and try the papers?',
                  answer:
                    'Yes. We are happy to host you at two plants (Erode and Noida). You can walk into these plants and try our papers and stationery.',
                },
                {
                  question: 'Are the Papers Odour-Resistant?',
                  answer:
                    'Yes. You can use our papers without hassle, and they are odor-resistant.',
                },
                {
                  question: 'Are all the paper styles designed to be printed?',
                  answer:
                    'No, most of our papers are printable. However, we design some specialty papers for writing and stationery purposes.',
                },
                {
                  question: 'Can BUTTR Papers be used with watercolors?',
                  answer:
                    "Our papers are designed to be used with or without watercolors. With that being said, the feel of our papers without watercolors is amazing. But if you are a watercolor lover, it's still a great selection.",
                },
                {
                  question:
                    'I received my pack of BUTTR, and the papers feel amazing. I am not sure about the durability as the papers look delicate.',
                  answer:
                    'We have crafted BUTTR after extensive research with lightweight, functional, and durable materials at the same time. They are designed to last and withstand your everyday adventures.',
                },
              ]}
            />

            <FAQCategory
              title="Returns"
              faqs={[
                {
                  question: 'What is the 7-Day Trial?',
                  answer:
                    'Returns for all BUTTR papers are accepted for all unused papers within 7 days of receipt for a full refund.',
                },
                {
                  question:
                    'What are the terms and conditions of the return policy?',
                  answer:
                    'Any product, except for product(s) bought during the Eco-Friendly Festive Sale, in an unused condition with the packaging intact, returned not later than seven days from the date of delivery, is eligible for a free refund. If the product is returned after seven (7) days, damaged, or not in its original packaging, we shall not be able to honor a refund for the merchandise, and our decision shall be final and binding. No return or any other claim will be acceptable or valid after the expiration of 7 days from the time of delivery of the Product.',
                },
                {
                  question: 'What is the return process?',
                  answer:
                    'Please contact support@buttrpaper.com within 7 days of delivery with your order number to receive a return shipment and the details to send the BUTTR back to us.',
                },
                {
                  question: 'How long does the return process take?',
                  answer:
                    "After you've successfully applied for a return, within 24-48 hours your papers will be picked up. Then, If the terms and conditions of the BUTTR return are met, the payment will be processed within seven (7) business days of receipt of the returned package.",
                },
                {
                  question:
                    'How does the exchange policy work? What if I encounter functionality issues?',
                  answer:
                    "Our focus at BUTTR is to improve the papers' buying process and make it super easy and hassle-free. If you run into functionality issues, please email us at support@buttrpaper.com, and we will immediately ship a paper in the next GSM. All the shipping and exchange costs are on us.",
                },
              ]}
            />

            <FAQCategory
              title="Shipping"
              faqs={[
                {
                  question: 'Do I pay for shipping? Is the shipping free?',
                  answer:
                    'We deliver BUTTR to your doorstep in a recyclable box free of cost.',
                },
                {
                  question: 'How long does it take for the papers to ship?',
                  answer:
                    'All the papers ordered ship within the same or next business day from our plant in Noida.',
                },
                {
                  question:
                    'How many days does it take for the papers to reach?',
                  answer:
                    'It takes 6-7 Business days for our papers to reach anywhere across India. Metro cities like Bangalore, Delhi, Mumbai, Hyderabad, and Chennai may get papers in 5 Business days.',
                },
              ]}
            />

            <FAQCategory
              title="Paper Care"
              faqs={[
                {
                  question: 'How do I take care of my BUTTR Paper?',
                  answer:
                    'BUTTR papers are easy to store in a cool and dry place. Seal the packaging to avoid moisture.',
                },
                {
                  question: 'Are these papers water colorable?',
                  answer: 'Yes, they are!',
                },
                {
                  question:
                    'Can I dry BUTTR paper in the sun in case of moisture?',
                  answer:
                    "We'd strongly advise you for sun drying. Leave the papers for AIR dry.",
                },
              ]}
            />

            <FAQCategory
              title="International Shipping"
              faqs={[
                {
                  question: 'Do you ship Internationally?',
                  answer: 'Yes, we ship internationally.',
                },
                {
                  question:
                    'Do you charge for shipping on International Orders?',
                  answer:
                    'Yes, we charge an amount of Rs 500-800 for shipping depending on your location.',
                },
                {
                  question: 'How do I track my order?',
                  answer:
                    "Once we ship your order, we'll share the tracking link with you via email.",
                },
                {
                  question: 'Where are the papers being sent from?',
                  answer:
                    'We ship all the papers from our plants in Noida and Erode, India.',
                },
                {
                  question: 'How long does it take for the papers to reach?',
                  answer:
                    'International shipments reach within 7-12 working days. (A Business Day is Monday to Friday)',
                },
                {
                  question: 'Do I have to pay customs and import charges?',
                  answer:
                    "We don't include duties and import charges as part of the product cost. Most Countries charge duties on imported items depending on the product value at port entry. For example, the United States doesn't have any duty charges for goods less than $500. So, every country would have a different import rule. The import duty, if applicable, would be payable at delivery.",
                },
                {
                  question:
                    'Can I pay by Cash on Delivery for International Orders?',
                  answer:
                    "International orders don't qualify for Cash on Delivery.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-4 text-center text-xs font-semibold">Disclaimer</h3>
          <p className="text-justify text-[6px] text-gray-600">
            The information contained in this website is for general information
            purposes only. The information is provided by Code Effort Pvt Ltd
            and while we endeavour to keep the information up to date and
            correct, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability,
            suitability, or availability with respect to the website or the
            information, products, services, or related graphics contained on
            the website for any purpose. Any reliance you place on such
            information is therefore strictly at your own risk.
            <br />
            <br />
            You may not, except with our express written permission, distribute
            or commercially exploit the content. Nor may you transmit it or
            store it in any other website or other form of electronic retrieval
            system.
            <br />
            <br />
            Any redistribution or reproduction of part or all of the contents in
            any form is prohibited other than the following:
            <br />
            You may print or download to a local hard disk extracts for your
            personal and non-commercial use only.
            <br />
            <br />
            Unauthorized use of this website may give rise to a claim for
            damages and/or be a criminal offence.
            <br />
            <br />
            From time to time this website may also include links to other
            websites. These links are provided for your convenience to provide
            further information. They do not signify that Code Effort Pvt Ltd
            endorse the website(s). Code Effort Pvt Ltd has no responsibility
            for the content of the linked website(s).
            <br />
            <br />
            Applicable Law and Jurisdiction of this WEBSITE are governed by and
            to be interpreted in accordance with laws of India, without regard
            to the choice or conflicts of law provisions of any jurisdiction.
            The user/site visitor agrees that in the event of any dispute
            arising in relation to this Disclaimer or any dispute arising in
            relation to the website whether in contract or tort or otherwise, to
            submit to the jurisdiction of the courts located at Noida only for
            the resolution of all such disputes.
          </p>
        </div>
      </section>
    </div>
  );
}
