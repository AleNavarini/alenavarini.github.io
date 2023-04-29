import React from 'react'
import styles from './ExperienceItem.module.scss'
import DefaultProps from '../../../Utils/Props'

interface ExperienceItemProps extends DefaultProps {
    title: string
    period: string
    activities: Array<string>
}
export const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <div className={styles.item}>
            <h2>{props.title}</h2>
            <p>{props.period}</p>
            <ul>
                {props.activities.map((activity) => (
                    <li>{activity}</li>
                ))}
            </ul>
        </div>
    )
}
