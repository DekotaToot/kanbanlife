import { useEffect, useState } from 'react';

export default function useIsMobile() {
	const [isMobile, setIsMobile] = useState(innerWidth < 640)

	useEffect(() => {
		const controller = new AbortController()
		addEventListener('resize', () => {
			setIsMobile(innerWidth < 640)
		}, {signal: controller.signal})

		return () => controller.abort()
	}, [])

	return isMobile
}