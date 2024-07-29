# SignUpForm Test Cases

## 1. Render the Component
- **Description**: Check if the `SignUpForm` component renders correctly.
- **Steps**:
  - Render the `SignUpForm` component.
  - Verify that the title "Sign up" is present.
  - Verify that the "Create Account" button is present.

## 2. Check Input Fields
- **Description**: Verify that the input fields for name, email, password, and confirm password are present.
- **Steps**:
  - Render the `SignUpForm` component.
  - Verify that the input fields for Full Name, Email, Password, and Confirm Password are present.

## 3. Button Disabled Initially
- **Description**: Ensure the "Create Account" button is disabled when the form is first rendered.
- **Steps**:
  - Render the `SignUpForm` component.
  - Verify that the "Create Account" button is disabled.

## 4. Input Validation (Valid Name, Email, and Password)
- **Description**: Enter a valid name, valid email, and matching passwords, and confirm that the "Create Account" button becomes enabled.
- **Steps**:
  - Render the `SignUpForm` component.
  - Enter a name with at least 2 characters.
  - Enter a valid email address.
  - Enter a password (at least 8 characters).
  - Enter the same password in the confirm password field.
  - Verify that the "Create Account" button is enabled.

## 5. Input Validation (Invalid Email)
- **Description**: Enter an invalid email and check that the "Create Account" button remains disabled.
- **Steps**:
  - Render the `SignUpForm` component.
  - Enter an invalid email address.
  - Enter a valid password and confirm password.
  - Verify that the "Create Account" button remains disabled.

## 6. Password Mismatch
- **Description**: Enter matching passwords and verify that the button is enabled. Then, enter different passwords and confirm that the button is disabled.
- **Steps**:
  - Render the `SignUpForm` component.
  - Enter matching passwords in the password and confirm password fields.
  - Verify that the "Create Account" button is enabled.
  - Enter non-matching passwords and verify that the "Create Account" button is disabled.

## 7. Display Error Message on Failed Signup
- **Description**: Simulate entering valid data but receiving a failed signup response, and verify that an error message is displayed.
- **Steps**:
  - Render the `SignUpForm` component.
  - Enter valid name, email, and matching passwords.
  - Simulate a failed signup response.
  - Click the "Create Account" button.
  - Verify that the error message "Unable To Login" is displayed.

## 8. Navigate to Dashboard on Successful Signup
- **Description**: Simulate entering valid credentials and a successful signup response, and ensure the user is redirected to the dashboard page.
- **Steps**:
  - Render the `SignUpForm` component.
  - Enter valid name, email, and matching passwords.
  - Simulate a successful signup response.
  - Click the "Create Account" button.
  - Verify that the user is redirected to the dashboard page.

## 9. Redirect to Sign In Page
- **Description**: Click on the "Log in" link and verify that the user is redirected to the sign-in page.
- **Steps**:
  - Render the `SignUpForm` component.
  - Click on the "Log in" link.
  - Verify that the user is redirected to the sign-in page.
