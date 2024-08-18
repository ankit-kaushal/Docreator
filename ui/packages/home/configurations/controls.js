const controls = () => ({
	content: [
		{
			name: 'content',
			label: '',
			type: 'textarea',
			span: 12,
			rows: 12,
			rules: {
				required: 'Content is Required',
			},
		},
	],
	settings: [
		{
			name: 'slug',
			type: 'text',
			label: 'Slug',
			showOptional: false,
			placeholder: 'Enter Slug',
			span: 6,
		},
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			span: 6,
			placeholder: 'Enter Title',
		},
		{
			name: 'expiry',
			label: 'Expiry',
			type: 'select',
			placeholder: 'Select Expiry',
			span: 6,
			options: [
				{ label: '1 Day', value: '1_day' },
				{ label: '2 Days', value: '2_day' },
				{ label: '1 Week', value: '1_week' },
				{ label: '1 Month', value: '1_month' },
				{ label: 'Never', value: 'Never' },
			],
			rows: 6,
		},
	],
});

export default controls;
