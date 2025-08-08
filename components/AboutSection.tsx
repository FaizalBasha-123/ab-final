
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-freight font-medium text-gray-900 mb-8">
            Watch Our Promo
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dwpzkfzuv&public_id=AB_Lincoln_promo_video_utffdk&profile=cld-default"
              width="640"
              height="360" 
              style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
