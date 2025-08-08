
'use client';
type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className = "", ...props }: CardProps) => (
  <div className={`rounded-xl border ${className}`} {...props}>
    {children}
  </div>
);

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#eef2f7] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754447773/bg_us1oyq.avif')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-5xl font-avenir font-bold text-gray-900 leading-tight">
              Transforming Business<br />
              <span className="text-[#202b5e] text-bold-400">Through Management Systems.</span>
            </h1>
            <p className="text-xl font-freight font-book text-gray-600 max-w-2xl">
              Your consulting partner in setting up management systems that make your business run — even when you’re not there — and ready for growth.<br />
              As provider of management consultancy services we deliver our services according to ISO 20700:2017            
            </p>
            <p className="text-lg font-freight font-book text-gray-600 max-w-2xl">
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-800">
              <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 group">
                <i className="ri-lightbulb-flash-line w-8 h-8 text-blue-600 mx-auto mb-3 text-2xl transition-transform duration-300 group-hover:scale-110"></i>
                <p className="font-freight text-slate-800">Innovative Solutions</p>
              </Card>
              <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 group delay-100">
                <i className="ri-focus-3-line w-8 h-8 text-purple-600 mx-auto mb-3 text-2xl transition-transform duration-300 group-hover:scale-110"></i>
                <p className="font-freight text-slate-800">Strategic Focus</p>
              </Card>
              <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 group delay-200">
                <i className="ri-bar-chart-grouped-line w-8 h-8 text-green-600 mx-auto mb-3 text-2xl transition-transform duration-300 group-hover:scale-110"></i>
                <p className="font-freight text-slate-800">Proven Results</p>
              </Card>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center animate-fade-in-left delay-300">
            <div className="relative z-10 transform transition-transform duration-300 hover:scale-105">
              <img 
                src="https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754449282/bg_front_avkeam.jpg"
                alt="Innovation Team" 
                className="rounded-2xl shadow-2xl object-cover w-102 h-110"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
