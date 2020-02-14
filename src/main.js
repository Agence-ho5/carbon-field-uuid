/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class UUIDField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = (e) => {
		const { id, onChange } = this.props;

		onChange(id, e.target.value);
	}

	createUUID() {
		let dt = new Date().getTime();
		let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			let r = (dt + Math.random() * 16) % 16 | 0;
			dt = Math.floor(dt / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;
	}

	/**
	 * Render a uuid input field.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			name
		} = this.props;
		let value = this.props.value;
		if (!value) {
			value = this.createUUID();
		}

		return (
			<input
				type="hidden"
				id={id}
				name={name}
				value={value}
				className="cf-uuid__input"
			/>
		);
	}
}

export default UUIDField;
