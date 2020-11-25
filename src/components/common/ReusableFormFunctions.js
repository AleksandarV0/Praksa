import { useState } from 'react';

const ReusableFormFunctions = (initialFieldValues, validate) => {
	const [values, setValues] = useState(initialFieldValues);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const fieldValue = { [name]: value };
		setValues({
			...values,
			...fieldValue,
		});
		if (validate) {
			validate(fieldValue);
		}
	};

	return {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChange,
	};
};

export default ReusableFormFunctions;
