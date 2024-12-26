import { FC } from 'react'
import { CallsTable } from '../../../widgets/CallsTable';
import cls from './СallsPage.module.scss'
interface CallsPageProps {}

export const CallsPage: FC<CallsPageProps> = (props) => {
    return (
        <div className={cls.tableContainer}>
            <CallsTable />
        </div>
    )
}
