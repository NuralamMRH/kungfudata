# Goal Description

Convert the provided 27,338-line Framer HTML export ([kungfudata.html](file:///Volumes/NewVolume/RanMac/Programming/ReactVite/kungfudata/kungfudata.html)) into a structured React and Vite.js web application named `kungfudata`. The app will use `framer-motion` for animations and be divided into reusable React components and separate pages (routing), including an "Our Model" page.

## Proposed Changes

### Project Setup

- **Initialize Vite**: Run `bun create vite . --template react-ts` inside the `kungfudata` directory.
- **Dependencies**: Install `react-router-dom` for page routing, `framer-motion` for animations, and `lucide-react` for any necessary icons.
- **Tailwind CSS**: Set up Tailwind CSS for styling to make converting the inline styles from the HTML easier.

### Analyze and Componentize

- **Analyze [kungfudata.html](file:///Volumes/NewVolume/RanMac/Programming/ReactVite/kungfudata/kungfudata.html)**: The HTML file contains large inline CSS and SVG data. We need to extract the major visible sections (Header, Hero, Features, "Our Model", Footer).
- **Routing**: Set up `react-router-dom` in `App.tsx` with routes for `/` (Home) and `/our-model` (Our Model).
- **Components**:
  - `Header.tsx`
  - `Footer.tsx`
  - `HeroSection.tsx`
  - `HowItWorks.tsx`
  - `WhyChina.tsx`
  - `OurBrands.tsx`
  - `RealBrandsRealGrowth.tsx`
  - `IsYourBrandAFit.tsx`
  - `FAQ.tsx`
  - `LetsMakeChinaYourFastestGrowingMarket.tsx`
  - `OurModel.tsx` (for a dedicated page `OurModelPage.tsx`)
  - `Brands.tsx` (for a dedicated page `BrandsPage.tsx`)
  - `WhyChina.tsx` (for a dedicated page `WhyChinaPage.tsx`)
  - `Resources.tsx` (for a dedicated page `ResourcesPage.tsx`)
  - `Contact.tsx` (for a dedicated page `ContactPage.tsx`)
  - `PrivacyPolicy.tsx` (for a dedicated page `PrivacyPolicyPage.tsx`)
  - `TermsOfService.tsx` (for a dedicated page `TermsOfServicePage.tsx`)
  - etc.

### Implementation

- **Extract Content**: Parse the HTML and convert it to JSX. Replace custom Framer components with standard HTML/React equivalents or React components.
- **Animations**: Replace Framer's static export animations with `framer-motion` `motion.div` tags and variants.

## Verification Plan

### Automated Tests

- Run `bun run build` and `bun run lint` to ensure no errors.

### Manual Verification

- Start the dev server (`bun run dev`) and visually inspect the application to ensure it matches the original HTML export.
- Test routing by clicking on the designated "Our Model" link and verifying it opens the separate page.
- Verify Framer Motion animations trigger correctly on scroll or load.
