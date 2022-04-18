import React from "react";

const Blogs = () => {
  return (
    <div className='container'>
      <div className='mb-5'>
        <h2 className='text-secondary'>
          Q. Difference between authorization and authentication?
        </h2>
        <div>
          <h4>#. Authentication</h4>
          <ul className='fs-5'>
            <li>
              Identify of the users are chekced for providing access to the
              system
            </li>
            <li>confirms identity to grant access to system</li>
            <li>Verification</li>
            <li>Done before authorization</li>
          </ul>
        </div>
        <div>
          <h4>#. Authorization</h4>
          <ul className='fs-5'>
            <li>User authorities are checked for accessing the resource</li>
            <li>Validate whether user is authorize to access resource</li>
            <li>Validation</li>
            <li>Done after authentication</li>
          </ul>
        </div>
      </div>
      <div className='mb-5'>
        <h2 className='text-secondary'>
          Q. Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <div>
          <h4>#. Why using firebase?</h4>
          <ul className='fs-5'>
            <li>Its free(While starting out)</li>
            <li>Incredibly simple backend solution</li>
            <li>Its exchaustive</li>
            <li>Intelligent structuring of cloud Firebase database</li>
            <li>Cloud Functions and Google Analytics</li>
          </ul>
          <p>
            "Firebase manages all data real-time in the database. So, the
            exchange of data to and fro from the database is easy and quick"
          </p>
        </div>

        <div>
          <h4>
            #. What other options do you have to implement authentication?
          </h4>
          <ul className='fs-5'>
            <li>STYTCH</li>
            <li>Ory</li>
            <li>Supabase</li>
            <li>Okta</li>
            <li>PingIdentity</li>
            <li>Keycloak</li>
            <li>Frontegg</li>
            <li>Authress</li>
            <li>Auth0</li>
            <li>Amazon Cognito</li>
            <li>OneLogin</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className='text-secondary'>
          Q. What other services does firebase provide other than
          authentication?
        </h2>
        <ul className='fs-5'>
          <li>Cloud Firestore.</li>
          <li>Cloud Functions.</li>
          <li>Hosting.</li>
          <li>Cloud Storage.</li>
          <li>Google Analytics.</li>
          <li>Predictions.</li>
          <li>Cloud Messaging.</li>
          <li>Remote Config</li>
          <li>Dynamic Links</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
