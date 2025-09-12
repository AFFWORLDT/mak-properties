import React from 'react';
import { Star, ChevronRight, User } from 'lucide-react';

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Ameer A.",
      time: "1 year ago",
      title: "Best Buyers in No Time",
      review: "From listing to closing, Provident provided excellent service. They marketed my property effectively and brought in serious buyers within days.",
      avatar: <User className="w-8 h-8" />
    },
    {
      name: "Karen F.",
      time: "1 year ago",
      title: "Seamless Sales Process",
      review: "Provident's expertise helped me get the best value for my home. Their marketing efforts were amazing, and the sale process was seamless.",
      avatar: <User className="w-8 h-8" />
    },
    {
      name: "Mark H.",
      time: "1 year ago",
      title: "Smart and Effective Service",
      review: "The entire process was quick and efficient. The Provident's team took care of everything from marketing to negotiating offers. I'm delighted with their work.",
      avatar: <User className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {testimonial.title}
              </h3>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrow */}
        <div className="flex justify-end mt-8">
          <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
