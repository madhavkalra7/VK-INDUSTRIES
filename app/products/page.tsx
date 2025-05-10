import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundDesign } from "@/components/background-design"

const products = [
  {
    id: "din-rails",
    name: "DIN Rails",
    description: "High-quality DIN rails for mounting circuit breakers and industrial control equipment.",
    image: "mcb-channel.jpg",
    link: "/products/din-rails",
  },
  {
    id: "terminal-blocks",
    name: "Terminal Blocks",
    description: "Secure connection points for electrical circuits with excellent conductivity.",
    image: "ttb.jpg",
    link: "/products/terminal-blocks",
  },
  {
    id: "fan-boxes",
    name: "Fan Boxes",
    description: "Sturdy mounting solutions for ceiling fans and electrical fixtures.",
    image: "fan-box.jpg",
    link: "/products/fan-boxes",
  },
  {
    id: "modular-boxes",
    name: "Modular Boxes",
    description: "Versatile electrical enclosures for various installation requirements.",
    image: "moduler.jpg",
    link: "/products/modular-boxes",
  },
  {
    id: "concealed-boxes",
    name: "Concealed Boxes",
    description: "High-quality concealed boxes for clean and seamless electrical installations.",
    image: "concealed-box.jpg",
    link: "/products/concealed-boxes",
  },
  {
    id: "mcb-boxes",
    name: "MCB Boxes",
    description: "Durable MCB boxes designed for safety and efficient circuit management.",
    image: "mcb-box.jpg",
    link: "/products/mcb-boxes",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="relative bg-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold">Our Products</h1>
              <p className="mx-auto max-w-2xl text-lg text-blue-100">
                Discover our comprehensive range of high-quality electrical components designed for reliability,
                durability, and performance.
              </p>
            </div>
          </div>
        </section>

        {/* Products Overview Section */}
        <section className="relative py-16">
          <BackgroundDesign />
          <div className="container relative mx-auto px-4 z-10">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold text-blue-900">Product Categories</h2>
              <div className="mx-auto h-1 w-24 bg-purple-600"></div>
              <p className="mt-4 text-gray-600">
                Browse our complete range of electrical components manufactured with precision and care
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={product.link}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg?height=300&width=400"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-blue-900">{product.name}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="inline-flex items-center text-purple-600 transition-colors group-hover:text-purple-800">
                      <span>View Details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold text-blue-900">Quality Assurance</h2>
              <div className="mx-auto h-1 w-24 bg-purple-600"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-bold text-blue-900">Our Commitment to Quality</h3>
                <p className="mb-4 text-gray-700">
                  At VK Industries, quality is at the heart of everything we do. Our products undergo rigorous testing
                  and quality control measures to ensure they meet the highest standards of performance and durability.
                </p>
                <p className="text-gray-700">
                  We use premium raw materials and state-of-the-art manufacturing processes to create electrical
                  components that our customers can rely on for years to come.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-blue-900">Material Testing</h4>
                  <p className="text-gray-700">
                    We test all raw materials for durability, conductivity, and resistance to ensure optimal
                    performance.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-blue-900">Precision Manufacturing</h4>
                  <p className="text-gray-700">
                    Our advanced machinery ensures precise dimensions and consistent quality in every product.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-blue-900">Stress Testing</h4>
                  <p className="text-gray-700">
                    Products are subjected to stress tests to ensure they can withstand real-world conditions.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h4 className="mb-2 text-lg font-semibold text-blue-900">Final Inspection</h4>
                  <p className="text-gray-700">
                    Every product undergoes a final inspection before packaging to ensure it meets our standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="relative py-16">
          <BackgroundDesign variant="alt" />
          <div className="container relative mx-auto px-4 z-10">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold text-blue-900">Custom Solutions</h2>
              <div className="mx-auto h-1 w-24 bg-purple-600"></div>
              <p className="mt-4 text-gray-600">
                Need something specific? We offer customized electrical components tailored to your requirements
              </p>
            </div>
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-blue-900">How Our Custom Process Works</h3>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Consultation</h4>
                    <p className="text-gray-700">
                      We discuss your specific requirements and technical specifications to understand your needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Design & Prototyping</h4>
                    <p className="text-gray-700">
                      Our engineering team creates designs and prototypes for your approval before production.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Manufacturing</h4>
                    <p className="text-gray-700">
                      Once approved, we manufacture your custom components with the same high-quality standards as our
                      regular products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Quality Assurance & Delivery</h4>
                    <p className="text-gray-700">
                      We thoroughly test your custom products before delivering them to your doorstep.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-blue-900 px-6 py-3 text-white transition-all duration-300 hover:bg-blue-800"
                >
                  <span>Inquire About Custom Solutions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Order?</h2>
            <p className="mb-8 text-lg">
              Contact our sales team to place an order or request a quote for any of our products.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-medium text-blue-900 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Get a Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
