// import {
    // Props as CalendarProps,
// } from 'react-activity-calendar'
// import { useTranslations } from 'next-intl';

// import GitHubCalendar from 'react-github-calendar';
import Image from 'next/image';
import { images } from '@/types/images';

export default function Statistics() {
    // const tWeekdays = useTranslations('WeekDays');
    // const tMonths = useTranslations('Months');
    
    // const labels = {
    //     months: [
    //         tMonths('january'),
    //         tMonths('february'),
    //         tMonths('march'),
    //         tMonths('april'),
    //         tMonths('may'),
    //         tMonths('june'),
    //         tMonths('july'),
    //         tMonths('august'),
    //         tMonths('september'),
    //         tMonths('october'),
    //         tMonths('november'),
    //         tMonths('december'),
    //     ],
    //     weekdays: [
    //         tWeekdays('sunday'), // Sunday first!
    //         tWeekdays('monday'),
    //         tWeekdays('tuesday'),
    //         tWeekdays('wednesday'),
    //         tWeekdays('thursday'),
    //         tWeekdays('friday'),
    //         tWeekdays('saturday'),
    //     ],
    //     totalCount: '{{count}} activities in {{year}}',
    //     legend: {
    //         less: 'Less',
    //         more: 'More',
    //     },
    // } satisfies CalendarProps['labels']
    return (
        <>
            {/* <GitHubCalendar
                username="fabriciogferreira"
                showWeekdayLabels={true}
                labels={labels}
            /> */}
            <Image src={images.statistics.github.contributions} alt='contributions'/>
            {/* Exercicios
            Quntidades de exercícios
            Quantidades de projetos
            Contrbution Graph
            Anos de experiência
            Quantidade de exercícios */}
        </>
    )
}