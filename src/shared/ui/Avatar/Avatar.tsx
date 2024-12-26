import cls from './Avatar.module.scss'
import { FC } from 'react'

interface AvatarProps {
    avatar?: string
}

export const Avatar: FC<AvatarProps> = ({ avatar }) => {

    return (
        <div className={cls.Avatar}>
            <img src={avatar} alt="Avatar"/>
        </div>
    )
}
