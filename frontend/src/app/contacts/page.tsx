import ContactsPage from '@/components/pages/contacts/ContactsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты - Melpomena',
}

export default function page() {
	return <ContactsPage />
}
