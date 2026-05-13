'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface CurriculumModule {
  week: string;
  title: string;
  topics: string[];
}

export interface CurriculumDetailProps {
  courseType: 'beginner' | 'intermediate' | 'advanced';
}

const curriculumData = {
  beginner: [
    {
      week: 'Module 1',
      title: 'Commodity Market Basics',
      topics: [
        'What are commodities?',
        'MCX structure & how it works',
        'Contract specifications (Lot size, expiry, margins)',
        'Key commodities: Gold, Silver, Crude Oil, Natural Gas',
      ],
    },
    {
      week: 'Module 2',
      title: 'Price Action Mastery',
      topics: [
        'Market structure (Trend, Range, Breakouts)',
        'Support & Resistance — Advanced concepts',
        'Demand & Supply zones',
        'Smart money concepts',
      ],
    },
    {
      week: 'Module 3',
      title: 'Intraday & Swing Strategies',
      topics: [
        'High probability intraday setups',
        'Opening range breakout strategy',
        'Momentum trading in crude oil',
        'Swing trading in gold',
      ],
    },
  ],
  intermediate: [
    {
      week: 'Phase 1: Module 1',
      title: 'Introduction to Stock Market',
      topics: [
        'What is Stock Market?',
        'History & evolution of stock markets',
        'Role of stock exchanges like NSE & BSE',
        'How money flows in the market',
        'Key participants (Retail, FII, DII)',
      ],
    },
    {
      week: 'Phase 1: Module 2',
      title: 'Account Setup & Tools',
      topics: [
        'Demat & Trading account setup',
        'Brokers overview (Zerodha, Upstox)',
        'Trading platforms & interface',
        'Order types (Market, Limit, SL, SL-M)',
        'Understanding contract notes',
      ],
    },
    {
      week: 'Phase 1: Module 3',
      title: 'Market Basics',
      topics: [
        'Types of markets (Primary vs Secondary)',
        'Types of stocks (Large cap, Mid cap, Small cap)',
        'Index basics (NIFTY 50, SENSEX)',
        'Bull vs Bear market',
        'IPO basics',
      ],
    },
    {
      week: 'Phase 2: Module 4',
      title: 'Chart Reading Basics',
      topics: [
        'Candlestick patterns (Doji, Hammer, Engulfing)',
        'Timeframes (1min, 5min, Daily, Weekly)',
        'Chart types',
      ],
    },
    {
      week: 'Phase 2: Module 5',
      title: 'Price Action Mastery',
      topics: [
        'Support & Resistance',
        'Trend identification (Uptrend, Downtrend, Sideways)',
        'Breakouts & Fakeouts',
        'Demand & Supply zones',
      ],
    },
    {
      week: 'Phase 2: Module 6',
      title: 'Indicators & Tools',
      topics: [
        'Moving Averages (SMA, EMA)',
        'RSI (Relative Strength Index)',
        'MACD (Moving Average Convergence Divergence)',
        'Volume analysis',
        'VWAP',
      ],
    },
    {
      week: 'Phase 3: Module 7',
      title: 'Company Analysis',
      topics: [
        'Business model understanding',
        'Revenue & profit analysis',
        'Industry comparison',
      ],
    },
    {
      week: 'Phase 3: Module 8',
      title: 'Financial Statements',
      topics: [
        'Balance Sheet',
        'Profit & Loss Statement',
        'Cash Flow Statement',
      ],
    },
    {
      week: 'Phase 3: Module 9',
      title: 'Key Ratios',
      topics: [
        'PE Ratio',
        'ROE / ROCE',
        'Debt-to-Equity',
        'EPS & growth analysis',
      ],
    },
    {
      week: 'Phase 4: Module 10',
      title: 'Intraday Trading',
      topics: [
        'Intraday setups',
        'Scalping basics',
        'Risk control in fast markets',
      ],
    },
    {
      week: 'Phase 4: Module 11',
      title: 'Swing Trading',
      topics: [
        'Multi-day trades',
        'Swing setups',
        'Entry & exit strategies',
      ],
    },
    {
      week: 'Phase 4: Module 12',
      title: 'Positional Trading',
      topics: [
        'Long-term setups',
        'Trend-following systems',
        'Portfolio building',
      ],
    },
    {
      week: 'Phase 4: Module 13',
      title: 'Options Trading (Beginner to Intermediate)',
      topics: [
        'Basics of Options (Call & Put)',
        'Option chain analysis',
        'Simple strategies (Straddle, Strangle)',
        'Hedging basics',
      ],
    },
    {
      week: 'Phase 5: Module 14',
      title: 'Risk Management',
      topics: [
        'Stop loss strategy',
        'Position sizing',
        'Capital protection rules',
        'Risk-to-reward ratio',
      ],
    },
    {
      week: 'Phase 5: Module 15',
      title: 'Trading Psychology',
      topics: [
        'Emotional control',
        'Discipline building',
        'Avoiding overtrading',
        'Mindset of successful traders',
      ],
    },
    {
      week: 'Phase 6: Module 16',
      title: 'Live Trading Sessions',
      topics: [
        'Real-time market analysis',
        'Live trade execution',
        'Market opening strategy',
      ],
    },
    {
      week: 'Phase 6: Module 17',
      title: 'Trade Review & Improvement',
      topics: [
        'Trade journal creation',
        'Mistake analysis',
        'Performance tracking',
      ],
    },
    {
      week: 'Bonus: Module 18',
      title: 'Advanced Strategies',
      topics: [
        'Price action strategies',
        'Breakout strategies',
        'Reversal trading setups',
      ],
    },
    {
      week: 'Bonus: Module 19',
      title: 'Algorithmic Trading (Basic Intro)',
      topics: [
        'What is algo trading',
        'Automation tools overview',
      ],
    },
    {
      week: 'Bonus: Module 20',
      title: 'Passive Income Strategies',
      topics: [
        'Dividend investing',
        'Long-term wealth building',
      ],
    },
  ],
  advanced: [
    {
      week: 'Month 1: Foundation & Market Basics',
      title: 'Build Strong Fundamentals',
      topics: [
        'Introduction to Stock Market (India & Global)',
        'How Stock Exchanges Work (NSE, BSE)',
        'Types of Market Participants',
        'Key Terminologies (Equity, IPO, Volume, etc.)',
        'Demat & Trading Account Setup',
        'Types of Orders (Market, Limit, SL)',
        'Introduction to Charts & Candlesticks',
      ],
    },
    {
      week: 'Month 2: Technical Analysis Mastery',
      title: 'Learn Chart Reading & Price Action',
      topics: [
        'Candlestick Patterns (Doji, Hammer, Engulfing)',
        'Support & Resistance Strategy',
        'Trend Analysis (Uptrend, Downtrend)',
        'Chart Patterns (Breakouts, Flags, Triangles)',
        'Moving Averages (EMA, SMA)',
        'Indicators (RSI, MACD, Volume)',
        'Live Chart Practice Sessions',
      ],
    },
    {
      week: 'Month 3: Advanced Trading Strategies',
      title: 'Develop Profitable Trading Systems',
      topics: [
        'Intraday Trading Strategies',
        'Swing Trading Strategies',
        'Breakout & Pullback Strategy',
        'Risk-Reward Ratio Mastery',
        'Position Sizing Techniques',
        'Stop Loss & Capital Protection',
        'Strategy Backtesting Sessions',
      ],
    },
    {
      week: 'Month 4: Fundamental Analysis & Investing',
      title: 'Learn Long-Term Wealth Creation',
      topics: [
        'Financial Statements (P&L, Balance Sheet)',
        'Ratio Analysis (ROE, PE, Debt)',
        'How to Pick Multibagger Stocks',
        'Sector Analysis',
        'Economic Indicators',
        'Long-Term Portfolio Building',
        'Case Studies of Successful Stocks',
      ],
    },
    {
      week: 'Month 5: Live Market Execution & Psychology',
      title: 'Real-World Trading Experience',
      topics: [
        'Live Market Trading Sessions',
        'Trade Entry & Exit in Real Time',
        'Trading Psychology (Fear, Greed Control)',
        'Discipline & Consistency Framework',
        'Handling Losses & Drawdowns',
        'Journaling & Performance Tracking',
        'Mindset Coaching Sessions',
      ],
    },
    {
      week: 'Month 6: Elite Trader Transformation',
      title: 'Become Independent & Scalable',
      topics: [
        'Advanced Risk Management',
        'Portfolio Diversification',
        'Passive Income Strategies (Options Basics)',
        'Scaling Capital Safely',
        'Creating Personal Trading Plan',
        'Building Multiple Income Streams',
        'Business & Wealth Mindset Training',
      ],
    },
    {
      week: 'Elite Features (Premium Bonuses)',
      title: 'Exclusive Mentorship Benefits',
      topics: [
        'Daily Trade Signals (Learning Purpose)',
        'Live Market Trading (3–5 days/week)',
        'Private VIP Community (Telegram/Discord)',
        'Lifetime Access to Recordings',
        'Personal Mentorship Support',
        'Trade Review & Feedback Sessions',
        'Weekly Q&A Calls',
        'Certification of Completion',
      ],
    },
    {
      week: 'Bonus Modules',
      title: 'Additional Wealth Building Skills',
      topics: [
        'Options Trading Basics',
        'Crypto Market Introduction',
        'AI Tools for Trading',
        'Personal Finance & Wealth Building',
      ],
    },
  ],
};

export function CurriculumDetail({ courseType }: CurriculumDetailProps) {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);
  const curriculum = curriculumData[courseType];

  // Auto-expand first module on initial render for better UX
  // (optional - remove if not needed)

  return (
    <div className="space-y-4">
      {curriculum.map((module, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
        >
          <button
            onClick={() =>
              setExpandedWeek(expandedWeek === module.week ? null : module.week)
            }
            className="w-full flex items-center justify-between p-6 bg-card hover:bg-accent/30 transition-colors text-left cursor-pointer"
          >
            <div className="flex-1">
              <div className="text-sm font-semibold text-primary mb-1">
                {module.week}
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {module.title}
              </h3>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform shrink-0 ml-4 ${
                expandedWeek === module.week ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedWeek === module.week && (
            <div className="px-6 py-4 bg-muted/30 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3">
                Topics Covered:
              </h4>
              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}