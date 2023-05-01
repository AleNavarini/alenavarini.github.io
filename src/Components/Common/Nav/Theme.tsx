import React from 'react'
import DefaultProps from '../../../Utils/Props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styles from './Theme.module.scss'
interface ThemeProps extends DefaultProps {
    onThemeToggle: () => void
}
export const Theme = (props: ThemeProps) => {
    const theme = localStorage.getItem('theme')
    return (
        <button className={styles.themeButton} onClick={props.onThemeToggle}>
            {theme === 'light' && <FontAwesomeIcon icon={faMoon} />}
            {theme === 'dark' && <FontAwesomeIcon icon={faSun} />}
        </button>
    )
}
