import cls from './MarkLabel.module.scss'
import { FC } from 'react';
import classNames from 'classnames';

interface MarkLabelProps {
    variant: MarkLabelTypes
}

export enum MarkLabelTypes {
    EXCELLENT = "excellent",
    GOOD = "good",
    BAD = "bad"
}

const translations: Record<MarkLabelTypes, string> = {
    [MarkLabelTypes.EXCELLENT]: "Отлично",
    [MarkLabelTypes.GOOD]: "Хорошо",
    [MarkLabelTypes.BAD]: "Плохо",
};

function translateMarkLabel(mark: MarkLabelTypes): string {
    return translations[mark] || "?";
}

export const MarkLabel: FC<MarkLabelProps> = (props) => {
    const {
        variant,
    } = props
    return (
        <div className={classNames(cls.MarkLabel, {}, [cls[variant]])}>
            { translateMarkLabel(variant) }
        </div>
    )
}
