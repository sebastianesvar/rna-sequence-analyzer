import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AnalysisResults({ results, sequence }) {
  const compositionData = Object.entries(results.nucleotide_composition).map(([key, value]) => ({
    name: key,
    count: value,
    percentage: ((value / results.sequence_length) * 100).toFixed(2)
  }));

  const COLORS = {
    'A': '#FF6B6B',
    'C': '#4ECDC4',
    'G': '#45B7D1',
    'U': '#FFA07A'
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Resultados del Análisis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Longitud de la secuencia</h3>
            <p className="text-3xl font-bold text-indigo-600">{results.sequence_length} nucleótidos</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Contenido GC</h3>
            <p className="text-3xl font-bold text-green-600">{results.gc_content}%</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-3">Composición de Nucleótidos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={compositionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {compositionData.map((item) => (
            <div key={item.name} className="p-4 border rounded-lg" style={{ borderColor: COLORS[item.name] }}>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold" style={{ color: COLORS[item.name] }}>{item.name}</span>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-800">{item.count}</p>
                  <p className="text-sm text-gray-600">{item.percentage}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Secuencia de ADN (Transcripción Inversa)</h3>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="font-mono text-sm break-all">{results.reverse_transcribed_dna}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Secuencia de Proteína (Traducción)</h3>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="font-mono text-lg break-all">
            {results.protein_translation || 'No se pudo traducir la secuencia'}
          </p>
          {results.protein_translation && (
            <p className="mt-2 text-sm text-gray-600">
              Longitud: {results.protein_translation.length} aminoácidos
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnalysisResults;
