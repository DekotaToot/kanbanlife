import { applyTheme } from '@material/material-color-utilities'
import theme from '../utils/theme.js'


const colorSchemeQuery = matchMedia('(prefers-color-scheme: dark)')

applyTheme(theme, {
	dark: colorSchemeQuery.matches,
	target: document.body
})

colorSchemeQuery.addEventListener('change', ev => {
	applyTheme(theme, {
		dark: ev.matches,
		target: document.body
	})
})