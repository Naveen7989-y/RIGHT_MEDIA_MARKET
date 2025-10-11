# Content Guide - Right Media Marketing Website

This guide explains the content structure and how to customize the website content.

## 📄 Content Overview

### Homepage Content Sections

#### 1. Hero Section
**Location:** `src/pages/Home.jsx` (lines ~30-60)

**Current Content:**
- **Headline:** "Transform Your Digital Presence. Accelerate Your Growth."
- **Subheadline:** Partner with experts who blend cutting-edge technology...
- **Description:** At Right Media Marketing, we don't just build websites...
- **CTAs:** "Get Your Free Strategy Session" and "Explore Our Services"

**Customization Tips:**
- Keep headline under 10 words for impact
- Subheadline should explain your unique value proposition
- CTAs should be action-oriented

#### 2. Value Proposition Section
**Location:** `src/pages/Home.jsx` (lines ~70-100)

**Four Key Points:**
1. **Modern Tech Stack Expertise** - Latest technologies
2. **Data-Driven Decision Making** - Analytics and insights
3. **Full-Service Digital Partner** - End-to-end solutions
4. **Agile & Results-Focused** - Fast deployment

**Customization:**
- Update icons if needed
- Modify descriptions to match your strengths
- Add specific metrics or achievements

#### 3. Services Overview
**Location:** `src/pages/Home.jsx` (lines ~110-180)

**Five Service Cards:**
1. Full Stack Web Development
2. Digital Marketing
3. Custom SaaS & Product
4. Cloud & DevOps
5. Consultation & Strategy

**Each Card Contains:**
- Icon with gradient background
- Title
- Description
- 3 key features
- "Learn More" link

#### 4. Process Section
**Location:** `src/pages/Home.jsx` (lines ~190-220)

**Four Steps:**
1. Discovery & Strategy
2. Design & Development
3. Launch & Optimize
4. Scale & Grow

#### 5. Technologies Section
**Location:** `src/pages/Home.jsx` (lines ~230-260)

**Featured Technologies:**
- React, Next.js, Node.js, Tailwind CSS
- AWS, MongoDB, PostgreSQL, Google Ads
- Plus 10 additional technologies

**Customization:**
- Add/remove technologies based on your stack
- Update icons from react-icons library

#### 6. Testimonials Section
**Location:** `src/pages/Home.jsx` (lines ~270-310)

**Three Testimonials:**
- Each with quote, author name, and role
- Currently using placeholder names

**To Update:**
```javascript
{
  quote: "Your client's testimonial here...",
  author: "Client Name",
  role: "Position at Company"
}
```

#### 7. Final CTA Section
**Location:** `src/pages/Home.jsx` (lines ~320-360)

**Contains:**
- Compelling headline
- Description
- 6 benefits with checkmarks
- Two CTA buttons

---

### Services Page Content

#### Detailed Service Sections
**Location:** `src/pages/Services.jsx`

**Each Service Includes:**

1. **Service Header**
   - Large icon
   - Title
   - Subtitle
   - Description paragraph

2. **Feature Cards** (2-5 per service)
   - Icon
   - Feature title
   - 4-6 bullet points

3. **Benefits Section**
   - Gradient background
   - 6 key benefits

**Services Covered:**

##### 1. Full Stack Web Development
- Frontend Development (React, Next.js, Angular, Vue.js)
- Backend Development (Node.js, Java, PHP, Python)
- E-commerce Development

##### 2. Digital Marketing Services
- SEO (Technical, On-Page, Off-Page, Local)
- PPC Advertising (Google, Facebook, LinkedIn)
- Social Media Management
- Content & Email Marketing
- Branding & Design

##### 3. Custom SaaS & Product Development
- SaaS Product Development
- Product Strategy & Planning
- Product Launch & Growth
- Brand Building for SaaS

##### 4. Cloud & DevOps Solutions
- Cloud Application Development
- CI/CD Pipeline Implementation
- Analytics & Monitoring
- DevOps Services

##### 5. Consultation & Strategy Services
- Digital Transformation Consulting
- Data Analytics Consulting
- Marketing Strategy Consulting
- Business Growth Consulting

---

### Contact Page Content

#### Contact Information Cards
**Location:** `src/pages/Contact.jsx` (lines ~60-80)

**Three Cards:**
1. **Email:** contact@rightmediamarketing.com
2. **Phone:** +1 (234) 567-890
3. **Location:** Your Location, City, Country

**To Update:**
```javascript
{
  icon: <FaEnvelope />,
  title: 'Email Us',
  content: 'your-email@domain.com',
  link: 'mailto:your-email@domain.com',
  color: 'from-blue-500 to-cyan-500'
}
```

#### Contact Form Fields
**Location:** `src/pages/Contact.jsx` (lines ~100-200)

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Company Name (optional)
- Service Interested In (required, dropdown)
- Message (required, textarea)

