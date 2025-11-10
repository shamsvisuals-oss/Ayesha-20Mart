import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-dark to-brand-dark">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-dark-red via-black to-gray-600 border-b border-black shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-gray-300 to-gray-600 flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-white/80 to-red-900/80" />
            </div>
            <h1 className="text-red-600 font-montserrat text-lg sm:text-2xl font-bold italic drop-shadow-lg">
              Ayesha Mart
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-white font-poppins font-medium text-lg">
            <Link
              to="/"
              className="text-brand-accent hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/accessories"
              className="hover:text-brand-accent transition"
            >
              Accessories
            </Link>
            <Link
              to="/part-finder"
              className="text-red-600 hover:text-white transition"
            >
              Part Finder
            </Link>
            <Link to="/contact" className="hover:text-brand-accent transition">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="bg-brand-red text-white font-poppins font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-red-800 transition">
              Cart
            </button>
            <button className="bg-brand-red text-white font-poppins font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-red-800 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-white via-brand-dark to-brand-dark">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2d8cac2850b0d3fc1abb48ed00f41a449f2ed598?width=2986"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="relative mb-6 sm:mb-8">
            <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[200px] xl:text-[300px] font-montserrat font-bold bg-gradient-to-b from-white via-gray-300 to-gray-800 bg-clip-text text-transparent opacity-20">
              2025
            </h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/58399723b888bb05582e33e7cc8c6c093f13e318?width=1452"
                alt="Performance Motorcycle"
                className="w-full max-w-2xl h-auto object-contain -rotate-6"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold bg-gradient-to-b from-black via-red-600 to-red-600 bg-clip-text text-transparent mb-4 sm:mb-6 stroke-black">
            Enhance Your Vehicle's Performance
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-alfa-slab bg-gradient-to-b from-white via-white to-red-600 bg-clip-text text-transparent stroke-black">
            Trusted Modification Workshop For Bikes
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative inline-block mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-gray-400/50 to-black/50 rounded-full border border-red-600 transform -skew-x-3" />
            <h2 className="relative text-white font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl px-12 py-4 text-center">
              Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Spectre Dual Mod Led HeadLight",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/5e26cd5563fb34396c4ea7d7fb709d5e387e85a8?width=764",
              },
              {
                name: "Race Grade Sintered Brake Pads",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/7c7b5151cf1f0c22972ece6ce7ec85b9a00fdffb?width=764",
              },
              {
                name: "Race Pro Full Synthetic Engine Oil",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/614e08a721df4a87358da0fa02e76271722c99e0?width=770",
              },
            ].map((product, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-900/50 rounded-[50px] blur-sm" />
                <div className="relative bg-brand-card rounded-[45px] overflow-hidden shadow-2xl hover:shadow-red-600/50 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gradient-to-r from-red-600 to-gray-600 rounded-full px-6 py-2">
                      <h3 className="text-white font-poppins font-bold text-base sm:text-lg lg:text-xl text-center">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-brand-text font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Supporting Features
          </h2>
          <p className="text-white font-montserrat font-medium text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12">
            Track-Tested Durability
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Part Finder",
                "Live Chat & Inquiry Support",
                "Customization & Upgrades",
              ].map((feature) => (
                <button
                  key={feature}
                  className="bg-brand-gray text-white font-poppins font-semibold text-lg sm:text-xl lg:text-2xl px-6 py-3 shadow-2xl hover:bg-brand-red transition-all duration-300"
                >
                  {feature}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Order Tracking & Fast Delivery",
                "Suspension Upgrades",
                "Customer Account Portal",
              ].map((feature) => (
                <button
                  key={feature}
                  className="bg-brand-gray text-white font-poppins font-semibold text-lg sm:text-xl lg:text-2xl px-6 py-3 shadow-2xl hover:bg-brand-red transition-all duration-300"
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-brand-text font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Services
          </h2>
          <p className="text-brand-accent font-montserrat font-medium text-xl sm:text-2xl md:text-3xl mb-12">
            Welcome to Ayesha Mart
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                title: "Customization & Upgrades",
                desc: "Unlock your bike's full potential with advanced customization and upgrade solutions, allowing you to tailor performance, design, and comfort to your unique riding style for an unmatched experience on every road.",
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/ff664c67fb0ff0eefae46dd4b88fd97c92fbdb1f?width=289",
              },
              {
                title: "Part Finder",
                desc: "Quickly locate the right high-quality parts and accessories for your ride using our intuitive part finder tool, ensuring a perfect fit and seamless upgrades to keep your bike in top shape with minimal hassle.",
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/fb1f9176cca09780dc5654e4b6be1c7e3272ee1e?width=589",
              },
              {
                title: "Order Tracking & Fast Delivery",
                desc: "Track your orders in real-time and enjoy super-fast delivery as we ensure your chosen parts reach you securely and efficiently, so you spend less time waiting and more time riding.",
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e80dc33b58c99800624b08b07a9f99961e8a090?width=310",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-brand-card p-6 rounded-lg hover:shadow-xl hover:shadow-brand-red/30 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-montserrat font-medium bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-4">
                  {service.title}
                </h3>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <p className="text-sm font-montserrat bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-4">
                  {service.desc}
                </p>
                <a
                  href="#"
                  className="text-brand-accent font-poppins font-medium text-sm hover:underline inline-flex items-center gap-1"
                >
                  Get The Offer
                  <svg
                    className="w-4 h-4 -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-brand-text font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            LOCATION
          </h2>
          <p className="text-brand-accent font-montserrat font-medium text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12">
            Explore Our Physical Automotive Hub
          </p>

          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-brand-card h-64 sm:h-96 lg:h-[437px] flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/258bf6b4b1b9edf1f76a1c985b9f27751dc7ed59?width=2385"
                alt="Location Map"
                className="w-full h-full object-cover opacity-80"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-transparent bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text font-poppins font-bold text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-2xl hover:bg-red-800 transition-all duration-300 border-2 border-brand-red">
                See Our Location
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-brand-text font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12">
            GALLERY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "https://api.builder.io/api/v1/image/assets/TEMP/8a3c5c67292505069629fcd73fbfac3b1fe97910?width=1580",
              "https://api.builder.io/api/v1/image/assets/TEMP/24fb119b48daa227b8a6ae4d92f7097e409ca060?width=350",
              "https://api.builder.io/api/v1/image/assets/TEMP/f1d05698088796b1cb62cbb981efb24b55cae9f2?width=350",
              "https://api.builder.io/api/v1/image/assets/TEMP/de85574fdca462fe811a6d2187cbb27e829c546b?width=1746",
              "https://api.builder.io/api/v1/image/assets/TEMP/d02811cd3fe4f04fb5e19dfbd0ecf304ae6f755a?width=928",
              "https://api.builder.io/api/v1/image/assets/TEMP/55033cb99db3d0569bc5b2fca36cd728f2e8b477?width=364",
              "https://api.builder.io/api/v1/image/assets/TEMP/dfbeca464b2672e2f025bbb6be57670e1a25b634?width=422",
              "https://api.builder.io/api/v1/image/assets/TEMP/323d994f097cb3f35847de2e5f86a63bec2416dd?width=350",
            ].map((img, idx) => (
              <div
                key={idx}
                className={`bg-gray-400 rounded-lg overflow-hidden shadow-lg hover:shadow-brand-red/50 transition-all duration-300 ${
                  idx === 0 || idx === 3 || idx === 4
                    ? "col-span-2 row-span-2"
                    : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-brand-text font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            BLOG
          </h2>
          <p className="text-brand-accent font-montserrat font-medium text-xl sm:text-2xl md:text-3xl text-center mb-12">
            Explore our automotive expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Revolutionizing Performance",
                desc: "Explore how our performance enhancement packages redefine the driving experience.",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/9d42a9fee095ef3022ec4123a5e7ad5d56e8cba8?width=774",
              },
              {
                title: "Craftsmanship Unveiled",
                desc: "Peek into our workshop and discover the meticulous craftsmanship behind every modification.",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/df5728f44edd990245aa871e5815c8277af4a0ad?width=760",
              },
              {
                title: "Beyond the Surface",
                desc: "Uncover the secrets of our interior modifications, blending style and comfort seamlessly.",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/ad4ef2129ba85bbc77927ee88c88bd5644ae0072?width=804",
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-brand-card rounded-lg overflow-hidden shadow-lg hover:shadow-brand-red/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gray-400 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-medium bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm font-montserrat text-gray-400 mb-2">
                    {post.desc}{" "}
                    <a href="#" className="text-brand-accent hover:underline">
                      [See more]
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-brand-text font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            TESTIMONIAL
          </h2>
          <p className="text-brand-accent font-montserrat font-medium text-xl sm:text-2xl md:text-3xl text-center mb-12">
            Discover Client Experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Amanda Turner",
                role: "Marketing Executive",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/26eb05bf5886916e46c36987739abbbf5a4ea723?width=440",
                text: "\"I can't express how thrilled I am with OCD Fab & Performance. The meticulous attention to detail in their modifications is extraordinary. The performance boost is beyond my expectations, and my car now feels like a true powerhouse on the road. It's not just a service; it's an automotive transformation that I highly recommend to all car enthusiasts.\"",
              },
              {
                name: "Jonathan Rodri",
                role: "IT Specialist",
                img: "https://api.builder.io/api/v1/image/assets/TEMP/4d39022ee2bc1a98b4f4f04ebab8f5894211467c?width=440",
                text: "\"OCD Fab & Performance has taken my vehicle to a whole new level. The exterior modifications are not just eye-catching but also reflect a perfect blend of professionalism and creative flair. Their team's dedication is evident, and my car has become a true reflection of my style. I couldn't be happier with the outcome. If you're looking for top-notch automotive customization, this is the place to go!\"",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="relative">
                <div className="bg-brand-card rounded-lg p-6 shadow-lg">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-6 border-4 border-brand-card shadow-xl"
                  />
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-medium bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-lg sm:text-xl font-montserrat bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-2">
                      {testimonial.role}
                    </p>
                    <div className="text-xl sm:text-2xl bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent">
                      ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
                    </div>
                  </div>
                  <p className="text-base sm:text-lg font-montserrat bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent italic">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Value Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-brand-text font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            OUR VALUE
          </h2>
          <p className="text-brand-accent font-montserrat font-medium text-xl sm:text-2xl md:text-3xl text-center mb-12 max-w-2xl mx-auto">
            Exemplary craftsmanship, seamless experiences, and innovative
            solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            {[
              {
                title: "Exceptional Craftmanship",
                desc: "Our certified professionals at OCD Fab & Performance ensure that every modification, from performance upgrades to interior enhancements, is executed with unparalleled attention to detail, delivering automotive craftsmanship at its finest.",
              },
              {
                title: "Seamless Customer Experience",
                desc: "From browsing our online store to placing orders and receiving top-notch services, OCD Fab & Performance is committed to providing a seamless and hassle-free customer experience, ensuring satisfaction at every step of the journey.",
              },
              {
                title: "Innovative Solutions for Every Need",
                desc: "OCD Fab & Performance goes beyond the ordinary, offering innovative and customized solutions to meet the unique needs of your vehicle. Our commitment to pushing boundaries ensures that your automotive dreams become a reality.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-brand-card p-6 rounded-lg shadow-lg hover:shadow-brand-red/30 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-montserrat font-medium bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent text-center mb-6">
                  {value.title}
                </h3>
                <div className="w-32 h-32 sm:w-44 sm:h-44 mx-auto mb-6 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 176 176"
                    fill="none"
                  >
                    <path
                      opacity="0.971"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M73.0469 36.2658C85.5487 35.7247 97.2362 38.5321 108.109 44.6876C112.038 47.2781 113.126 50.773 111.375 55.172C108.963 58.726 105.697 59.8147 101.578 58.4376C86.0252 49.5586 70.2127 49.1004 54.1406 57.0626C35.0993 68.7811 27.1356 85.7967 30.25 108.11C35.4169 128.974 48.5368 141.521 69.6094 145.75C91.4427 147.881 107.886 139.574 118.938 120.828C121.413 115.808 123.132 110.537 124.094 105.016C126.554 100.89 130.049 99.6866 134.578 101.406C137.187 102.957 138.447 105.248 138.359 108.281C135.394 126.826 126.112 141.264 110.516 151.594C91.2828 162.955 71.3453 164.33 50.7031 155.719C27.5306 143.924 15.3848 124.961 14.2656 98.8283C15.3848 72.6957 27.5306 53.7324 50.7031 41.9376C57.8789 38.7975 65.3266 36.9069 73.0469 36.2658Z"
                      fill="#B7002E"
                    />
                    <path
                      opacity="0.961"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M152.797 36.2656C159.706 36.9115 162.284 40.5783 160.531 47.2656C160.073 47.9531 159.614 48.6406 159.156 49.3281C136.182 72.302 113.208 95.2762 90.2343 118.25C86.6824 120.771 83.13 120.771 79.5781 118.25C70.588 108.469 61.4786 98.7869 52.25 89.2031C49.8076 84.0393 51.1255 80.201 56.2031 77.6875C60.1366 76.8594 63.2874 78.0625 65.6562 81.2969C72.073 88.1719 78.4894 95.0469 84.9062 101.922C106.047 80.7812 127.187 59.6406 148.328 38.5C149.667 37.3725 151.156 36.6276 152.797 36.2656Z"
                      fill="#B7002E"
                    />
                  </svg>
                </div>
                <p className="text-base sm:text-lg font-montserrat bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent text-center">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-maroon relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-medium bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-8">
              Embark on a Journey of Automotive Excellence
            </h2>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-400 to-gray-400 opacity-50 rounded-full" />
              <button className="relative bg-red-600 text-gray-900 font-poppins font-bold text-2xl sm:text-3xl px-12 py-4 rounded-3xl shadow-2xl hover:bg-red-700 transition-all duration-300">
                Discover More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/90882230f17a3f003e3b2cdea1ad8bf5e64be654?width=1666"
              alt="Performance Motorcycle"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-gray-300 to-gray-600 mb-4" />
            </div>

            <div>
              <h3 className="font-poppins text-base bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-4">
                Social Media
              </h3>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-6 h-6 bg-gradient-to-b from-purple-900 to-gray-500 rounded" />
                <div className="w-6 h-6 bg-gradient-to-b from-purple-900 to-gray-500 rounded" />
                <div className="w-6 h-6 bg-gradient-to-b from-purple-900 to-gray-500 rounded" />
                <div className="w-6 h-6 bg-gradient-to-b from-purple-900 to-gray-500 rounded" />
              </div>
            </div>

            <div>
              <h3 className="font-poppins text-base bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent mb-4">
                Join our Newsletter:
              </h3>
              <div className="flex items-center gap-2 bg-brand-card border-2 border-brand-red rounded-full px-6 py-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-transparent text-gray-400 font-poppins text-sm flex-1 outline-none"
                />
                <button className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <div className="space-y-2 font-poppins text-base bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent">
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Payment Methods</p>
                <p>Refund Policy</p>
                <p>Delivery Order</p>
                <p>Contact Us</p>
                <p>Our Story</p>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-gray-700 pt-8">
            <p className="font-urbanist text-sm bg-gradient-to-b from-purple-900 to-gray-500 bg-clip-text text-transparent">
              © 2024 Obsesed Fab | All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
