import { INodeProperties } from 'n8n-workflow';

export const pdfOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['pdf'],
			},
		},
		options: [
			{
				name: 'Count PDF Pages',
				value: 'count',
				action: 'Count pdf pages a pdf',
			},
			{
				name: 'Split PDF Files',
				value: 'split',
				description: 'Split a PDF file into multiple files',
				action: 'Split pdf files a pdf',
			},
			{
				name: 'PDF Merge',
				value: 'merge',
				description: 'Merge multiple pdf files to a single pdf',
				action: 'PDF Merge a pdf',
			},
			{
				name: 'HTML to PDF',
				value: 'html',
				description: 'Converts HTML Code or a URL to PDF with options',
				action: 'Html to pdf a pdf',
			},
		],
		default: 'count',
	},
];

export const pdfFields: INodeProperties[] = [
	// pdf: count
	{
		displayName: 'URL or Binary Data',
		name: 'datatype',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				operation: ['count', 'split'],
				resource: ['pdf'],
			},
		},
		options: [
			{
				name: 'URL',
				value: 'url',
			},
			{
				name: 'Binary Data',
				value: 'buffer',
			},
		],
		default: 'url',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['count', 'split'],
				resource: ['pdf'],
				datatype: ['url'],
			},
		},
		default: '',
	},
	{
		displayName: 'Binary Data',
		name: 'buffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['count', 'split'],
				resource: ['pdf'],
				datatype: ['buffer'],
			},
		},
		default: '',
	},
	// pdf: split
	{
		displayName: 'How Do You Want to Split the PDF?',
		name: 'splitmethod',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				operation: ['split'],
				resource: ['pdf'],
			},
		},
		options: [
			{
				name: 'Page Ranges',
				value: 'pageranges',
			},
			{
				name: 'Interval',
				value: 'interval',
			},
		],
		default: 'pageranges',
		description: 'Either split by page ranges or interval',
	},
	{
		displayName: 'Page Ranges',
		name: 'pages',
		type: 'fixedCollection',
		required: true,
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: ['split'],
				resource: ['pdf'],
				splitmethod: ['pageranges'],
			},
		},
		description: 'Specify the page ranges to split the pdf into',
		options: [
			{
				displayName: 'Page Range',
				name: 'range',
				values: [
					{
						displayName: 'Start Page',
						name: 'startPage',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'End Page',
						name: 'endPage',
						type: 'number',
						default: 0,
					},
				],
			},
		],
	},
	{
		displayName: 'Interval',
		name: 'interval',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['split'],
				resource: ['pdf'],
				splitmethod: ['interval'],
			},
		},
		default: 1,
	},
	// pdf: merge
	{
		displayName: 'Files to Merge',
		name: 'files',
		type: 'collection',
		required: true,
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: ['merge'],
				resource: ['pdf'],
			},
		},
		options: [
			{
				displayName: 'Files',
				name: 'files',
				values: [
					{
						displayName: 'File Url or Binary Data',
						name: 'filetype',
						type: 'string',
						default: '',
						description: 'URL of the PDF file or the raw binary data',
					},
					{
						displayName: 'Page Ranges',
						name: 'pages',
						type: 'fixedCollection',
						default: {},
						typeOptions: {
							multipleValues: true,
						},
						description: 'Specify the page ranges to split the pdf into',
						options: [
							{
								displayName: 'Page Ranges',
								name: 'range',
								values: [
									{
										displayName: 'Start Page',
										name: 'startPage',
										type: 'number',
										default: 0,
									},
									{
										displayName: 'End Page',
										name: 'endPage',
										type: 'number',
										default: 0,
									},
								],
							},
						],
					},
				],
			},
		],
	},
	// pdf: html
	{
		displayName: 'URL or HTML Code',
		name: 'htmlSource',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				operation: ['html'],
				resource: ['pdf'],
			},
		},
		options: [
			{
				name: 'URL',
				value: 'url',
			},
			{
				name: 'HTML',
				value: 'html',
			},
		],
		default: 'url',
	},
	{
		displayName: 'URL',
		name: 'htmlUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['html'],
				resource: ['pdf'],
				htmlSource: ['url'],
			},
		},
		default: '',
	},
	{
		displayName: 'HTML Code',
		name: 'htmlCode',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				operation: ['html'],
				resource: ['pdf'],
				htmlSource: ['html'],
			},
		},
		default: '',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				operation: ['html'],
				resource: ['pdf'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'PDF Format',
				name: 'format ',
				type: 'options',
				options: [
					{
						name: 'A0',
						value: 'A0',
					},
					{
						name: 'A1',
						value: 'A1',
					},
					{
						name: 'A2',
						value: 'A2',
					},
					{
						name: 'A3',
						value: 'A3',
					},
					{
						name: 'A4',
						value: 'A4',
					},
					{
						name: 'A5',
						value: 'A5',
					},
					{
						name: 'A6',
						value: 'A6',
					},
					{
						name: 'Ledger',
						value: 'Ledger',
					},
					{
						name: 'Legal',
						value: 'Legal',
					},
					{
						name: 'Letter',
						value: 'Letter',
					},
					{
						name: 'Tabloid',
						value: 'Tabloid',
					},
				],
				default: 'Letter',
				description: 'Paper format. Defaults to Letter.',
			},
			{
				displayName: 'Scale',
				name: 'scale',
				type: 'number',
				default: 1,
				description:
					'Scale of the webpage rendering. Defaults to 1. Scale amount must be between 0.1 and 2.',
			},
			{
				displayName: 'Landscape',
				name: 'landscape',
				type: 'boolean',
				default: false,
				description: 'Whether the pdf should use landscape mode',
			},
			{
				displayName: 'Print Background Graphics',
				name: 'printBackground',
				type: 'boolean',
				default: false,
			},
		],
	},
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				operation: ['html', 'merge'],
				resource: ['pdf'],
			},
		},
		default: false,
		description: 'Whether you want the PDF as an URL',
	},
];
