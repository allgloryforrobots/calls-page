import { FC, useEffect, useState } from 'react';
import { getCalls } from '../../../shared/api/calls';
import cls from './CallsTable.module.scss';
import { TableRow } from './TableRow';

export const CallsTable: FC = () => {
    const [calls, setCalls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchCalls();
    }, []);

    const fetchCalls = async () => {
        setLoading(true);
        try {
            const response = await getCalls({});
            setCalls(response.data.results);
        } catch (error) {
            console.error('Failed to fetch calls:', error);
            setError(true)
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Загрузка данных</div>
    }

    if (error) {
        return <div>Ошибка</div>
    }

    return (
        <table className={cls.Table}>
            <thead>
            <tr>
                <th>Тип</th>
                <th>Время</th>
                <th>Сотрудник</th>
                <th>Звонок</th>
                <th>Источник</th>
                <th>Оценка</th>
                <th className={cls.duration}>Длительность</th>
            </tr>
            </thead>
            <tbody>
                { calls.map(call => <TableRow call={call}/>) }
            </tbody>
        </table>
    )
};
