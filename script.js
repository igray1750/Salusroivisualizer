// Destructure components from Recharts
const { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Cell } = Recharts;

const OptimizedROIComparison = () => {
  const comparisonData = [
    {
      category: "Insurance Cost Reduction",
      subcategory: "EMR, XMOD & Workers' Comp",
      salusSolution: 100,
      procoreOnly: 25,
      incumbent: 90,
      roiImpact: "HIGH"
    },
    {
      category: "Incident Prevention",
      subcategory: "TRIR/DART Reduction",
      salusSolution: 100,
      procoreOnly: 35,
      incumbent: 85,
      roiImpact: "HIGH"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-2">Safety ROI Comparison</h2>
      <div className="h-96 w-full mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 110]} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar name="Salus Solution" dataKey="salusSolution" fill="#2ca02c" barSize={30} />
            <Bar name="Procore-Only" dataKey="procoreOnly" fill="#1f77b4" barSize={30} />
            <Line name="Incumbent Solution" type="monotone" dataKey="incumbent" stroke="#9467bd" strokeWidth={1.5} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

ReactDOM.render(<OptimizedROIComparison />, document.getElementById("root"));
