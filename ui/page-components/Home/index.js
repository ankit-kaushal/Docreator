import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './styles.module.css';

const svgStyle = {
	backgroundImage: `url(${'generate.svg'})`,
	backgroundSize: 'contain', // Adjust as needed
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right',
	height: '75vh',
};

function Home() {
	const router = useRouter();
	return (
		<div style={svgStyle} className={styles.home_container}>
			<span className={styles.title}>WELCOME TO DOCREATOR</span>
			<div className={styles.generate}>
				<Button
					type="primary"
					shape="circle"
					size="small"
					icon={<PlusOutlined />}
					onClick={() => {
						router.push('/generate');
					}}
				/>
				<span>Start Generating</span>
			</div>
			{/* <div className={styles.generate_image}>
        <img
          src="generate.svg"
          alt="asset"
          style={{ maxWidth: '50%', height: 'auto', maxHeight: '50%' }}
        />
      </div> */}
			<div className={styles.developer}>
				<span className={styles.design}>Designed & Developed by</span>
				<Link href="https://www.ankitkaushal.tech/" className={styles.my_name}>
					Ankit Kaushal
				</Link>
			</div>
		</div>
	);
}

export default Home;
