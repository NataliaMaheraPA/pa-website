export interface IContactFormData {
	name: string
	email: string
	message: string
}

	const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

export const sendContactForm = async (formData: IContactFormData): Promise<void> => {
	const response = await fetch(`${baseURL}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	})

	if (!response.ok) {
		const errorData = await response.json()
		throw new Error(errorData.message || 'An unexpected error occurred.')
	}
}
