// JobApplicationForm.js
import React from 'react';
import useForm from './useForm';
import validate from './validate';

const JobApplicationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: {
      JavaScript: false,
      CSS: false,
      Python: false,
      // Add more skills as needed
    },
    preferredInterviewTime: '',
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, validate);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Job Application Form</h1>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p>{errors.fullName}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>Applying for Position:</label>
        <select
          name="position"
          value={values.position}
          onChange={handleChange}
        >
          <option value="">Select a position</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      {(values.position === 'Developer' || values.position === 'Designer') && (
        <div>
          <label>Relevant Experience (years):</label>
          <input
            type="number"
            name="relevantExperience"
            value={values.relevantExperience}
            onChange={handleChange}
          />
          {errors.relevantExperience && <p>{errors.relevantExperience}</p>}
        </div>
      )}
      {values.position === 'Designer' && (
        <div>
          <label>Portfolio URL:</label>
          <input
            type="text"
            name="portfolioURL"
            value={values.portfolioURL}
            onChange={handleChange}
          />
          {errors.portfolioURL && <p>{errors.portfolioURL}</p>}
        </div>
      )}
      {values.position === 'Manager' && (
        <div>
          <label>Management Experience:</label>
          <input
            type="text"
            name="managementExperience"
            value={values.managementExperience}
            onChange={handleChange}
          />
          {errors.managementExperience && <p>{errors.managementExperience}</p>}
        </div>
      )}
      <div className="additional-skills">
        <label>Additional Skills:</label>
        <div>
          <input
            type="checkbox"
            name="JavaScript"
            checked={values.additionalSkills.JavaScript}
            onChange={handleChange}
          />
          <label>JavaScript</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="CSS"
            checked={values.additionalSkills.CSS}
            onChange={handleChange}
          />
          <label>CSS</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Python"
            checked={values.additionalSkills.Python}
            onChange={handleChange}
          />
          <label>Python</label>
        </div>
        {/* Add more checkboxes as needed */}
        {errors.additionalSkills && <p>{errors.additionalSkills}</p>}
      </div>
      <div>
        <label>Preferred Interview Time:</label>
        <input
          type="datetime-local"
          name="preferredInterviewTime"
          value={values.preferredInterviewTime}
          onChange={handleChange}
        />
        {errors.preferredInterviewTime && <p>{errors.preferredInterviewTime}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
