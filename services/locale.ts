'use server';

import { cookies } from 'next/headers';
import { uLanguages, defaultLanguage } from '@/types/languages';
// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
    return (await cookies()).get(COOKIE_NAME)?.value || defaultLanguage;
}

export async function setUserLocale(language: uLanguages) {
    (await cookies()).set(COOKIE_NAME, language);
}