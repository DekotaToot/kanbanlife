import { argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities'

const theme = themeFromSourceColor(argbFromHex('#86acf1'))

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