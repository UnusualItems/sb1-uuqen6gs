export interface TradingPattern {
  name: string;
  description: string;
  reliability: number;
  timeframe: string;
  image: string;
}

export interface MarketSentiment {
  overall: 'bullish' | 'bearish' | 'neutral';
  score: number;
  lastUpdated: string;
}

export interface TradingSuggestion {
  symbol: string;
  action: 'buy' | 'sell' | 'hold';
  price: number;
  reason: string;
  confidence: number;
}