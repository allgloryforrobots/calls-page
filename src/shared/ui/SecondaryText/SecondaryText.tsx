import cls from './SecondaryText.module.scss'
import { FC } from 'react'


interface SecondaryTextProps {
    text: string
}

export const SecondaryText: FC<SecondaryTextProps> = ({ text = "" }) => {

    return (
        <div className={cls.SecondaryText}>
            { text }
        </div>
    )
}
