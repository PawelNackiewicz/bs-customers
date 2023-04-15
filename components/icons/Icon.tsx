import React from 'react'
import { defaultIcons } from './defaultIcons'
import IconWrapper, { IconProps as IconWrapperProps } from './IconWrapper'

export interface IconProps extends IconWrapperProps {
    name: IconName
    classNamePath?: string
}
export type IconName = keyof typeof defaultIcons

const Icon = ({ name, classNamePath, ...wrapperProps }: IconProps) => {
    const iconPath = defaultIcons[name]
    if (!iconPath) return <span role='img' aria-label="Missing icon">🙄</span>

    return (
        <IconWrapper {...wrapperProps}>
            <path d={defaultIcons[name]} fillRule="evenodd" clipRule="evenodd" className={classNamePath} />
        </IconWrapper>
    )
}

export default Icon