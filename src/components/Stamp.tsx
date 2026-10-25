type StampProps = {
  text: string
  color?: 'signal' | 'teal'
  rotation?: number
}

export default function Stamp({ text, color = 'signal', rotation = -2 }: StampProps) {
  const bgColor = color === 'signal' ? 'bg-signal' : 'bg-teal'
  const textColor = color === 'signal' ? 'text-white' : 'text-white'

  return (
    <div
      className={`inline-block px-4 py-2 ${bgColor} ${textColor} font-display font-bold text-sm uppercase tracking-wider border-4 border-double border-white/50`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: 0.9,
      }}
    >
      {text}
    </div>
  )
}
