import { Dna, Trash2 } from 'lucide-react';

function SequenceInput({ sequence, setSequence, onAnalyze, onClear, loading }) {
  const exampleSequence = 'AUGUGCAACGUAACGAAUAA';

  const handleLoadExample = () => {
    setSequence(exampleSequence);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Ingresa tu secuencia de ARN
      </h2>

      <textarea
        value={sequence}
        onChange={(e) => setSequence(e.target.value.toUpperCase())}
        placeholder="Ingresa tu secuencia de ARN (solo A, C, G, U)..."
        className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono text-lg"
        disabled={loading}
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={onAnalyze}
          disabled={loading || !sequence.trim()}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold"
        >
          <Dna className="w-5 h-5" />
          Analizar Secuencia
        </button>

        <button
          onClick={onClear}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <Trash2 className="w-5 h-5" />
          Limpiar
        </button>

        <button
          onClick={handleLoadExample}
          disabled={loading}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Cargar Ejemplo
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>💡 <strong>Tip:</strong> Las secuencias de ARN solo pueden contener los nucleótidos A, C, G y U.</p>
      </div>
    </div>
  );
}

export default SequenceInput;
