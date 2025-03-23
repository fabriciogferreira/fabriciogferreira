import { useLocale } from 'next-intl';
import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';
import { uLanguages } from '@/types/languages';

export default function LocaleSwitcher() {
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect
            defaultValue={locale as uLanguages}
        />
    );
}