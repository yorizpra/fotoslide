import React from 'react';
import { Flame } from 'lucide-react';
import ButtonDefault from '@/components/Buttons/ButtonDefault';

interface Feature {
  text: string;
  available: boolean;
}

interface PricingPlan {
  plan: string;
  price: string;
  description: string;
  isPopular: boolean;
  features: Feature[];
}

interface PricingCardProps extends PricingPlan {}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  description, 
  features, 
  isPopular 
}) => (
  <div className={`rounded-lg border p-8 h-full ${isPopular ? 'border-orange-400' : 'border-green-200'}`}>
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">{plan}</h3>
          {isPopular && (
            <span className="flex items-center text-orange-500 text-sm font-medium">
              <Flame className="w-4 h-4 mr-1" />
              Best Seller
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">$</span>
        <span className="text-6xl font-bold">{price}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`w-5 h-5 mr-2 mt-1 ${
                feature.available 
                  ? 'text-green-500' 
                  : 'text-gray-300'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={feature.available ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div>
      {/* <ButtonDefault
              label="Button"
              link="/"
              customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            /> */}
        <ButtonDefault
              label={'Go with ' + plan}
              link="/payments"
              customClasses="w-full py-3 px-4 rounded-md bg-[#82B82C] hover:bg-[#75A627] text-white font-medium transition-colors"
            />
        {/* <button 
          className="w-full py-3 px-4 rounded-md bg-[#82B82C] hover:bg-[#75A627] text-white font-medium transition-colors"
          type="button"
        >
          Go with {plan}
        </button> */}
        <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Secure Payment
        </div>
      </div>
    </div>
  </div>
);

const PricingPlans: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      plan: "Lite",
      price: "19",
      description: "Perfect for Small Event. Easy start!",
      isPopular: false,
      features: [
        { text: "Single Album", available: true },
        { text: "Unlimited Guest & participants", available: true },
        { text: "Up to 200 uploads of photos & videos", available: true },
        { text: "Uploads are saved for 7 days", available: true },
        { text: "No need for a complicated setup", available: true },
        { text: "Upload Active for 3 days", available: true },
        { text: "All uploads are saved in good quality", available: true },
        { text: "Download all photos & videos at once", available: true },
        { text: "Remove FotoSlide Brand", available: false },
        { text: "Moderation tools", available: false },
      ],
    },
    {
      plan: "Plus",
      price: "39",
      description: "Perfect for Medium Event.",
      isPopular: false,
      features: [
        { text: "Up to 3 Albums", available: true },
        { text: "Up to 500 uploads of photos & videos", available: true },
        { text: "Unlimited Guest & participants", available: true },
        { text: "Uploads are saved for 60 days", available: true },
        { text: "Better customization options", available: true },
        { text: "Upload Active for 14 days", available: true },
        { text: "All uploads are saved in High-Quality", available: true },
        { text: "Download all photos & videos at once", available: true },
        { text: "Remove FotoSlide Brand", available: true },
        { text: "Moderation tools", available: false },
      ],
    },
    {
      plan: "Pro",
      price: "99",
      description: "Just for Pro! like You.",
      isPopular: true,
      features: [
        { text: "Up to 5 Albums", available: true },
        { text: "Unlimited uploads of photos & videos", available: true },
        { text: "Unlimited Guest & participants", available: true },
        { text: "Uploads are saved for 120 days", available: true },
        { text: "Advanced customization options", available: true },
        { text: "Upload Active for 30 days", available: true },
        { text: "All uploads are saved in High-Quality", available: true },
        { text: "Download all photos & videos at once", available: true },
        { text: "Remove FotoSlide Brand", available: true },
        { text: "Moderation tools", available: true },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Select Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.plan} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;