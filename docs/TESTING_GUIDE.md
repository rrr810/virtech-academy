# Zapier Webhook Integration - Testing Guide

## Overview
This guide will help you test the Zapier webhook integration for all three forms on the Virtech Academy website.

## Prerequisites
- Ensure you have access to your Zapier account
- The webhook URL is: `https://hooks.zapier.com/hooks/catch/25228794/u8m268w/`
- Open the website in a modern browser (Chrome, Firefox, Edge, Safari)

## Testing Steps

### 1. Test Contact Form (index.html)

**Location:** Main page, scroll down to the "Contact Us" section

**Steps:**
1. Open `index.html` in your browser
2. Scroll to the Contact section
3. Fill in the form:
   - Full Name: Enter a test name
   - Email: Enter a valid email address
   - Course Interest: Select any course
   - Message: Enter a test message
4. Click "Submit" button
5. **Expected Behavior:**
   - Button text changes to "Submitting..."
   - Button becomes disabled during submission
   - Success alert: "Thank you for contacting us! We will get back to you soon."
   - Form fields are cleared after successful submission

**Data Sent to Zapier:**
```json
{
  "formType": "contact",
  "name": "Test Name",
  "email": "test@example.com",
  "courseInterest": "web-dev",
  "message": "Test message",
  "submittedAt": "2025-01-XX..."
}
```

---

### 2. Test Booking Form (index.html or booking.html)

**Location:** 
- Main page: Scroll to "Book Your Session" section
- OR open `booking.html` directly

**Steps:**
1. Navigate to the booking form
2. Fill in all required fields:
   - Full Name: Enter a test name
   - Email: Enter a valid email address
   - Contact Number: Enter a valid phone (e.g., +254740793959)
   - Course Interest: Select any course
   - Preferred Date: Select a future date
   - Preferred Time: Select a time slot
   - Session Type: Select a session type
   - Additional Information: (Optional) Enter any notes
3. Click "Book Session" button
4. **Expected Behavior:**
   - Button text changes to "Submitting..."
   - Button becomes disabled during submission
   - Success alert: "Booking submitted successfully! We will contact you to confirm your session."
   - Form fields are cleared after successful submission

**Data Sent to Zapier:**
```json
{
  "formType": "booking",
  "fullName": "Test Name",
  "email": "test@example.com",
  "contact": "+254740793959",
  "courseInterest": "ai",
  "preferredDate": "2025-02-15",
  "preferredTime": "morning",
  "sessionType": "consultation",
  "additionalInfo": "Test booking",
  "submittedAt": "2025-01-XX..."
}
```

---

### 3. Test Enrollment Form (enroll.html)

**Location:** Open `enroll.html` directly

**Steps:**
1. Open `enroll.html` in your browser
2. Fill in all required fields:
   - Full Name: Enter a test name
   - Email: Enter a valid email address
   - Contact Number: Enter a valid phone
   - Age: Enter age between 10-100
   - Course Interest: Select any course
   - Additional Information: (Optional) Enter any notes
3. Click "Submit Enrollment" button
4. **Expected Behavior:**
   - Button text changes to "Submitting..."
   - Button becomes disabled during submission
   - Success alert: "Enrollment submitted successfully! We will contact you soon to confirm your enrollment."
   - Form fields are cleared after successful submission

**Data Sent to Zapier:**
```json
{
  "formType": "enrollment",
  "fullName": "Test Name",
  "email": "test@example.com",
  "contact": "+254740793959",
  "age": "25",
  "courseInterest": "programming",
  "additionalInfo": "Test enrollment",
  "submittedAt": "2025-01-XX..."
}
```

---

## Validation Testing

All forms maintain their original validation. Test these scenarios:

### Invalid Email
- Enter invalid email format (e.g., "notanemail")
- Expected: Alert "Please enter a valid email address."

### Invalid Phone Number
- Enter invalid phone (e.g., "123")
- Expected: Alert "Please enter a valid contact number."

### Past Date (Booking Form)
- Select a date in the past
- Expected: Alert "Please select a date that is not in the past."

### Empty Required Fields
- Leave any required field empty
- Expected: Specific alert for that field

---

## Verifying Data in Zapier

1. Log into your Zapier account
2. Go to your Zap that uses this webhook
3. Check the "Task History" or "Zap History"
4. You should see entries for each form submission
5. Verify the data structure matches the examples above
6. Check that the `formType` field correctly identifies each form

---

## Troubleshooting

### Form Doesn't Submit
- Check browser console (F12) for errors
- Verify internet connection
- Ensure Zapier webhook URL is correct

### Error Alert Appears
- Error message: "There was an error submitting your form..."
- Check browser console for detailed error
- Verify Zapier webhook is active and accepting requests
- Check if there are any CORS issues

### Data Not Appearing in Zapier
- Verify the webhook URL is correct
- Check if the Zap is turned ON
- Look in Zapier's Task History for failed tasks
- Ensure the webhook trigger is properly configured

---

## Browser Console Testing

For advanced debugging, open browser console (F12) and check:
- Network tab: Look for POST request to Zapier webhook
- Console tab: Check for any error messages
- The response status should be 200 OK for successful submissions

---

## Success Criteria

✅ All three forms submit data successfully
✅ Loading states appear during submission
✅ Success messages display after submission
✅ Forms reset after successful submission
✅ All validation rules still work
✅ Data appears in Zapier with correct structure
✅ formType field correctly identifies each form
✅ Timestamp is included in submissions

---

## Next Steps After Testing

Once testing is complete:
1. Monitor Zapier for incoming data
2. Set up your Zap actions (email notifications, spreadsheet updates, etc.)
3. Consider adding more detailed success messages
4. Optional: Replace alerts with custom modal dialogs for better UX
5. Optional: Add Google Analytics tracking for form submissions
