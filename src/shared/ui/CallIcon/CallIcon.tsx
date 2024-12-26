import { FC } from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

enum CallIconColors {
    RECEIVED = "#005FF8",
    MADE = "#28A879",
    FAILED = "#EA1A4F"
}

export enum CallType {
    MADE_SUCCESS = 'MADE_SUCCESS',
    MADE_FAIL = 'MADE_SUCCESS',
    RECEIVED_SUCCESS = "RECEIVED_SUCCESS",
    RECEIVED_FAIL = "RECEIVED_FAIL"
}

interface CallIconProps {
    variant: CallType
}

export const CallIcon: FC<CallIconProps> = (props) => {
    const { variant } = props

    let Icon = null;
    let color = "#fff";
    switch (variant) {
        case CallType.MADE_SUCCESS:
            Icon = CallMadeIcon;
            color = CallIconColors.MADE;
            break;
        case CallType.MADE_FAIL:
            Icon = CallMadeIcon;
            color = CallIconColors.FAILED;
            break;
        case CallType.RECEIVED_SUCCESS:
            Icon = CallReceivedIcon;
            color = CallIconColors.RECEIVED;
            break;
        case CallType.RECEIVED_FAIL:
            Icon = CallReceivedIcon;
            color = CallIconColors.FAILED;
            break;
        default:
            return <></>
    }

    return <Icon
        fontSize="small"
        sx={{ color: color }}
    />

}
