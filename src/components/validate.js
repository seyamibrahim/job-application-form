// validate.js

export default function validate(values) {
  let errors = {};

  if (!values.fullName) {
    errors.fullName = 'Full Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!/^\d+$/.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone Number is invalid';
  }

  if (values.position === 'Developer' || values.position === 'Designer') {
    if (!values.relevantExperience) {
      errors.relevantExperience = 'Relevant Experience is required';
    } else if (values.relevantExperience <= 0) {
      errors.relevantExperience = 'Experience must be greater than 0';
    }
  }

  if (values.position === 'Designer') {
    if (!values.portfolioURL) {
      errors.portfolioURL = 'Portfolio URL is required';
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL)) {
      errors.portfolioURL = 'Portfolio URL is invalid';
    }
  }

  if (values.position === 'Manager') {
    if (!values.managementExperience) {
      errors.managementExperience = 'Management Experience is required';
    }
  }

  if (!Object.values(values.additionalSkills).some(skill => skill)) {
    errors.additionalSkills = 'At least one skill must be selected';
  }

  if (!values.preferredInterviewTime) {
    errors.preferredInterviewTime = 'Preferred Interview Time is required';
  }

  return errors;
}
