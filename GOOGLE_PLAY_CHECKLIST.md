# Google Play Console Submission Checklist

Complete checklist for submitting Image to PDF app to Google Play Store.

## ✅ Completed Tasks

- [x] EAS CLI installed and configured
- [x] EAS project initialized and linked
- [x] Android keystore generated
- [x] Production AAB built (version 7)
- [x] API level 35 configured (targets latest Android)
- [x] Camera permission removed
- [x] Privacy policy created
- [x] Google Play Data Safety guide created

## 📋 Pre-Submission Checklist

### 1. App Bundle Ready
- [x] **AAB File:** https://expo.dev/artifacts/eas/echkiWToniv4e7UovqPWpo.aab
- [x] **Version Code:** 7
- [x] **Version Name:** 1.0.0
- [x] **Package Name:** com.narendrapalach.imagetopdf
- [x] **Target SDK:** 35

### 2. Developer Account Setup
- [ ] Google Play Console account created
- [ ] $25 registration fee paid
- [ ] Developer account verified

### 3. App Listing Information

**Required Information:**

**App Name:** Image to PDF

**Short Description (80 chars max):**
```
Convert multiple images into a single PDF offline
```

**Full Description:**
```
Image to PDF is a simple, offline app that lets you convert multiple images into a single PDF document. Perfect for creating document backups, sharing collections, or archiving photos.

Features:
• Select multiple images from your gallery
• Preview and reorder images before conversion
• Generate PDF documents instantly
• Save PDFs to your device
• Share PDFs with other apps
• Works completely offline - no internet required
• No watermarks or file size limits
• Clean, intuitive interface

How it works:
1. Tap "Select Images" to choose photos from your gallery
2. Preview your selected images and reorder if needed
3. Tap "Convert to PDF" to generate your document
4. Save or share your PDF

Perfect for:
• Document scanning and archiving
• Creating PDF portfolios
• Organizing photo collections
• Converting receipts and documents
• Sharing multiple images as one file

Privacy-focused:
• All processing happens locally on your device
• No data is collected or transmitted
• No ads, no tracking
• Your images and PDFs stay on your device

Download Image to PDF today and convert your images to PDF with ease!
```

**App Icon:** Use `assets/icon.png` (1024x1024px)
**Feature Graphic:** Create 1024x500px banner for Play Store

### 4. Screenshots

**Required Screenshots:**
- [ ] At least 2 phone screenshots (recommended: 8 screenshots)
- [ ] Optional: Tablet screenshots

**Screenshot Ideas:**
1. Main screen with no images selected
2. Image selection screen
3. Images selected and preview
4. PDF conversion progress
5. Share PDF options
6. Settings/about screen

**Dimensions:**
- Phone: 320px to 3840px wide, 16:9 or 9:16 aspect ratio
- Tablet: 320px to 3840px wide, any aspect ratio between 16:9 and 9:16

### 5. Privacy Policy
- [x] Privacy policy created: `PRIVACY_POLICY.md`
- [ ] Privacy policy URL hosted and accessible

**URL Options:**
- GitHub: `https://github.com/YOUR_USERNAME/image-to-pdf/blob/main/PRIVACY_POLICY.md`
- Or host on your website/GitHub Pages

### 6. Data Safety
- [x] Data Safety section guide created: `GOOGLE_PLAY_DATA_SAFETY.md`
- [ ] Complete Data Safety section in Play Console

**Key Points:**
- App does NOT collect user data
- All processing happens locally
- No data transmission
- No third-party sharing

## 📝 Google Play Console Sections

### Store Listing
- [ ] App name
- [ ] Short description (80 chars)
- [ ] Full description
- [ ] App icon (512x512 PNG)
- [ ] Feature graphic (1024x500px)
- [ ] Screenshots (minimum 2)
- [ ] Category: Productivity or Tools
- [ ] Contact details
- [ ] Privacy policy URL