#### Benefits Section
**Location:** `src/pages/Contact.jsx` (lines ~50-58)

**Six Benefits:**
1. Free initial consultation
2. Custom solutions
3. Transparent pricing
4. Dedicated team
5. Ongoing support
6. Proven track record

#### Office Hours
**Location:** `src/pages/Contact.jsx` (lines ~280-300)

**Current Hours:**
- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 10:00 AM - 4:00 PM
- Sunday: Closed

---

## 🎨 Styling & Branding

### Color Scheme
**Location:** `tailwind.config.js`

**Primary Colors (Blue):**
- 50-900 scale
- Main: `primary-600` (#0284c7)

**Secondary Colors (Purple/Pink):**
- 50-900 scale
- Main: `secondary-600` (#c026d3)

**To Change Colors:**
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR',
    // ... other shades
  }
}
```

### Typography
**Font:** Inter (Google Fonts)
**Loaded in:** `index.html`

**Heading Classes:**
- `heading-xl` - Hero headlines (4xl-6xl)
- `heading-lg` - Section headlines (3xl-5xl)
- `heading-md` - Subsection headlines (2xl-4xl)
- `heading-sm` - Card headlines (xl-2xl)

### Button Styles
**Location:** `src/index.css`

**Two Button Types:**
1. `btn-primary` - Solid blue background
2. `btn-secondary` - White with blue border

---

## 📝 Content Writing Tips

### Headlines
- Keep them short and impactful
- Use action words
- Include benefits, not just features
- Test different variations

### Descriptions
- Start with the problem
- Explain your solution
- Highlight the outcome
- Use clear, simple language

### Call-to-Actions (CTAs)
- Be specific ("Schedule Your Free Consultation" vs "Click Here")
- Create urgency when appropriate
- Use contrasting colors
- Place strategically throughout the page

### Service Descriptions
- Lead with benefits
- Include specific technologies/methods
- Use bullet points for scannability
- Add social proof when possible

---

## 🔄 Quick Content Updates

### Update Contact Email
**Files to modify:**
1. `src/components/Footer.jsx` (line ~80)
2. `src/pages/Contact.jsx` (line ~65)

### Update Phone Number
**Files to modify:**
1. `src/components/Footer.jsx` (line ~85)
2. `src/pages/Contact.jsx` (line ~70)

### Update Location
**Files to modify:**
1. `src/components/Footer.jsx` (line ~90)
2. `src/pages/Contact.jsx` (line ~75)

### Update Social Media Links
**Files to modify:**
1. `src/components/Footer.jsx` (lines ~50-70)
2. `src/pages/Contact.jsx` (lines ~250-280)

### Add/Remove Services
**Files to modify:**
1. `src/pages/Home.jsx` - Update `services` array
2. `src/pages/Services.jsx` - Update `servicesDetailed` array
3. `src/components/Footer.jsx` - Update `services` array

---

## 📊 SEO Content

### Meta Tags
**Location:** `index.html`

**Current Tags:**
- Title: "Right Media Marketing - Full Stack Development & Digital Marketing"
- Description: "Professional Full Stack Development & Digital Marketing Services..."
- Keywords: "web development, digital marketing, SEO, PPC, React, Node.js..."

**To Update:**
```html
<title>Your Custom Title</title>
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords, here" />
```

### Heading Hierarchy
- Use only one `<h1>` per page (hero headline)
- Use `<h2>` for main sections
- Use `<h3>` for subsections
- Maintain logical hierarchy

---

## ✅ Content Checklist

Before launching, make sure to:

- [ ] Update all contact information
- [ ] Replace placeholder testimonials with real ones
- [ ] Add your company logo
- [ ] Update social media links
- [ ] Customize color scheme to match brand
- [ ] Review all service descriptions
- [ ] Update office hours
- [ ] Add Google Maps embed
- [ ] Update meta tags for SEO
- [ ] Proofread all content
- [ ] Test all links and CTAs
- [ ] Optimize images (if added)
- [ ] Test contact form functionality

---

## 💡 Content Best Practices

1. **Be Specific:** Use concrete examples and metrics
2. **Show, Don't Tell:** Use case studies and testimonials
3. **Keep It Scannable:** Use headings, bullets, and short paragraphs
4. **Focus on Benefits:** Explain how you solve problems
5. **Use Active Voice:** "We build" instead of "Websites are built"
6. **Include CTAs:** Every section should guide users to action
7. **Update Regularly:** Keep content fresh and relevant
8. **Test Everything:** A/B test headlines and CTAs

---

## 📞 Need Help?

If you need assistance with content updates:
- Refer to the component files directly
- Check the README.md for technical details
- Review React documentation for component syntax

**Remember:** All content is in JSX format, so HTML entities and proper JavaScript syntax are required.