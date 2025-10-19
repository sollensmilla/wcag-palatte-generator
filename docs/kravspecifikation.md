# Requirements specification - WCAG Color Palette Generator

## Functional Requirements
### FR1. Palette Generation
**Description**
The system shall generate a WCAG-compliant color palette from a valid base color, WCAG level (AA/AAA), and text size (normal/large).

**Clean Code Principles**
- Do one thing: Coordinate palette generation. 
- Meaningful names: Express intent in parameters like basecolor etc.

**Test Cases:**
- Enter #75b45c, “AA”, “No”
Expedcted output: palette renders successfully.
- Enter invalid hex (#xyz123)
Expected output: flash error “Invalid base color format.”
- Leave field blank
Expected outpt: flash error “Missing required fields.”

### FR2. Input Validation
**Description**
All user inputs must be validated before use to ensure data integrity and prevent invalid state propagation.

**Clean Code Principles**
- Errors are handled with exceptions/custom errors.
- Validation is decoupled from core logic via middleware.
- Each method/function checks only one aspect of the input.

**Test Cases:**
- Submitting invalid color
Expedcted output:handled gracefully, app remains functional.
- Submitting empty fields
Expected output: user sees appropriate flash message, no unhandled exceptions.

### FR3. Palette Persistence
**Description**
Users shall be able to save generated palettes with a custom name to persistent storage.

**Clean Code Principles**
- PaletteController delegates DB logic to small helper methods (#savePaletteToDB).
- Each private method is short and focused.

**Test Cases:**
- Save valid palette
Expedcted output: “Palette ‘My Palette’ saved successfully.”, app redirects to saved palettes where the saved palette is at the top. 
- Submit without name
Expected output: “Missing required fields.”

### FR4. Palette Display
**Description**
The system shall display all saved palettes, ordered by creation date (newest first).

**Clean Code Principles**
- Consistent visual layout in views (EJS) improves readability.

**Test Cases:**
- Saved palettes are visible and sorted correctly.
- Empty database shows message “No saved palettes yet.”
- The page renders without errors even if DB is empty.

### FR5. Palette Deletion
**Description**
The user shall be able to delete previously saved palettes.

**Clean Code Principles**
- deletePalette() should only handle deletion, not view logic.
- All deletion errors are caught and reported consistently.
- DB access handled through isolated function #deletePaletteById().

**Test Cases:**
- Delete existing palette
Expedcted output: Palette removed, flash success message shown.
- Delete non-existing ID
Expected output: “Failed to delete palette.”
- Page refresh confirms deletion persistence.

### FR6. User Feedback (Flash Messages)
**Description**
The application shall communicate success or failure via flash messages.

**Clean Code Principles**
- FlashMiddleware encapsulates session configuration and message exposure.

**Test Cases:**
- After save/delete
Expedcted output: Success flash visible once.
- After invalid input
Expected output: Error flash visible.

## Non-Functional Requirements

### NFR1. Readability and Maintainability
**Description**
All code shall be self-explanatory, with clear naming, consistent indentation, and no duplicated logic.

**Clean Code Principles**
- Meaningful Names (Ch. 2) — variables and functions clearly describe purpose.
- Formatting (Ch. 5) — vertical spacing separates concepts; horizontal spacing aligns related code.

**Test Cases:**
- No long methods (>20 lines).
- All methods and classes have descriptive names matching their role.

### NFR2. Simplicity and Single Responsibility
**Description**
Each function and class shall have one clear purpose.

**Clean Code Principles**
- Functions (Ch. 3) — “do one thing, do it well.”
- Classes (Ch. 10) — encapsulate one concept (e.g., palette management, flash handling).

**Test Cases:**
- Inspect PaletteController: each private method focuses on one job.
- Ensure no logic for rendering, DB, and validation are mixed in one method.

### NFR3. Error Handling Consistency
**Description**
All predictable errors shall be handled gracefully with clear user feedback.

**Clean Code Principles**
- Error Handling (Ch. 7): Use exceptions, not return codes.
- Boundaries (Ch. 8): Application-specific errors extend base Error class.

**Test Cases:**
- Disconnect database and try saving/deleting.
- Invalid color input should not crash app.

### NFR4. Usability and Clarity
**Description**
UI components shall be intuitive, minimal, and labeled clearly.

**Clean Code Principles**
- Formatting (Ch. 5): Layout reflects logical grouping of inputs.
- Meaningful Names (Ch. 2): Labels like “Base color” or “WCAG Level” describe inputs precisely.

**Test Cases:**
- User completes main tasks (generate → save → delete) without instructions.


## Acceptance Criteria
The app is considered acceptable when:
- All functional requirements (FR1–FR6) are verified through manual testing.
- The system passes all non-functional criteria related to readability, error handling, and simplicity.
- Code inspection confirms adherence to Clean Code principles from chapters 1–11. 