import { z } from 'zod'

// Validation regex for name field:
// Allows any Unicode letters (\p{L}), including Latin, Cyrillic, and others,
// along with apostrophes ('’‘), hyphens (-), dots (.), and spaces.
export const nameRegex = /^[\p{L}'’‘\-.\s]+$/u

const noSpacesOnlyRule = (value: string) => value.trim().length > 0

export const createContactFormSchema = (t: (key: string) => string) =>
	z.object({
		name: z
			.string()
			.nonempty({ message: t('validation.nameRequired') })
			.min(2, { message: t('validation.nameMin') })
			.max(50, { message: t('validation.nameMax') })
			.trim()
			.regex(nameRegex),
		email: z.email({ message: t('validation.email') }),
		message: z
			.string()
			.nonempty({ message: t('validation.textareaRequired') })
			.min(1, { message: t('validation.textareaMin') })
			.max(1000, { message: t('validation.textareaMax') })
			.trim()
			.refine(noSpacesOnlyRule, {
				message: 'Invalid',
			}),
		agreement: z.boolean().refine(val => val === true, {
			message: t('validation.agreementRequired'),
		}),
	})

export type ContactFormSchemaType = z.infer<ReturnType<typeof createContactFormSchema>>
