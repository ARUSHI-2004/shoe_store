import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
const imageSrc = '/images/sneakers-store-brand-logo,-sneaker-store-logo-design-template-cd4d67885f338eb3623ea9e1a7d92328_screen.jpg';
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <img
          src={imageSrc} 
          width={40}
          height={40}
          alt="Logo"
          className="rounded-full shadow-md"
        />
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Heaven Step
        </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            New Arrivals
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button className="md:hidden">Menu</Button>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 animate-slide-in">
                Step into Style with Our Latest Shoe Collection
              </h1>
              <p className="text-gray-600 mb-8">Discover the perfect pair of shoes to elevate your look and comfort.</p>
              <Link
                href="#"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#333] to-[#999] text-white px-6 py-3 rounded-md hover:bg-gradient-to-r hover:from-[#666] hover:to-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-[#333]/50 animate-pulse"
                prefetch={false}
              >
                <span>Shop Now</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="images\bright-large-shoe-store-new-260nw-173014127.webp"
                width={500}
                height={700}
                alt="Featured Shoe"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link href="#" className="bg-white rounded-lg shadow-md overflow-hidden group" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Sneakers"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Sneakers</h3>
                  <p className="text-gray-600">Casual and athletic styles</p>
                </div>
              </Link>
              <Link href="#" className="bg-white rounded-lg shadow-md overflow-hidden group" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Heels"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Heels</h3>
                  <p className="text-gray-600">Elegant and stylish options</p>
                </div>
              </Link>
              <Link href="#" className="bg-white rounded-lg shadow-md overflow-hidden group" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Boots"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Boots</h3>
                  <p className="text-gray-600">Rugged and versatile styles</p>
                </div>
              </Link>
              <Link href="#" className="bg-white rounded-lg shadow-md overflow-hidden group" prefetch={false}>
                <img
                  src="/images/shoes-3592530_640.jpg"
                  width={300}
                  height={200}
                  alt="Flats"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Flats</h3>
                  <p className="text-gray-600">Comfortable and stylish options</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Shoe 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Leather Sneakers</h3>
                  <p className="text-gray-600 mb-4">$89.99</p>
                  <Button>Add to Cart</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Shoe 2"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Suede Loafers</h3>
                  <p className="text-gray-600 mb-4">$69.99</p>
                  <Button>Add to Cart</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Shoe 3"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Canvas Slip-Ons</h3>
                  <p className="text-gray-600 mb-4">$49.99</p>
                  <Button>Add to Cart</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Shoe 4"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Leather Boots</h3>
                  <p className="text-gray-600 mb-4">$99.99</p>
                  <Button>Add to Cart</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-bold mb-2">Sole Stride</h3>
            <p className="text-gray-400">Elevate your style with our premium shoe collection.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              123 Main Street, Anytown USA
              <br />
              info@solestridestore.com
              <br />
              (555) 555-5555
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon({...props}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
