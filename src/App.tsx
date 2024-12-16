import React from 'react';
import TradingPatterns from './components/TradingPatterns';
import MarketSentiment from './components/MarketSentiment';
import TradingSuggestions from './components/TradingSuggestions';
import { Disclaimer } from './components/ui/Disclaimer';
import { LineChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <LineChart className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">TradingAssist Pro</span>
            </div>
            <div className="text-sm text-gray-500">
              Market data updates every 5 minutes
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Day Trading Assistant</h1>
              <p className="text-gray-600 mt-2">
                Make informed trading decisions with real-time patterns and market analysis
              </p>
            </div>
          </div>

          <MarketSentiment />
          <TradingSuggestions />
          <TradingPatterns />
          <Disclaimer />
        </div>
      </main>
    </div>
  );
}

export default App;