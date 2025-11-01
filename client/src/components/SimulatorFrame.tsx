export default function SimulatorFrame() {
  return (
    <div className="w-full h-full overflow-hidden">
      <iframe
        src="/simulator/index.html"
        title="Simulador de Balanço de Massa"
        className="w-full h-full border-0"
        style={{ 
          backgroundColor: "#0f172a",
          display: "block"
        }}
      />
    </div>
  );
}

