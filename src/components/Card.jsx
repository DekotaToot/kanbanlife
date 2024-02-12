

export default function Card({children, ...props}) {


	return <>
		<div {...props} className='bg-gradient-to-r from-blue-100 to-transparent rounded-2xl flex flex-col space-y-2 p-2'>
			{children}
		</div>
	</>
}