type Props = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="font-display text-4xl font-bold text-ink mb-2">{children}</h2>
  )
}
