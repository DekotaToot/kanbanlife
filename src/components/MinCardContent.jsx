import '@material/web/chips/chip-set.js'
import '@material/web/chips/assist-chip.js'

export default function MinCardContent({title, labels, ...props}) {

	return <>
		<h2>{title}</h2>
		<md-chip-set>
			{labels.map((label, index) => <md-assist-chip label={label} key={index}></md-assist-chip>)}
		</md-chip-set>
	</>
}