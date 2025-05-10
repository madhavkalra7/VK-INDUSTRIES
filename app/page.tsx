import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"
import { ClientTestimonials } from "@/components/client-testimonials"
import { StatsCounter } from "@/components/stats-counter"
import { FeaturedProducts } from "@/components/featured-products"
import { BackgroundDesign } from "@/components/background-design"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Featured Products Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-16">
        <BackgroundDesign />
        <div className="container relative mx-auto px-4 z-10">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-blue-900">Featured Products</h2>
            <div className="mx-auto h-1 w-24 bg-purple-600"></div>
            <p className="mt-4 text-gray-600">
              Discover our premium range of electrical components designed for reliability and performance
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* About Section with Creative Design */}
      <section id="about" className="relative overflow-hidden py-20">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-900/10"></div>
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-purple-600/10"></div>
        <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-yellow-400/10"></div>
        <div className="absolute bottom-1/4 left-1/4 h-32 w-32 rounded-full bg-green-400/10"></div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-blue-900">About VK Industries</h2>
              <div className="mb-6 h-1 w-24 bg-purple-600"></div>
              <p className="mb-6 text-lg text-gray-700">
                VK Industries is a leading manufacturer of high-quality electrical components based in Kurukshetra. With
                over two decades of experience, we have established ourselves as a trusted name in the electrical
                industry.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Our state-of-the-art manufacturing facility is equipped with the latest technology to ensure precision,
                reliability, and excellence in every product we create.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-2xl">
                <Image src="detail.jpg" alt="VK Industries Factory" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Main Products Section with Creative Design */}
      <section id="products" className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <BackgroundDesign variant="alt" />
        <div className="container relative mx-auto px-4 z-10">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-blue-900">Our Premium Products</h2>
            <div className="mx-auto h-1 w-24 bg-purple-600"></div>
            <p className="mt-4 text-gray-600">Engineered for excellence, built for reliability</p>
          </div>
          <ProductShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">What Our Clients Say</h2>
            <div className="mx-auto h-1 w-24 bg-purple-600"></div>
          </div>
          <ClientTestimonials />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="mb-8 text-lg">
            Contact our team to discuss your requirements and how we can help with your electrical component needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-medium text-blue-900 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Get in Touch
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

      <Footer />
    </div>
  )
}
