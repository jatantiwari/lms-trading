'use client';

import Link from 'next/link';
import { Check, Clock, Flame, Crown, Sparkles } from 'lucide-react';

interface Plan {
  id: number;
  badge: string | null;
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  featured: boolean;
  href: string;
}

const plans: Plan[] = [
  {
    id: 1,
    badge: null,
    title: 'Basic Plan',
    price: '₹10,000',
    duration: '1 Month',
    description: 'Quick Start Program for beginners — build a strong foundation in commodity trading.',
    features: [
      'Basics of commodity trading',
      '1 core strategy',
      'Limited live sessions',
      'Community access',
    ],
    featured: false,
    href: '/courses',
  },
  {
    id: 2,
    badge: 'Most Popular',
    title: 'Pro Plan',
    price: '₹25,000',
    duration: '3 Months',
    description: 'Complete Trader Development Program — full strategy system with live support.',
    features: [
      'Full strategy system',
      'Regular live trading sessions',
      'Advanced price action',
      'Trade support + doubt solving',
    ],
    featured: true,
    href: '/courses',
  },
  {
    id: 3,
    badge: 'Best Value',
    title: 'Elite Plan',
    price: '₹45,000',
    duration: '6 Months',
    description: 'Full Financial Freedom Mentorship — complete mastery with personal mentorship.',
    features: [
      'Complete mastery (Beginner → Advanced)',
      'Daily live trading (3–5 days/week)',
      'Personal mentorship',
      'Psychology coaching',
      'Lifetime access + updates',
    ],
    featured: false,
    href: '/courses',
  },
];

export function CourseShowcase() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full">
            Pricing Structure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            Choose Your{' '}
            <span className="text-primary">Trading Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three plans designed to take you from complete beginner to professional commodity trader.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden ${
                plan.featured
                  ? 'border-primary shadow-[0_0_50px_rgba(0,0,0,0.4)] scale-[1.03] z-10'
                  : 'border-border hover:border-primary/40'
              }`}
            >
              {/* Gold shimmer top line */}
              <div
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300 ${
                  plan.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />

              {/* Header area */}
              <div
                className={`px-7 pt-8 pb-6 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent'
                    : 'bg-card'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
                    {plan.badge === 'Most Popular' ? <Flame className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-xl font-extrabold text-foreground mb-1">{plan.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>

                {/* Price */}
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-primary leading-none">
                    {plan.price}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  {plan.duration} program
                </div>
              </div>

              {/* Divider */}
              <div className="mx-7 h-px bg-border" />

              {/* Features */}
              <div className="flex-1 px-7 py-6 bg-card">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-7 pb-8 bg-card">
                <Link href={plan.href} className="block">
                  <button
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                      plan.featured
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40'
                        : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60'
                    }`}
                  >
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Program Features Highlight */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <h3 className="text-xl font-extrabold text-foreground text-center mb-6">
            Program Features (All Plans)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Live trading sessions (MCX hours)',
              'Recorded lectures access',
              'Daily trade setups',
              'Private community (Telegram/Discord)',
              'Personal mentorship support',
              'Lifetime strategy updates (Elite only)',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          All plans include community access and course materials.{' '}
          <Link href="/contact" className="text-primary hover:underline underline-offset-4">
            Contact us
          </Link>{' '}
          for group or corporate pricing.
        </p>
      </div>
    </section>
  );
}