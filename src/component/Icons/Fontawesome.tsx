import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLock, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const arrow = <FontAwesomeIcon icon={faArrowDown} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} />;

export const lockIcon = <FontAwesomeIcon icon={faLock} />;
export const questionIcon = <FontAwesomeIcon icon={faQuestion} />;
export const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
export const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
export const exclamationIcon = <FontAwesomeIcon icon={faExclamation} />;
export const universityIcon = <FontAwesomeIcon icon={faUniversity} />;
export const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
export {arrow,emailIcon, githubIcon, linkedInIcon };
