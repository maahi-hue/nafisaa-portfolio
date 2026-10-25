type Props = {
  children: React.ReactNode
}

export default function Tag({ children }: Props) {
  return (
    <span className="px-3 py-1 text-sm border-2 border-dashed border-ink/30 text-ink rounded font-mono">
      {children}
    </span>
  )
}
