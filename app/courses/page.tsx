import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PricingTable } from '@/components/pricing-table';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Courses & Pricing - Financial Freedom Mentor | Stock Market Trading Mentorship',
  description: 'Choose from Basic (₹10,000), Pro (₹25,000), or Elite (₹50,000) stock market trading mentorship plans. Technical analysis, live trading, personal mentorship & more.',
};

const pricingPlans = [
  {
    name: 'Basic',
    price: 10000,
    currency: '₹',
    duration: '1 Month',
    description: 'Quick Start Program for beginners — build a strong foundation in stock market basics.',
    features: [
      { name: 'Beginner to Intermediate Technical Analysis', included: true },
      { name: 'Market Basics (NSE, BSE, Order Types, Charts)', included: true },
      { name: 'Candlestick Patterns & Support/Resistance', included: true },
      { name: '4 Live Classes (1 per week)', included: true },
      { name: 'Basic Strategy Introduction', included: true },
      { name: 'Community Access (Basic Group)', included: true },
      { name: 'Live Trading Sessions', included: false },
      { name: 'Advanced Strategies', included: false },
      { name: 'Personal Mentorship', included: false },
    ],
  },
  {
    name: 'Pro',
    price: 25000,
    currency: '₹',
    duration: '3 Months',
    description: 'Complete Trader Development Program — make you market-ready with real skills.',
    popular: true,
    features: [
      { name: 'Everything in Basic', included: true },
      { name: 'Advanced Technical Analysis', included: true },
      { name: 'Intraday + Swing Trading Strategies', included: true },
      { name: 'Live Market Sessions (2–3 days/week)', included: true },
      { name: 'Trade Setups (For Learning)', included: true },
      { name: 'Weekly Q&A + Doubt Solving', included: true },
      { name: 'Trade Review Sessions', included: true },
      { name: 'Private VIP Community Access', included: true },
      { name: 'Risk Management System', included: true },
      { name: 'Trading Psychology Training', included: true },
    ],
  },
  {
    name: 'Elite',
    price: 45000,
    currency: '₹',
    duration: '6 Months',
    description: 'Full Financial Freedom Mentorship Program — become an independent trader/investor.',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Live Market Sessions (3–5 days/week)', included: true },
      { name: 'Fundamental Analysis & Long-Term Investing', included: true },
      { name: 'Portfolio Building Strategies', included: true },
      { name: '1-on-1 Mentorship (3–5 Calls)', included: true },
      { name: 'Personalized Trading Plan', included: true },
      { name: 'Advanced Risk Management', included: true },
      { name: 'Options Basics + Income Strategies', included: true },
      { name: 'Priority Support (WhatsApp/Direct)', included: true },
      { name: 'Lifetime Access to Recordings', included: true },
      { name: 'Certification of Completion', included: true },
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full py-20 bg-card border-b border-border">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm font-semibold text-primary tracking-wide">Stock Market Mentorship Program</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
                Simple, Transparent <span className="text-primary">Pricing</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground">
                Three plans designed to take you from complete beginner to confident, independent trader. No hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingTable plans={pricingPlans} />
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-20 bg-card border-y border-border">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-foreground text-center mb-12">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What will I learn in this stock market mentorship?',
                  a: 'You will learn everything from stock market basics, technical analysis, candlestick patterns, intraday & swing trading strategies, risk management, trading psychology, fundamental analysis, portfolio building, and options basics — all the way to becoming an independent trader.',
                },
                {
                  q: 'Do I need prior trading experience?',
                  a: 'Absolutely not. The Basic Plan starts from zero — we cover market basics, NSE/BSE, order types, charts, and foundational strategies. No prior experience is needed.',
                },
                {
                  q: 'Are the live sessions recorded?',
                  a: 'Yes. All live sessions are recorded and available for replay. Elite plan includes lifetime access to all recordings.',
                },
                {
                  q: 'What is the difference between Pro and Elite?',
                  a: 'Pro gives you advanced technical analysis, live market sessions (2–3 days/week), trade setups, weekly Q&A, trade reviews, VIP community access, risk management, and psychology training. Elite adds live sessions (3–5 days/week), fundamental analysis, 1-on-1 mentorship (3–5 calls), personalized trading plan, advanced risk management, options & income strategies, priority WhatsApp support, lifetime access, and certification.',
                },
                {
                  q: 'Do you offer a money-back guarantee?',
                  a: 'Yes. We offer a satisfaction guarantee. If you feel the course is not right for you within the first 7 days, contact our team and we will work out a solution.',
                },
                {
                  q: 'How do I choose the right plan?',
                  a: 'If you are a complete beginner wanting to test the market, start with Basic. If you are serious about learning real trading skills and becoming market-ready, choose Pro (our most popular plan). If you want full transformation with personal mentorship and lifetime access, invest in Elite. Contact us for a free consultation.',
                },
                {
                  q: 'What is the Elite plan price?',
                  a: 'The Elite plan is ₹50,000 for 6 months, which includes everything in Pro plus 1-on-1 mentorship, daily live sessions (3–5 days/week), fundamental analysis, portfolio building, priority support, lifetime access, and certification.',
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Start Your Stock Market Journey Today"
          description="Join thousands of successful traders. Choose your plan and get started with expert mentorship — from basics to live trading to complete financial freedom."
          primaryButtonText="Enroll Now"
          primaryButtonHref="/register"
        />
      </main>
      <Footer />
    </>
  );
}