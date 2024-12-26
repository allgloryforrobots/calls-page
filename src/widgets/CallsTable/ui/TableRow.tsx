import { FC } from 'react'
import {CallIcon, CallType} from '../../../shared/ui/CallIcon/CallIcon';
import {Avatar} from '../../../shared/ui/Avatar/Avatar';
import cls from './TableRow.module.scss';
import {parseSecondsToMMSS} from '../../../shared/helpers/timeHelpers/timeHelpers';
import {SecondaryText} from '../../../shared/ui/SecondaryText/SecondaryText';
import {MarkLabel, MarkLabelTypes} from '../../../shared/ui/MarkLabel/MarkLabel';
import {getRandomEnumValue} from '../../../shared/helpers/randomFunctions/randomFunctions';

interface TableRowProps {
    call: any;
}

export const TableRow: FC<TableRowProps> = ({ call }) => {

    const {
        in_out,
        status,
        person_avatar,
        from_number,
        to_number,
        source,
        time
    } = call;

    let variant = null;
    const isIncoming = in_out === 1;
    const isSucceed = status === "Дозвонился";
    const phoneNumber = isIncoming ? from_number : to_number;

    // 1 - входящий
    if (isIncoming) {
        if (isSucceed) {
            variant = CallType.RECEIVED_SUCCESS
        } else {
            variant = CallType.RECEIVED_FAIL
        }
    }

    // 0 - исходящий
    if (!isIncoming) {
        if (isSucceed) {
            variant = CallType.MADE_SUCCESS
        } else {
            variant = CallType.MADE_FAIL
        }
    }

    // в данной ситуации или возвращать пустой тег или делать валидацию параметров с бэка и фильтровать входящие данные
    if (!variant) {
        return <></>
    }

    return (
        <tr>
            <td>
                <CallIcon
                    variant={variant}
                />
            </td>

            <td className="time">19:00</td>

            <td>
                <Avatar avatar={person_avatar} />
            </td>

            <td>
                { phoneNumber }
            </td>

            <td className="source">
                <SecondaryText text={ source } />
            </td>

            <td>
                <MarkLabel
                    variant={getRandomEnumValue(MarkLabelTypes)}
                />
            </td>

            <td className={cls.duration}>
                { parseSecondsToMMSS(time) }
            </td>
        </tr>
    )
}
