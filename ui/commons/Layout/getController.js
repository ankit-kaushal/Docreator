import {
	InputController,
	TextAreaController,
	SelectController,
	DatepickerController,
} from '../Controller';

const getElementController = (type = 'text') => {
	switch (type) {
		case 'text':
			return InputController;

		case 'textarea':
			return TextAreaController;

		case 'number':
			return InputController;

		case 'select':
			return SelectController;

		case 'date_picker':
			return DatepickerController;

		default:
			return null;
	}
};

export default getElementController;
