import InstagramIcon from '@/assets/icons/contactUs/instagram.svg'
import BehanceIcon from '@/assets/icons/contactUs/behance.svg'
import DribbleIcon from '@/assets/icons/contactUs/dribble.svg'
import LinkedinIcon from '@/assets/icons/contactUs/linkedin.svg'

export const socialLinks = [
	{
		label: 'linkedin',
		icon: <LinkedinIcon />,
		url: 'https://www.linkedin.com/company/pettersonapps/posts/?feedView=all',
	},
	{
		label: 'instagram',
		icon: <InstagramIcon />,
		url: 'https://www.instagram.com/petterson.apps/?hl=en',
	},
	{
		label: 'behance',
		icon: <BehanceIcon />,
		url: 'https://www.behance.net/petterson_apps',
	},
	{
		label: 'dribble',
		icon: <DribbleIcon />,
		url: 'https://dribbble.com/petterson_apps',
	},
] as const
