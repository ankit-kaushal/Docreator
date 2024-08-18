const getErrorMessage = (props) => {
	const { error, rules, label } = props;
	const errorMessage = [];

	if (error) {
		if (rules?.required && error.type === 'required') {
			errorMessage.push(error?.message || `${label} is Required`);
		}
		if ((rules?.min || rules?.min === 0) && error.type === 'min') {
			errorMessage.push(`${label} cannot be less than ${rules.min}`);
		}
		if (rules?.max && error.type === 'max') {
			errorMessage.push(`${label} cannot be greater than ${rules.max}`);
		}
		if (rules?.minLength && error.type === 'minLength') {
			errorMessage.push(
				`${label} should be ${rules.minLength} character(s) long`,
			);
		}
		if (rules?.maxLength && error.type === 'maxLength') {
			errorMessage.push(`${label} should be less than ${rules.maxLength}`);
		}
	}
	if (errorMessage.length) {
		return errorMessage.join(' ,');
	}
	return error?.message;
};

export default getErrorMessage;
