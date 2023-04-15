import React from 'react'

export interface IconProps {
    size?: number | 'current'
    color?: string
    className?: string
    classNameG?: string
    dataTestId?: string
}

type SVGIconWrapperProps = IconProps & { children: JSX.Element }

const SVGIconWrapper = (props: SVGIconWrapperProps) => {

    const container = React.useRef<SVGSVGElement>(null)

    if (container.current) console.log(window.getComputedStyle(container.current).fontSize)
    const { color = 'currentColor' } = props

    const defaultSize = 20
    const initialSize = (props.size &&
        (typeof props.size === 'number' && props.size))
        || defaultSize

    const [size, setSize] = React.useState(initialSize)

    const handleRef = (el: SVGSVGElement) => {
        if (el && props.size === 'current') {
            setSize(parseFloat(window.getComputedStyle(el).fontSize))
        }
    }

    return (
        <svg ref={handleRef} width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg" className={props.className}>
            <g
                className={props.classNameG}
                transform={`scale(${size / defaultSize})`}
                fill={color}
            >
                {props.children}
            </g>
        </svg>

    )
}

export default SVGIconWrapper
