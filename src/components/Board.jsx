import useStore from '../utils/store.js'
import StatusColumn from './StatusColumn.jsx'
import CreateCardBtn from './CreateCardBtn.jsx'
import '@material/web/icon/icon.js'
import '@material/web/tabs/tabs.js'
import '@material/web/tabs/primary-tab.js'
import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile.js'




export default function Board() {
	const statuses = useStore(state => state.statuses)
	const isMobile = useIsMobile()
	const [tabStatus, setTabStatus] = useState(statuses[0])

	return <>
		<main className='flex'>
			{isMobile ?
				<div className='w-full'>
					<md-tabs>
						{statuses.map(status =>
							status === tabStatus ?
								<md-primary-tab active onClick={() => setTabStatus(status)} key={status}>
									{status}
								</md-primary-tab>
							:
								<md-primary-tab onClick={() => setTabStatus(status)} key={status}>
									{status}
								</md-primary-tab>
						)}
					</md-tabs>
					<StatusColumn status={tabStatus}/>
				</div>
			: 
				statuses.map((status, index) => 
					<div className='w-1/3' key={index}>
						<h1 className='text-xl border-b'>{status}</h1>
						<StatusColumn status={status}/>
					</div>
				)
			}
		</main>
		<div className='fixed bottom-6 right-6 block'>
			<CreateCardBtn />
		</div>
	</>
}