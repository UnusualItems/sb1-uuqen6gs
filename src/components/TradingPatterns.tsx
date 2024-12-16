import React from 'react';
import { TradingPattern } from '../types';
import { Info } from 'lucide-react';

const patterns: TradingPattern[] = [
  {
    name: 'Double Bottom',
    description: 'A bullish reversal pattern that forms after a downtrend, characterized by two roughly equal lows.',
    reliability: 75,
    timeframe: 'Medium-term',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500'
  },
  {
    name: 'Bull Flag',
    description: 'A continuation pattern that forms during strong uptrends, suggesting a brief pause before continuing higher.',
    reliability: 80,
    timeframe: 'Short-term',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=500'
  },
  {
    name: 'Head and Shoulders',
    description: 'A reversal pattern indicating a potential trend change from bullish to bearish.',
    reliability: 70,
    timeframe: 'Long-term',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500'
  }
];

export default function TradingPatterns() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Info className="w-6 h-6 text-blue-500" />
        Trading Patterns
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patterns.map((pattern) => (
          <div key={pattern.name} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src={pattern.image} alt={pattern.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{pattern.name}</h3>
              <p className="text-gray-600 mb-3">{pattern.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-blue-600">Reliability: {pattern.reliability}%</span>
                <span className="text-gray-500">Timeframe: {pattern.timeframe}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}