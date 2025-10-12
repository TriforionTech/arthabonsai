import Navbar from "../components/common/Navbar";
// import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-6">
            About Artha Bonsai
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            From apple orchards to the international bonsai stage, Pak Arpai proves that 
            bonsai is more than just art — it's a legacy.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artha Bonsai was born to nurture beauty, shape patience, and grow a new 
            generation of nature lovers through the ancient art of bonsai cultivation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-700 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It all began in a humble apple orchard, where Pak Arpai first discovered 
                his passion for nurturing and shaping living art. What started as a simple 
                appreciation for nature's beauty evolved into a lifelong dedication to the 
                ancient art of bonsai.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Through years of patient cultivation and continuous learning, Pak Arpai 
                transformed his hobby into an internationally recognized craft. Today, 
                Artha Bonsai stands as a testament to the power of patience, dedication, 
                and the profound connection between humans and nature.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey from local enthusiast to international stage represents more 
                than personal achievement—it embodies our commitment to preserving and 
                sharing this timeless art form with future generations.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">From Apple Orchards</h4>
                    <p className="text-gray-600 text-sm">Started with a simple love for cultivating nature</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Mastering the Art</h4>
                    <p className="text-gray-600 text-sm">Years of dedication to perfecting bonsai techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">International Recognition</h4>
                    <p className="text-gray-600 text-sm">Showcasing our craft on the global stage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Building Legacy</h4>
                    <p className="text-gray-600 text-sm">Inspiring the next generation of bonsai enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Mission & Vision</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To nurture beauty, cultivate patience, and foster a deep connection between 
                people and nature through the timeless art of bonsai. We strive to preserve 
                traditional techniques while making this ancient practice accessible to 
                modern enthusiasts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To become a globally recognized center of excellence in bonsai cultivation, 
                inspiring a new generation of nature lovers and artists who understand that 
                true beauty comes from patience, dedication, and harmony with the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core principles guide every aspect of our work and define who we are as artisans and educators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Patience</h3>
              <p className="text-gray-600">
                Understanding that true artistry takes time, and the most beautiful creations 
                emerge through patient, mindful cultivation over years.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Passion</h3>
              <p className="text-gray-600">
                Driven by an unwavering love for the art of bonsai and a deep respect 
                for the living sculptures we create and nurture.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Community</h3>
              <p className="text-gray-600">
                Building bridges between generations of artists and fostering a supportive 
                community where knowledge and appreciation for bonsai can flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-8">Meet Our Founder</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-700">PA</span>
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Pak Arpai</h3>
            <p className="text-green-600 mb-4">Master Bonsai Artist & Founder</p>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              With over two decades of experience in bonsai cultivation, Pak Arpai has transformed 
              from a simple orchard keeper into an internationally recognized master of the art. 
              His philosophy centers on the belief that bonsai is not just about shaping trees, 
              but about cultivating patience, mindfulness, and a deep connection with nature. 
              Through Artha Bonsai, he continues to share this wisdom with enthusiasts around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the art of bonsai and become part of our growing community of nature lovers and artists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Our Collection
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}