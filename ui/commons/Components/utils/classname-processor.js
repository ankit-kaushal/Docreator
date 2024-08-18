import config from './config.json';

const { NAMESPACE, PRESET, VALID_PRESETS } = config;

const cl = (...args) => {
	const [template, ...values] = args;
	let final = '';
	template.forEach((templateString) => {
		const value = values.shift() || '';
		final += templateString.toString() + value.toString();
	});
	final = final.replace(/[\t\n]/g, ' ').trim();
	final = final.replace(/\s\s+/g, ' ').trim();
	return final;
};

cl.namespace = (classname) => {
	if (!classname) return '';
	return `${NAMESPACE}_${classname}`;
};

cl.preset = (presetKey, presetValue) => {
	if (!presetValue) return '';
	if (!presetKey || !VALID_PRESETS.includes(presetKey)) return '';
	return `${PRESET}_${presetKey}_${presetValue}`;
};

cl.ns = cl.namespace;
cl.ps = cl.preset;

export default cl;
