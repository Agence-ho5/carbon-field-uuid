/**
 * External dependencies.
 */
import { registerFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import UUIDField from './main';

registerFieldType('uuid', UUIDField);
