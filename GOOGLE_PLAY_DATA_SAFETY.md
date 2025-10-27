# Google Play Console - Data Safety Section Guide

This document provides step-by-step instructions for filling out the Data Safety section in Google Play Console for the Image to PDF app.

## Step 1: Does Your App Collect or Share Any of the Required User Data Types?

**Answer: NO**

Select "No, my app does not collect any of this data"

Since the app processes all data locally and doesn't transmit anything to external servers, you should select "No" for this question.

## Step 2: Data Collection and Sharing (If prompted)

Even though the app doesn't collect data, you may need to answer questions about permissions:

### Media and Files
- **Do you access images from device's media collection?** YES
  - Purpose: App functionality (image selection for PDF conversion)
  - Data access: Ephemeral (deleted immediately after processing)
  - Data sharing: No

### Storage
- **Do you access files and directories on device storage?** YES
  - Purpose: App functionality (saving generated PDFs)
  - Data access: Files accessed by your app
  - Data sharing: No

## Step 3: Data Security

Select the following:

- **Is data encrypted in transit?** N/A (no data in transit)
- **Can users request that data be deleted?** YES - Users can delete app data by uninstalling the app
- **Is your app in-scope for Google Play's Families Policy?** YES (app is appropriate for all ages)
- **Is your app primarily directed at children under 13?** NO

## Step 4: App Access

**Does your app allow users to access sensitive data that can create a privacy or security risk?** NO

## Step 5: Data Shared with Third Parties

**Does your app share collected user data with third parties?** NO

## Step 6: Data Security Practices

- **Data Encryption in Transit:** N/A - No data is transmitted
- **Do users have the option to request data deletion?** YES
  - Explain: "Users can delete all app data by uninstalling the app. The app stores all data locally on the user's device."
- **Is your app subject to Google Play's Families Policy?** YES
- **Is your app primarily directed to children under 13?** NO

## Detailed Permissions Explanation

### Android Permissions

1. **READ_EXTERNAL_STORAGE**
   - Category: Photos and Videos, Files and Docs
   - Data Type: Photos (ephemeral access only)
   - Purpose: App functionality (selecting images for conversion)
   - Is this data collection optional? YES (users can decline to select images)
   - Is this data shared? NO

2. **WRITE_EXTERNAL_STORAGE**
   - Category: Files and Docs
   - Data Type: Files created by the app
   - Purpose: App functionality (saving generated PDFs)
   - Is this data collection optional? NO (required for core functionality)
   - Is this data shared? NO

### Third-Party Data Sharing

List any third-party SDKs you use:

1. **Expo**
   - Type of data shared: None (no user data transmitted)
   - Purpose of sharing: Development framework
   - Link to privacy policy: https://expo.dev/privacy

2. **pdf-lib**
   - Type of data shared: None (processes data locally)
   - Purpose of sharing: PDF generation library
   - Link to privacy policy: https://github.com/Hopding/pdf-lib

## Important Notes

1. **Ephemeral Processing**: Images are loaded into memory for processing and then discarded. They are not permanently stored by the app.

2. **Local Storage Only**: Generated PDFs are stored locally on the device only.

3. **No Network Access**: The app does not make network requests or transmit data.

4. **No Analytics**: The app does not use any analytics or tracking services.

5. **No Ads**: The app does not display advertisements or use advertising SDKs.

## Privacy Policy URL

You must provide a URL to your privacy policy. You can:

1. Host the PRIVACY_POLICY.md file on GitHub
2. Host it on your website
3. Use GitHub Pages, Netlify, or similar service

**Example URLs:**
- GitHub: `https://github.com/YOUR_USERNAME/image-to-pdf/blob/main/PRIVACY_POLICY.md`
- GitHub Pages: `https://YOUR_USERNAME.github.io/image-to-pdf/privacy-policy`
- Your website: `https://yourwebsite.com/privacy-policy`

## Common Questions

**Q: Should I answer "Yes" to data collection since the app accesses photos?**  
A: No. Technically you're not "collecting" data since everything stays on the device and is never transmitted. However, if Google's interface requires you to declare storage access, explain that it's ephemeral (temporary) and only for processing.

**Q: What if Google marks certain permissions as "sensitive"?**  
A: Be clear that access is only with explicit user action (selecting images) and data is processed locally with no external transmission.

**Q: Do I need to comply with GDPR/CCPA?**  
A: Since you don't collect personal data or transmit data, compliance is straightforward. Your privacy policy should clearly state this.

## Verification Checklist

Before submitting to Google Play, ensure:

- [ ] Privacy Policy URL is accessible and complete
- [ ] All permissions are listed and explained
- [ ] Data Safety section accurately reflects the app
- [ ] Privacy policy matches the data safety declarations
- [ ] App package name matches: `com.narendrapalach.imagetopdf`
- [ ] Clear statements about local-only processing
- [ ] No contradictions between privacy policy and data safety section

## After Submission

Google may ask for additional clarifications. Be prepared to:
1. Explain how images are processed (temporary memory only)
2. Confirm no data transmission occurs
3. Demonstrate compliance with policies
4. Provide screenshots showing permission dialogs

## Contact Information

If you need to update or modify these declarations:
- Keep the PRIVACY_POLICY.md file updated
- Maintain consistency between privacy policy and data safety declarations
- Update last modified dates when making changes
