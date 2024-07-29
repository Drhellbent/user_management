# SignInForm Test Cases

## 1. Render the Component
- **Description**: Check if the `SignInForm` component renders correctly.
- **Steps**:
  - Render the `SignInForm` component.
  - Verify that the title "Welcome" is present.
  - Verify that the "Log in" button is present.

## 2. Check Input Fields
- **Description**: Verify that the email and password input fields are present.
- **Steps**:
  - Render the `SignInForm` component.
  - Verify that the email input field is present.
  - Verify that the password input field is present.

## 3. Button Disabled Initially
- **Description**: Ensure the "Log in" button is disabled when the form is first rendered.
- **Steps**:
  - Render the `SignInForm` component.
  - Verify that the "Log in" button is disabled.

## 4. Input Validation (Valid Email and Password)
- **Description**: Enter a valid email and a valid password and confirm that the "Log in" button becomes enabled.
- **Steps**:
  - Render the `SignInForm` component.
  - Enter a valid email into the email input field.
  - Enter a valid password (at least 8 characters) into the password input field.
  - Verify that the "Log in" button is enabled.

## 5. Input Validation (Invalid Email)
- **Description**: Enter an invalid email and a valid password and check that the "Log in" button remains disabled.
- **Steps**:
  - Render the `SignInForm` component.
  - Enter an invalid email into the email input field.
  - Enter a valid password into the password input field.
  - Verify that the "Log in" button is disabled.

## 6. Display Error Message on Invalid Login
- **Description**: Simulate entering an invalid email and password combination and verify that an error message is displayed.
- **Steps**:
  - Render the `SignInForm` component.
  - Enter an invalid email into the email input field.
  - Enter an invalid password into the password input field.
  - Click the "Log in" button.
  - Verify that the error message "Invalid Password or Email" is displayed.

## 7. Navigate to Dashboard on Successful Login
- **Description**: Simulate entering valid credentials and ensure the user is redirected to the dashboard page.
- **Steps**:
  - Render the `SignInForm` component.
  - Enter a valid email into the email input field.
  - Enter a valid password into the password input field.
  - Click the "Log in" button.
  - Verify that the user is redirected to the dashboard page.

## 8. Redirect to Sign Up Page
- **Description**: Click on the "Sign Up" link and verify that the user is redirected to the sign-up page.
- **Steps**:
  - Render the `SignInForm` component.
  - Click on the "Sign Up" link.
  - Verify that the user is redirected to the sign-up page.
