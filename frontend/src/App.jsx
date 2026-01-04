import { useState } from 'react';
import { Dna, Loader2 } from 'lucide-react';
import { analyzeSequence } from './services/api';
import SequenceInput from './components/SequenceInput';
import AnalysisResults from './components/AnalysisResults';

function App() {
  const [sequence, setSequence] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!sequence.trim()) {
      setError('Por favor ingresa una secuencia de ARN');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const data = await analyzeSequence(sequence);
      setResults(data);
    } catch (err) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSequence('');
    setResults(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dna className="w-12 h-12 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">
              RNA Sequence Analyzer
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Analiza secuencias de ARN y obtén información detallada sobre su composición y traducción
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <SequenceInput
            sequence={sequence}
            setSequence={setSequence}
            onAnalyze={handleAnalyze}
            onClear={handleClear}
            loading={loading}
          />

          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {loading && (
            <div className="mt-8 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
              <span className="ml-3 text-gray-600">Analizando secuencia...</span>
            </div>
          )}

          {results && !loading && (
            <AnalysisResults results={results} sequence={sequence} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
