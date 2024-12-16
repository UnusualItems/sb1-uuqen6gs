import React from 'react';
import { MarketSentiment } from '../types';
import { TrendingUp, TrendingDown, Minus, BarChart2 } from 'lucide-react';

const sentiment: MarketSentiment = {
  overall: 'bullish',
  score: 65,
  lastUpdated: new Date().toLocaleString()
};

export default function MarketSentimentIndicator() {
  const getSentimentIcon = () => {
    switch (sentiment.overall) {
      case 'bullish':
        return <TrendingUp className="w-8 h-8 text-green-500" />;
      case 'bearish':
        return <TrendingDown className="w-8 h-8 text-red-500" />;
      default:
        return <Minus className="w-8 h-8 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BarChart2 className="w-6 h-6 text-blue-500" />
        Market Sentiment
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {getSentimentIcon()}
          <div>
            <p className="text-xl font-semibold capitalize">{sentiment.overall}</p>
            <p className="text-gray-500">Sentiment Score: {sentiment.score}%</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Last Updated: {sentiment.lastUpdated}
        </div>
      </div>
    </div>
  );
}