import React from 'react';
import { TradingSuggestion } from '../types';
import { TrendingUp, AlertCircle } from 'lucide-react';

const suggestions: TradingSuggestion[] = [
  {
    symbol: 'AAPL',
    action: 'buy',
    price: 175.34,
    reason: 'Strong technical setup with support at current levels',
    confidence: 80
  },
  {
    symbol: 'TSLA',
    action: 'hold',
    price: 242.68,
    reason: 'Consolidating at resistance, wait for breakout confirmation',
    confidence: 65
  },
  {
    symbol: 'NVDA',
    action: 'sell',
    price: 875.23,
    reason: 'Overbought conditions on multiple timeframes',
    confidence: 75
  }
];

export default function TradingSuggestions() {
  const getActionColor = (action: string) => {
    switch (action) {
      case 'buy':
        return 'text-green-500';
      case 'sell':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-blue-500" />
        Trading Suggestions
      </h2>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.symbol} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{suggestion.symbol}</h3>
                <p className={`text-lg font-medium ${getActionColor(suggestion.action)} capitalize`}>
                  {suggestion.action} @ ${suggestion.price}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-500">
                  Confidence: {suggestion.confidence}%
                </span>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{suggestion.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}