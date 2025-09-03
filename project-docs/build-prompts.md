\# Claude Code Build Prompts



\## PROMPT 1: Initial Setup \& Foundation

Create a Next.js 14+ project for Ecolo odor control solutions website using App Router. This is a visual prototype for client presentation that must match exact specifications.

Setup requirements:



Initialize Next.js with TypeScript

Install and configure: Tailwind CSS, Framer Motion, React Icons, react-intersection-observer

Set up Vercel deployment configuration

Create folder structure as specified in project-docs/complete-site-content.json



Create these reference files in /project-docs/:



complete-site-content.json (I'll provide - contains ALL page content)

visual-specifications.json (I'll provide - contains design system)

product-database.json (extract from complete-site-content.json)

build-prompts.md (this file)



Configure Tailwind with custom theme from visual-specifications.json colors and typography.

Create placeholder image system using:



Unsplash API for facility/industrial images

Placeholder.com for product images

Create simple SVG icons for product families



Initialize components folder with empty files for:



Navigation, Footer, HeroVideo, ProductCard, CaseStudyCard,

SelectorTool, DataTable, CTAButton, AudienceCard, TrustBar



Set up app router structure with page.tsx files for all routes from complete-site-content.json sitemap.



\## PROMPT 2: Core Components \& Design System

Implement the complete design system and core reusable components based on project-docs/visual-specifications.json:



Navigation Component:



Sticky header with blur effect on scroll

Logo left, nav center, "Become a Partner" CTA right

Mega dropdown for Products showing all 6 families

Standard dropdown for Industries showing all 6 verticals

Mobile hamburger menu with slide panel





Footer Component:



Full sitemap in 4 columns

Newsletter signup form

Office locations

Certifications badges

Social media icons





HeroVideo Component:



Full-screen background video (use placeholder video URL)

Dark gradient overlay

Centered text with headline and subheadline props

Scroll indicator arrow





Card Components:



ProductCard: Image, title, description, link

CaseStudyCard: Industry badge, challenge, result stat, link

AudienceCard: Large icon, title, description, hover effect





Interactive Components:



SelectorTool: Multi-filter sidebar with checkbox groups

DataTable: Sortable columns, responsive scroll

CTAButton: Primary, Secondary, and CTA variants with animations







Add Framer Motion animations:



Scroll-triggered fade-ins

Hover effects on all cards

Page transitions





\## PROMPT 3: Homepage Implementation

Build the complete homepage using content from project-docs/complete-site-content.json homepage section:



Hero Section:



Use HeroVideo component

Headline: "Advanced Odor Neutralization. Not Masking."

Subheadline from content file

Video placeholder showing industrial misting





Audience Navigator:



3 large cards in a row (stack on mobile)

"I Am a Distributor/OEM" → /distributor

"I Need a Solution for My Facility" → /industries

"I Want to Learn the Science" → /technology

Cards should have icons and hover animations





Trust Bar:



Horizontal scrolling logo strip

Create 10 placeholder company logos

Add ECOLOGO and ISO certification badges





Product Family Showcase:



6-card grid (2x3 on desktop, 1 column mobile)

Pull data from complete-site-content.json product families

Each card: Icon, Name, Tagline, Link





Global Footprint:



Interactive world map (use react-simple-maps or similar)

Highlight regions from content

"Serving Customers in 50+ Countries" stat





Featured Case Study:



Single highlighted case study card

"90% Reduction in Odor Complaints"

Image, summary, read more link





Final CTA:



Full-width section with gradient background

"Ready to Eliminate Odor? Contact Our Experts Today"

Large CTA button to /contact









\## PROMPT 4: Technology \& Science Page

Create the Technology page with scientific credibility focus from complete-site-content.json technology\_page:



Page Header:



"The Science of True Odor Neutralization"

Brief intro paragraph





Problem with Masking Section:



Split layout: Text left, graphic right

Explain why masking fails

Use icons to illustrate concepts





Counteractant Technology:



Animated molecular diagram (use Framer Motion)

Show H₂S, mercaptans, ammonia transformation

Before/after visualization





Technology Comparison Table:



Pull data from content file

Responsive table with method comparisons

Highlight Ecolo advantages





Our Methods:



3-column layout

Chemical Neutralization, Biological Management, Vapor Diffusion

Icon, title, description, product line for each





R\&D Section:



Timeline showing 50-year history

Lab image gallery (use science/lab stock photos)

Certification badges





White Paper CTA:



Gated content form

Fields: Name, Email, Company, Industry, Phone

"Download Technology White Paper" button









\## PROMPT 5: Products System (Hub \& Family Pages)

Implement the complete products section with hub and all 6 family pages:



Products Hub (/products):



Grid of 6 family cards with expanded descriptions

Pull all data from complete-site-content.json product\_families

Each card links to family page





Product Family Template:



Create reusable template for all families

Dynamic routing with \[family].tsx





For EACH family page (airsolution, xstreme, airsensory, biostreme, geltech, pond-x):

Header Section:



Family name and technology type

Description paragraph



How It Works:



3-step visual process

Icons and descriptions



Interactive Product Selector:



Filter sidebar with:



Target Odor checkboxes

Industry dropdown

Scent preference radio buttons





Product grid showing filtered results

Live filtering with state management



Product Data Table:



All products for that family

Columns: SKU, Name, Target Odors, pH, Dilution, Coverage, Scent

Pull from complete-site-content.json products



Recommended Equipment:



Cards showing compatible delivery systems

Link to equipment pages



Related Case Studies:



2-3 relevant case study cards







Create all 6 family pages with unique content from the JSON file.



\## PROMPT 6: Delivery Systems/Equipment

Build the equipment section with detailed system pages:



Main Equipment Page (/equipment):



Header: "Precision Delivery for Maximum Performance"



Equipment Selector Tool:



Filters: Scale, Environment, Application

Dynamic filtering of equipment cards



Equipment Grid:



Cards for: AMC-5000, ACU.15, ACU.53, AirPro Mini, AirPro Big, HydroFoamer

Photo, key specs, "Learn More" link





Individual Equipment Pages:



Create template for equipment/\[system].tsx

For each system, show:



Hero image

Complete specifications table

Key features list

Compatible chemistry

Ideal applications

Installation diagram placeholder

Quote request form











Use data from complete-site-content.json delivery\_systems section.



\## PROMPT 7: Industries Section

Create industry-specific pages targeting different verticals:



Industries Hub (/industries):



Grid of 6 industry cards with icons

Wastewater, Solid Waste, Cannabis, Hospitality, Industrial, Food \& Beverage





Industry Page Template:



Create reusable template industries/\[industry].tsx





For EACH industry (especially detailed ones like wastewater):

Hero Section:



Industry-specific headline

Relevant background image



The Challenge:



Bulleted list of pain points

Industry-specific problems



The Ecolo Solution:



Recommended products with cards

Recommended equipment

Visual product showcase



Case Studies:



2-3 relevant success stories

Focus on ROI and results



CTA Section:



"Schedule Free Site Assessment" form

Industry-specific messaging







Pull all content from complete-site-content.json industries section.



\## PROMPT 8: Case Studies Gallery

Implement the case studies section with filtering:



Case Studies Main Page (/case-studies):

Filter Bar:



Industry dropdown

Product Family dropdown

Region dropdown

Clear filters button



Results Grid:



Responsive card grid

Each card shows:



Client logo placeholder

Industry badge

Challenge summary (truncated)

Big result number (e.g., "90%")

"Read More" link









Individual Case Study Pages:



Template: case-studies/\[id].tsx

Full case study layout:



Client info header

Challenge section

Solution section with products used

Results with metrics

Client testimonial quote

Image gallery

Related case studies









Create at least 12 example case studies from the content file covering different industries.





\## PROMPT 9: Distributor/Partner Page

Build the distributor recruitment page with high conversion focus:



Hero Section:



"Build Your Business with a Global Leader in Odor Control"

Compelling value proposition





The Ecolo Advantage:



5 benefit cards with icons:



Proven Products

Training \& Support

Exclusive Territories

High Margins

Technical Support









Partner Map:



Interactive world map

Show current partners (dots)

Highlight "Seeking Partners" regions

Click regions for details





Partner Testimonials:



3 video placeholder cards

Partner quotes and metrics

Location and company info





Partnership Process:



4-step visual timeline

Icons and descriptions

Make it look easy and appealing





Application Form:



Comprehensive partner application

All fields from complete-site-content.json

Multi-step form if needed

Professional styling





Resources Section:



Downloadable partner pack (gated)

"Download Distributor Prospectus" CTA









\## PROMPT 10: About, Resources, Contact Pages

Complete the remaining pages:



About Us Page (/about):

Our Story:



Timeline from 1975 to 2025

Milestone markers

Company narrative



Mission, Vision, Values:



3 cards with icons

Clear, inspiring messaging



Global Presence:



Office location cards

Embedded maps

Full contact details



Leadership Team:



6 profile cards with photos

Names, titles, bios

Professional headshots (placeholders)



Certifications:



Badge gallery

ISO, ECOLOGO, etc.





Resources Page (/resources):

Category Filter Sidebar:



TDS, SDS, Brochures, White Papers, Videos, Blog

Document count per category



Search Bar:



Full-text search capability



Resource Grid:



Cards with download icons

File type indicators

Some gated, some open



Create 20+ placeholder resources

Contact Page (/contact):

Department Cards:



General, Sales, Technical Support

Email, phone, hours

Highlight 24/7 support



Smart Contact Form:



Inquiry type dropdown

Conditional fields based on selection

Routing logic explanation



Office Locations:



3 office cards

Full addresses

Embedded Google Maps placeholders









\## PROMPT 11: Polish \& Optimization

Final polish and Vercel deployment preparation:



Animations:



Add Framer Motion throughout

Scroll-triggered animations

Page transitions

Loading states





Mobile Optimization:



Test all responsive breakpoints

Ensure touch-friendly interfaces

Optimize images with next/image





SEO \& Meta:



Add meta tags to all pages

Open Graph tags

Structured data where appropriate





Performance:



Lazy load images

Code split where possible

Optimize bundle size





Navigation Flow:



Verify all links work

Add breadcrumbs where needed

Ensure logical user flow





Forms:



Add form validation

Success/error states

Thank you messages





Placeholder Content:



Ensure all placeholder text is realistic

Use actual chemical formulas

Industry-appropriate terminology





Vercel Setup:



vercel.json configuration

Environment variables template

Deployment instructions

Preview URL setup









\## PROMPT 12: Final Review \& Testing

Complete final review and testing:



Content Verification:



Check all pages against complete-site-content.json

Verify all 6 product families have pages

Confirm all 6 industries have pages

Ensure 12+ case studies exist





Interactive Features:



Test all selector tools

Verify filter functionality

Check form submissions

Test navigation dropdowns





Visual Consistency:



Verify color palette throughout

Check typography hierarchy

Ensure spacing consistency

Validate hover states





Cross-browser Testing:



Chrome, Firefox, Safari, Edge

Mobile browsers

Tablet orientations





Create Demo Script:



User journey documentation

Key features to highlight

Talking points for client presentation





Deploy to Vercel:



Push to GitHub

Connect to Vercel

Set up custom preview URL

Test deployed version







Deliver complete, polished prototype ready for client presentation.

