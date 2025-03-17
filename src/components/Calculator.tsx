'use client';

import { useState } from 'react';
import { factorial } from '../utils/factorial';
import { fizzBuzz } from '../utils/fizzbuzz';

export default function Calculator() {
  const [number, setNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [calcType, setCalcType] = useState<'factorial' | 'fizzbuzz'>('factorial');

  const handleCalculate = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }

    try {
      if (calcType === 'factorial') {
        setResult(`Factorial: ${factorial(num)}`);
      } else {
        setResult(`FizzBuzz: ${fizzBuzz(num)}`);
      }
    } catch (error) {
      setResult((error as Error).message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${
              calcType === 'factorial'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => setCalcType('factorial')}
          >
            Factorial
          </button>
          <button
            className={`px-4 py-2 rounded ${
              calcType === 'fizzbuzz'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => setCalcType('fizzbuzz')}
          >
            FizzBuzz
          </button>
        </div>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          placeholder="Enter a number"
        />

        <button
          onClick={handleCalculate}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>

        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded">
          <p className="text-lg">{result}</p>
        </div>
      </div>
    </div>
  );
}