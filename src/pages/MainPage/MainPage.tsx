import { useTranslation } from 'react-i18next'

export default function MainPage() {
    const { t } = useTranslation('main')

    return <div>{t('MAIN')}</div>
}
