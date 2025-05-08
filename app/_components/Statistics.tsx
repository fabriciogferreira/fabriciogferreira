"use client";
import {
    Props as CalendarProps,
    ThemeInput
} from 'react-activity-calendar'
import React, { useEffect, useState } from 'react';
import { ActivityCalendar, Activity } from 'react-activity-calendar';
import { useTranslations } from 'next-intl';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

type ContributionDay = {
    date: string;
    contributionCount: number;
};

type ContributionDays = ContributionDay[]

type Weeks = {
    contributionDays: ContributionDays
}[];

const theme: ThemeInput = {
    light: ['#e8f5e9', '#c8e6c9', '#81c784', '#388e3c', '#1b5e20'],
    dark: ['#1b1f1b', '#2e7d32', '#4caf50', '#81c784', '#c8e6c9'],
};

export default function Statistics() {
    const [data, setData] = useState<Activity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const tWeekdays = useTranslations('WeekDays');
    const tMonths = useTranslations('Months');
    const t = useTranslations('Statistics');

    const labels = {
        months: [
            tMonths('january'),
            tMonths('february'),
            tMonths('march'),
            tMonths('april'),
            tMonths('may'),
            tMonths('june'),
            tMonths('july'),
            tMonths('august'),
            tMonths('september'),
            tMonths('october'),
            tMonths('november'),
            tMonths('december'),
        ],
        weekdays: [
            tWeekdays('sunday'),
            tWeekdays('monday'),
            tWeekdays('tuesday'),
            tWeekdays('wednesday'),
            tWeekdays('thursday'),
            tWeekdays('friday'),
            tWeekdays('saturday'),
        ],
        totalCount: t('total_contributions'),
        legend: {
            less: t('legend.less'),
            more: t('legend.more'),
        },
    } satisfies CalendarProps['labels']

    const fetchContributions = async () => {
        const query = `
            query {
                user(login: "${"fabriciogferreira"}") {
                    contributionsCollection {
                        contributionCalendar {
                            weeks {
                                contributionDays {
                                    date
                                    contributionCount
                                }
                            }
                        }
                    }
                }
            }
        `;

        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTRIBUTION_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        });

        const json = await response.json();

        const weeks: Weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;

        const flattened: Activity[] = weeks.flatMap((week) =>
            week.contributionDays.map((day: ContributionDay) => ({
                date: day.date,
                count: day.contributionCount,
                level: getLevel(day.contributionCount),
            }))
        );

        setData(flattened);
    };

    useEffect(() => {
        fetchContributions()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const getLevel = (count: number): number => {
        if (count === 0) return 0;
        if (count < 5) return 1;
        if (count < 10) return 2;
        if (count < 20) return 3;
        return 4;
    };

    return (
        <>
            <ActivityCalendar
                loading={loading}
                data={data}
                showWeekdayLabels
                labels={labels}
                theme={theme}
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                        'data-tooltip-id': 'react-tooltip',
                        'data-tooltip-html': t('contributions_in_date', {count: activity.count, date: activity.date}),
                    })
                }
                renderColorLegend={(block, level) => (
                    React.cloneElement(block, {
                        'data-tooltip-id': 'react-tooltip',
                        'data-tooltip-html': t('level_x', {level: level}),
                    })
                )}
            />
            <ReactTooltip id="react-tooltip" />
        </>
    );
};
