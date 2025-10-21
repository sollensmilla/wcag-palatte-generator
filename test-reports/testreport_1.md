# Test Report – WCAG Color Palette Generator

**Project:** WCAG Color Palette Generator  
**Tester:** Smilla Sollén  
**Date:** 21 October 2025  
**Version tested:** 1.0.0  
**Test type:** Manual functional and non-functional verification  

---

## 1. Test Summary
All functional (FR1–FR6) and non-functional (NFR1–NFR4) requirements were tested according to the [requirements specification](/docs/kravspecifikation.md).  
All test cases passed successfully. The deployed version at [wcagpalettegenerator.app](https://wcagpalettegenerator.app/palette?) behaves as expected under both valid and invalid conditions, and follows Clean Code principles regarding structure, readability, and maintainability.  

---

## 2. Test Environment
- **Deployment URL:** [https://wcagpalettegenerator.app/palette?](https://wcagpalettegenerator.app/palette?)  
- **Runtime:** Node.js v24.7
- **Framework:** Express.js with EJS templates  
- **Database:** MongoDB Atlas 
- **Browser:** Chrome 140.0  
- **Operating System:** macOS 15  

---

## 3. Functional Test Results

| **Req ID** | **Requirement Description** | **Test Cases Summary** | **Expected Result** | **Actual Result** | **Status** |
|-------------|-----------------------------|-------------------------|---------------------|-------------------|------------|
| **FR1** | Palette Generation | Valid color (#75b45c) generates accessible palette. Invalid hex and blank fields trigger error messages. | Palette renders / Error flash shown. | Behaved as expected; flash messages displayed correctly. | ✅ Passed |
| **FR2** | Input Validation | Invalid or missing inputs handled via middleware. | App remains functional; appropriate flash shown. | Validation prevented bad input; no crashes or unhandled exceptions. | ✅ Passed |
| **FR3** | Palette Persistence | Save valid palette with name; handle missing name. | Palette saved, confirmation message shown; missing fields trigger error. | Saved palette appeared on “Saved Palettes” page at top; flash worked as expected. | ✅ Passed |
| **FR4** | Palette Display | Display all saved palettes (newest first). Handle empty DB. | Sorted correctly; empty state shows message. | Ordering correct; “No saved palettes yet.” shown when DB empty. | ✅ Passed |
| **FR5** | Palette Deletion | Delete existing and non-existing palettes. | Palette removed; feedback message displayed. | Palette deleted persistently; invalid ID handled gracefully. | ✅ Passed |
| **FR6** | User Feedback (Flash Messages) | Flash after save/delete and invalid input. | Flash message appears once per action. | Flash messages worked consistently across routes. | ✅ Passed |

---

## 4. Non-Functional Test Results

| **Req ID** | **Requirement Description** | **Verification Method** | **Result** | **Status** |
|-------------|-----------------------------|--------------------------|-------------|------------|
| **NFR1** | Readability & Maintainability | Code inspection: checked naming, formatting, duplication. | All code is self-explanatory, consistently formatted, no duplicated logic. | ✅ Passed |
| **NFR2** | Simplicity & Single Responsibility | Reviewed controllers, middleware, and views. | Each class/function has one purpose; no mixed responsibilities. | ✅ Passed |
| **NFR3** | Error Handling Consistency | Tested DB disconnect and invalid inputs. | Errors caught and shown to user; no crashes or leaks. | ✅ Passed |
| **NFR4** | Usability & Clarity | Manual UI review. | Interface intuitive; labels descriptive; users can complete main tasks without guidance. | ✅ Passed |

---

## 5. Issues and Resolutions
No defects or unexpected behavior were found during testing.  
Minor UI polish opportunities were noted (spacing, button styling), but these do not affect functionality or acceptance.

---

## 6. Conclusion
All functional and non-functional requirements have been verified and passed.  
The application meets the acceptance criteria defined in the requirements specification.  
