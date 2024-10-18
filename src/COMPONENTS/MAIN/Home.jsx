import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center p-4">
          <h3> <b>REGISTRATION FORM</b> </h3>
        </div>
        <div className="col-3"></div>
      </div>

      <div className="row">
        <div className="col-4"></div>
        <div className="col-4  text-light bg-secondary p-5 rounded">

        <Formik
            initialValues={{
              username: '',
              email: '',
              phone: '',
              dob: '',
              password: '',
              confirmPassword: '',
              termsAccepted: false,
              gender: '',
              profilePic: null,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = 'Username is required';
              }
              if (!values.email) {
                errors.email = 'Email is required';
              } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email is invalid';
              }
              if (!values.phone) {
                errors.phone = 'Phone number is required';
              } else if (!/^\d+$/.test(values.phone)) {
                errors.phone = 'Phone number 10 must be digits';
              }
              if (!values.dob) {
                errors.dob = 'Date of birth is required';
              }
              if (!values.password) {
                errors.password = 'Password is required';
              } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
              }
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords must match';
              }
              if (!values.termsAccepted) {
                errors.termsAccepted = 'You must accept the terms';
              }
              if (!values.gender) {
                errors.gender = 'Gender is required';
              }
              
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values); // Handle successful form submission (e.g., API call)
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ handleSubmit, handleChange, setFieldValue, values, touched, errors, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit} >
                <Form.Group style={{ marginBottom: '10px' }} controlId="formUsername">
                  <Form.Label >Username</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={touched.username && !!errors.username}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.username}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} controlId="formEmail">
                  <Form.Label >Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} controlId="formPhone">
                  <Form.Label >Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone no"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={touched.phone && !!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.phone}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} controlId="formDob">
                  <Form.Label >Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                    isInvalid={touched.dob && !!errors.dob}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.dob}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} controlId="formPassword">
                  <Form.Label >Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} controlId="formConfirmPassword">
                  <Form.Label >Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.confirmPassword}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} controlId="formGender">
                  <Form.Label >Gender</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    checked={values.gender === 'male'}
                    onChange={handleChange}
                    isInvalid={touched.gender && !!errors.gender}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    checked={values.gender === 'female'}
                    onChange={handleChange}
                    isInvalid={touched.gender && !!errors.gender}
                  />
                  <Form.Check
                    type="radio"
                    label="Other"
                    name="gender"
                    value="other"
                    checked={values.gender === 'other'}
                    onChange={handleChange}
                    isInvalid={touched.gender && !!errors.gender}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.gender}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} controlId="formProfilePic">
                  <Form.Label >Profile Picture (optional)</Form.Label>
                  <Form.Control
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("profilePic", event.currentTarget.files[0]);
                    }}
                    isInvalid={touched.profilePic && !!errors.profilePic}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.profilePic}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: '10px' }} id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I accept the terms and conditions"
                    name="termsAccepted"
                    checked={values.termsAccepted}
                    onChange={handleChange}
                    isInvalid={touched.termsAccepted && !!errors.termsAccepted}
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>{errors.termsAccepted}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" style={{ marginBottom: '10px' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Register'}
                </Button>
              </Form>
            )}
          </Formik>
          
        </div>
        <div className="col-4"></div>
      </div>

    </div>
  )
}

export default Home