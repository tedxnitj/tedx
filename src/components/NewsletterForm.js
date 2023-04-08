import { useState } from 'react';
// import { sanitize } from '../../../utils/miscellaneous';
// import Loading from '../../loading';

const NewsletterForm = ({ status, message, onValidated }) => {

  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  // const [loading, setLoading] = useState(false);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }
    fetch('https://tedx.cyclic.app/api/emails/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('error ', error)
      });


    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ("0" !== result?.[0]?.trim()) {
      //   return sanitize(message);
      return message;
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? formattedMessage : null;
  }

  return (
    <div className='email__section row'>
      {/* <h3 className="mb-1 uppercase font-bold">Subscribe to newsletter</h3> */}


      <input
        onChange={(event) => setEmail(event?.target?.value ?? '')}
        type="email"
        placeholder="Enter your email"
        className="col-md-6 col-sm-12"
        onKeyUp={(event) => handleInputKeyEvent(event)}
      />


      <button className="btn btn-danger btn-block btn-lg col-md-6 col-sm-12" onClick={handleFormSubmit}>
        INSPIRE ME
      </button>


      <div className="text-left message">
        {'sending' === status ? "Sending.." : null}
        {'error' === status || error ? (
          <h6
            className="text-danger"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {'success' === status && 'error' !== status && !error && (
          <h6 className="text-success font-bold" dangerouslySetInnerHTML={{ __html: message }} />
        )}
      </div>
    </div>
  );
}

export default NewsletterForm