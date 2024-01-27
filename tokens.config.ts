import { defineTheme } from 'pinceau'

export default defineTheme({
	elements: {
		text: {
			secondary: {
				color: {
					static: {
						initial: '{color.gray.900}'
					}
				}
			}
		},
		backdrop: {
			background: '#f4f5f4'
		}
	},

	prose: {
		li: {
			margin: '5px '
		},

		table: {
			margin: '14px 0',
			lineHeight: '.6rem'
		}
	},

	docus: {
		body: {
			backgroundColor: {
				initial: '#f4f5f4'
			},
		},
		header: {
			title: {
				fontSize: '1.2rem',
				fontWeight: '500'
			}
		}
	}
})
