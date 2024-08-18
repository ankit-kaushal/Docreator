const CHECK_DIGIT_INDEX = 12;
const AWB_VALIDATE_DIVISOR = 7;
const AWB_PREFIX_LENGTH = 3;
const checkAWBValidation = (value = '') => {
	const awbDigits = value
		.slice(AWB_PREFIX_LENGTH, CHECK_DIGIT_INDEX)
		.replace(/-/g, '');
	const lastDigits = Number(value[CHECK_DIGIT_INDEX]);

	const remainder = Number(awbDigits) % AWB_VALIDATE_DIVISOR;

	if (value.trim() === '') {
		return 'Cannot be Empty';
	}
	if (!value.match(/[0-9]{3}-[0-9]{4}-[0-9]{4}$/)) {
		return 'Enter AWB number in this format xxx-xxxx-xxxx';
	}
	if (remainder !== lastDigits) {
		return `Last Digit should be ${remainder}`;
	}
	return true;
};
export default checkAWBValidation;
