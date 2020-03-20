import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';

const AddChild = (props) => {

	const onSubmit = (e) => {
		e.preventDefault();
		props.setChildModal(false)
	}
	return (
		<Form>
			<Form.Field>
				<label>Name</label>
				<input placeholder='Member' />
			</Form.Field>
			<Form.Field>
				<Checkbox label='Child?' />
			</Form.Field>
			<Button onClick={onSubmit} type='submit'>Add</Button>
		</Form>
	)
}

export default AddChild