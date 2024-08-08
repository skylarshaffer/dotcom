import { ProjectObject } from "src/types/project"

type Props = {
  project: ProjectObject
}

export default function Blend({ project }: Props) {
  return (
    <svg version="1.1" viewBox="0 0 700 700" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg" className="h-[100%] relative w-[100%] xl:h-[100%] xl:relative xl:w-[100%] object-cover">
      <title>{`${project.name} gradient blur`}</title>
      <desc>{`A gradient blur background for ${project.name} made of two colors.`}</desc>
      <defs>
        <linearGradient id={`${project.name}Gradient`} x1="50%" x2="50%" y2="100%" gradientTransform="rotate(150 .5 .5)">
          <stop stop-color={project.colors[0]} offset="0" />
          <stop stop-color={project.colors[1]} offset="1" />
        </linearGradient>
        <filter id={`${project.name}Filter`} x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
          <feTurbulence x="0%" y="0%" width="100%" height="100%" baseFrequency="0.002 0.003" numOctaves="2" result="turbulence" seed="2" stitchTiles="stitch" type="fractalNoise" />
          <feGaussianBlur x="0%" y="0%" width="100%" height="100%" edgeMode="duplicate" in="turbulence" result="blur" stdDeviation="20 0" />
          <feBlend x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" mode="color-dodge" result="blend" />
        </filter>
      </defs>
      <rect width="700" height="700" fill={`url(#${project.name}Gradient)`} filter={`url(#${project.name}Filter)`} />
    </svg>
  )
}