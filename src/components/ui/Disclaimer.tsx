import React from 'react';
import { AlertCircle } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            Disclaimer: This tool is for educational purposes only. Always conduct your own research and consult with financial professionals before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}