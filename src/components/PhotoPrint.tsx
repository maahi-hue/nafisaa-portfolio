export default function PhotoPrint() {
  return (
    <figure className="relative mx-auto w-full max-w-85">
      <img
        src="/images/nafisa-print.webp"
        alt="Nafisa Kamal outdoors by a lake, wearing a mauve hijab and face veil"
        width={1068}
        height={1218}
        className="h-auto w-full"
      />
      <figcaption className="absolute bottom-[10%] left-[14%] rotate-[-2.2deg] font-mono text-[0.8rem] font-bold text-ink sm:text-sm">
        SENDER: N. KAMAL
      </figcaption>
      <span
        aria-hidden="true"
        className="absolute bottom-[8%] right-[7%] rotate-[-8deg] border-2 border-signal px-2 font-display text-lg text-signal"
      >
        CHATTOGRAM
      </span>
    </figure>
  )
}
