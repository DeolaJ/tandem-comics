import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

function Form({ _id }) {
  // Sets up basic data state
  const [formData, setFormData] = useState();

  // Sets up our form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Prepares the functions from react-hook-form
  const { register, handleSubmit, errors } = useForm();

  // Function for handling the form submission
  const onSubmit = async (data) => {
    // ... Submit handler
    setIsSubmitting(true);

    setFormData(data);

    try {
      await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    // Returns a "Submitting comment" state if being processed
    return <h3>Submitting comment…</h3>;
  }

  if (hasSubmitted) {
    // Returns the data that the user submitted for them to preview after submission
    return (
      <>
        <h3>Thanks for your comment! It will reflect when approved</h3>
        <ul>
          <li>
            {'Name: '}
            {formData.name}
            <br />
            {'Email: '}
            {formData.email}
            <br />
            {'Comment: '}
            {formData.body}
          </li>
        </ul>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg my-16" disabled>
      <h3 className="mb-4 text-xl">Add Comment</h3>
      <input ref={register} type="hidden" name="_id" value={_id} />

      <label className="block mb-5" htmlFor="user-name">
        <span className="text-gray-700">Name</span>
        <input
          name="name"
          ref={register({ required: true })}
          className="block w-full p-3 mt-1 text-sm border border-purple-600 form-input"
          placeholder="John Appleseed"
          id="user-name"
        />
      </label>

      <label className="block mb-5" htmlFor="user-email">
        <span className="text-gray-700">Email</span>
        <input
          name="email"
          type="email"
          ref={register({ required: true })}
          className="block w-full p-3 mt-1 text-sm border border-purple-600 form-input"
          placeholder="your@email.com"
          id="user-email"
        />
      </label>

      <label className="block mb-5" htmlFor="user-comment">
        <span className="text-gray-700">Comment</span>
        <textarea
          ref={register({ required: true })}
          name="body"
          className="block w-full p-3 mt-1 text-sm border border-purple-600 form-textarea"
          rows="3"
          placeholder="Enter some long form content."
          id="user-comment"
        />
      </label>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        type="submit"
        className="px-3 py-2 text-xs font-semibold text-purple-600 border-none rounded-sm cursor-pointer bg-purple-50 sm:text-sm sm:px-4 sm:py-3 hover:bg-purple-100"
      />
    </form>
  );
}

Form.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default Form;
