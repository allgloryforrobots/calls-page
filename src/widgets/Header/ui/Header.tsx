import cls from './Header.module.scss'
import { FC } from 'react'

interface HeaderProps {
    className?: string
}

export const Header: FC<HeaderProps> = (props) => {

    return (
        <div className={cls.Header}>

        </div>
    )
}
