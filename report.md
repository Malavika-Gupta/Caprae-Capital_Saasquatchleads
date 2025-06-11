# AI-Readiness Challenge – LeadGen Tool Enhancement Report

## 🔍 Objective
To build a focused enhancement of the SaaSquatchLeads platform by improving the lead filtering pipeline and overall frontend usability using mock data. The goal was to demonstrate business impact through intelligent feature selection and a clean user experience — all developed within a 5-hour window.

## ⚙️ Approach

### 1. Reverse Engineering
The original tool pulls company info (name, website, contact details, revenue, etc.) from sources like Google Maps, LinkedIn, ZoomInfo, Apollo, etc. It lacked advanced filters, keyword search, and dynamic user feedback on system states.

### 2. Enhancements Made
- **Keyword + Tech Stack Filtering**: Added UI and logic to filter leads based on keyword matches in description or tech stack.
- **CSV Export Functionality**: Enabled export of filtered lead data for downstream sales or CRM pipelines.
- **Credit Display Logic**: Simulated a credits system (1 lead = 1 credit), hinting at monetization strategy.
- **UI/UX Improvements**: Added visual polish, loading states, error handling, and responsive layouts for seamless usage.
- **Mock Data Use**: Implemented filtering logic using structured `mock_leads.json` data in place of web scraping, ensuring API flexibility for future extension.

## 🧠 Model Selection
No ML model was used as the core focus was on business-aligned filtering and UI/UX logic. The design allows easy integration of a future ML module (e.g., lead scoring based on similarity or NLP classification).

## 🧹 Data Preprocessing
- Parsed mock JSON data with consistent fields: `company`, `tech_stack`, `location`, `description`, `email`.
- Applied keyword matching with case-insensitive partial matches.
- Ensured deduplication through unique ID handling.

## ✅ Evaluation & Real-World Value
- Designed for **high-impact sales use cases** — prioritizing relevant leads using tech stack filters.
- Export-ready data and credit logic replicate realistic workflows.
- The UI provides immediate feedback on queries and errors, boosting sales team efficiency.

## 🧩 Future Work
- Integrate live scraping and enrichment APIs (e.g., Apollo/ZoomInfo).
- Add ML-based lead scoring (e.g., BERT/NB classifier on company descriptions).
- Chrome extension version for CRM plug-in.

---

> This submission demonstrates how AI-readiness is not just ML-for-ML’s-sake, but thoughtful application of intelligence — technical and product — to drive sales outcomes.

