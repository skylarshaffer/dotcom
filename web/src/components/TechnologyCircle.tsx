type Props = {
  svg: React.ReactElement<SVGElement>
}

export default function TechnologyCircle ({svg}: Props) {
  return (
    <a href="#/" target="_self" className="flex-shrink-0 transition hover:-translate-y-1">
          <span className="text-black inline-block w-[40px] h-[40px]">
            <span className="w-24px h-24px w-full h-full">
              {svg}
            </span>
          </span>
        </a>
  )
}