### App Content
- [ ] Content rating questionnaire
- [ ] Target audience age groups
- [ ] Data safety declarations
- [ ] Ad disclosure (if applicable) - Answer "No ads"

### Release
- [ ] Upload AAB file
- [ ] Create production release
- [ ] Add release notes

### Pre-launch Report
- [ ] Review pre-launch test results (if available)
- [ ] Address any critical issues

## 🔍 Final Checks

### Technical Requirements
- [x] App targets API level 35
- [x] AAB format (not APK for production)
- [x] Proper package naming
- [x] Version code incremented
- [x] Signing certificate configured

### Legal/Policy Requirements
- [x] Privacy policy created
- [ ] Content rating complete
- [ ] Data Safety section complete
- [ ] Contact information provided

### Content Requirements
- [ ] App description written
- [ ] Screenshots captured
- [ ] Feature graphic created
- [ ] App icon finalized

## 🚀 Submission Steps

1. **Create App in Play Console**
   - Go to Play Console → All apps → Create app
   - Select app or game: **App**
   - Select free or paid: **Free**
   - Fill in app name: **Image to PDF**

2. **Complete Store Listing**
   - Upload app icon
   - Upload feature graphic
   - Add screenshots
   - Write description
   - Set category

3. **Complete App Content**
   - Fill out content rating questionnaire
   - Complete Data Safety section (use GOOGLE_PLAY_DATA_SAFETY.md)
   - Add privacy policy URL

4. **Upload AAB**
   - Go to Release → Production
   - Create new release
   - Upload: `application-6ada0cb0-9fc8-4649-9e86-29f7d8f58c5c.aab`
   - Add release notes: "Initial release - Convert images to PDF offline"

5. **Review and Submit**
   - Review all sections for completeness
   - Fix any warnings or errors
   - Submit for review

## 📊 Expected Review Timeline

- **First-time review:** 1-3 days
- **Update review:** Usually within 24-48 hours
- **Age-targeted apps:** May take longer

## 📞 Support Resources

### Expo Documentation
- EAS Build: https://docs.expo.dev/build/introduction/
- Play Store Submission: https://docs.expo.dev/submit/android/

### Google Play Help
- Play Console Help: https://support.google.com/googleplay/android-developer
- App Quality: https://developer.android.com/distribute/best-practices

### Privacy Resources
- Google Play Privacy Policy: https://play.google.com/about/developer-content-policy/
- Data Safety: https://support.google.com/googleplay/android-developer/answer/10787469

## ⚠️ Important Notes

1. **Keystore Backup:** Make sure to backup your keystore file (`@ngreddy__image-to-pdf.jks`) in a secure location. You'll need it for all future updates.

2. **Version Updates:** For future updates, increment the version number in `app.json` and rebuild with EAS.

3. **Privacy Policy Updates:** Keep your privacy policy updated and accessible. The URL must remain live.

4. **Compliance:** Ensure your app listing accurately reflects the app functionality and privacy practices.

5. **Testing:** Consider using Google Play's internal testing track before releasing to production.

## 🎯 Next Steps After Approval

1. Monitor app performance in Play Console
2. Respond to user reviews
3. Track crash reports
4. Plan feature updates
5. Consider A/B testing for store listing

## 📝 Build Information

**Latest Build:**
- Build ID: 6ada0cb0-9fc8-4649-9e86-29f7d8f58c5c
- Version Code: 7
- Version Name: 1.0.0
- Download URL: https://expo.dev/artifacts/eas/echkiWToniv4e7UovqPWpo.aab

**Keystore Info:**
- Alias: 12706539e7a5623b99f19dc802197a90
- File: @ngreddy__image-to-pdf.jks
- SHA256: 05:8F:4A:D3:C7:32:6A:24:83:F0:6E:F6:BF:A3:9B:5C:00:87:4B:24:16:FF:6A:CE:73:BD:FB:50:4C:64:0C:11

---

**Good luck with your submission! 🚀**
