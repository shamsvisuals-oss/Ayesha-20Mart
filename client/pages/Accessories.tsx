import { Link } from "react-router-dom";

export default function Accessories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-dark to-brand-dark pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-brand-text mb-4">
          Accessories
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 font-montserrat">
          This page is coming soon. Continue building out this section!
        </p>
        <Link
          to="/"
          className="inline-block bg-brand-red text-white font-poppins font-bold px-8 py-4 rounded-full hover:bg-red-800 transition-all duration-300 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
