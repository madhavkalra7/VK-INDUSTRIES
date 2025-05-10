import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-10 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-3xl font-bold text-blue-900">Contact Us</h1>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-blue-900">Contact Information</h2>
              <div className="mb-6 rounded-md bg-gray-50 p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-medium text-blue-900">Address</h3>
                <p className="mb-4 text-gray-700">
                  Gandhi Nagar, Bishan Garh Road,
                  <br />
                  Kurukshetra, Haryana - 136118
                </p>

                <h3 className="mb-2 text-lg font-medium text-blue-900">Phone</h3>
                <p className="mb-4 text-gray-700">7814513555, 9996019520</p>

                <h3 className="mb-2 text-lg font-medium text-blue-900">Email</h3>
                <p className="mb-4 text-gray-700">vkind2022@gmail.com</p>

                <h3 className="mb-2 text-lg font-medium text-blue-900">Business Hours</h3>
                <p className="text-gray-700">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div className="h-[300px] overflow-hidden rounded-md shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27667.66842896555!2d76.8281241!3d29.9695094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e46cf85c85d3f%3A0x7f34ca8e1fcaf1a7!2sKurukshetra%2C%20Haryana!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VK Industries Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
