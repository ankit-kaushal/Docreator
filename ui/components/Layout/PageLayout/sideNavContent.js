import {
	LayoutOutlined,
	FolderViewOutlined,
	// CoffeeOutlined,
	HomeOutlined,
	CloudUploadOutlined,
} from '@ant-design/icons';

const navRoute = ['/', '/sample'];

const navData = [
	{
		name: 'Home',
		path: '/',
		icon: <HomeOutlined />,
	},
	{
		name: 'AWB Generator',
		path: '/generate',
		icon: <LayoutOutlined />,
	},
	{
		name: 'AWB Sample',
		path: '/sample',
		icon: <FolderViewOutlined />,
	},
	{
		name: 'File Uploader',
		path: '/file-uploader',
		icon: <CloudUploadOutlined />,
	},
	// {
	// 	name: 'Support',
	// 	path: 'https://www.buymeacoffee.com/ankitkaushal',
	// 	icon: <CoffeeOutlined />,
	// },
];
export { navRoute };
export default navData;
