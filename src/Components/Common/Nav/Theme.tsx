import React from 'react'
import DefaultProps from '../../../Utils/Props'

interface ThemeProps extends DefaultProps {
    onThemeToggle: () => void
}
export const Theme = (props: ThemeProps) => {
    return (
        <div>
            <button onClick={props.onThemeToggle}>Toggle Theme</button>
        </div>
    )
}
