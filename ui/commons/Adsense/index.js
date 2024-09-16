import { useEffect } from 'react';

function Adsense({ client, slot, format = 'auto', responsive = 'true' }) {
	useEffect(() => {
		try {
			// eslint-disable-next-line no-undef
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) {
			console.error(e);
		}
	}, []);

	return (
		<div style={{ display: 'block' }}>
			<ins
				className="adsbygoogle"
				style={{ display: 'block' }}
				data-ad-client={client}
				data-ad-slot={slot}
				data-ad-format={format}
				data-full-width-responsive={responsive}
			/>
		</div>
	);
}

export default Adsense;
