import { useEffect, useState } from 'react';

const formatTime = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

const UtilityInfoBlock = () => {
    const [now, setNow] = useState<Date>(() => new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const time = formatTime(now);

    return (
        <div className="block-bg-gradient secondary-block utility-info-block">
            <div className='flex justify-between'><span>Time</span><span>{time}</span></div>
            <div className='flex justify-between'><span>Gil</span><span>$0</span></div>

        </div>
    );
}

export default UtilityInfoBlock;