export default function Waybill() {
  return (
    <div className="font-mono bg-white p-6 border-2 border-dashed border-ink/30 rotate-1 max-w-sm">
      <div className="border-b-2 border-ink pb-4 mb-4">
        <div className="text-xs text-ink/70 mb-1">FROM:</div>
        <div className="text-sm font-bold text-ink">Nafisa</div>
        <div className="text-xs text-ink/80">Chattogram, Bangladesh</div>
      </div>

      <div className="border-b-2 border-ink pb-4 mb-4">
        <div className="text-xs text-ink/70 mb-1">TO:</div>
        <div className="text-sm font-bold text-ink">The Web</div>
        <div className="text-xs text-ink/80">Everywhere</div>
      </div>

      <dl className="grid grid-cols-2 gap-x-5 gap-y-3 mb-4">
        <div className="min-w-0">
          <dt className="text-xs tracking-wide text-ink/70">ROLE:</dt>
          <dd className="wrap-break-word font-bold leading-tight text-ink">Full-stack developer</dd>
        </div>
        <div className="min-w-0">
          <dt className="text-xs tracking-wide text-ink/70">HANDLE:</dt>
          <dd className="wrap-break-word font-bold leading-tight text-ink">WITH CARE</dd>
        </div>
      </dl>

      {/* Barcode simulation */}
      <div className="flex gap-0.5 h-8 items-end">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bg-ink/80"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="text-xs text-ink/70 mt-2 text-center">
        SHIP DATE: 2026
      </div>
    </div>
  )
}
