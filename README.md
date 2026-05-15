# ![TypeHue Logo](https://typehue.com/typehue-32.png) TypeHue

**Test your typography and color palettes on real UIs in real-time.**

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://typehue.com)

---

## Why TypeHue?

I built TypeHue because I was tired of testing fonts and colors in isolation. A beautiful font pairing on a blank white page often falls apart when dropped into a complex dashboard or a content-heavy documentation site. 

Most theme builders also treat Right-To-Left (RTL) support as an afterthought. For those of us working with Arabic typography, finding the right weight and line height for RTL while maintaining visual harmony with English is a constant struggle. 

**TypeHue was built to solve this.** It’s a free, open-source tool that lets you stress-test your design choices across multiple production-like layouts in real-time, with first-class support for Arabic and RTL.

[**Try the Live Demo →**](https://typehue.com)

![TypeHue Screenshot](https://typehue.com/TypeHue_screenshot.png)

---

## Features

- **Dual-Font System:** Independently control `Display` and `Body` fonts to build sophisticated visual hierarchies.
- **Semantic Color Palette:** Define roles (Primary, Secondary, Surface, Text) rather than just hex codes.
- **Auto-Adjust Engine:** derive entire palettes from a single color using Analogous, Triadic, Split-Complementary, or Complementary harmonies.
- **First-Class RTL/Arabic Support:**
    - **Logical Properties:** Built with `ms-*`, `pe-*`, and `inset-s-*` so layouts flip perfectly.
    - **Font Filtering:** Automatically identifies fonts with Arabic script support.
    - **Contextual Awareness:** UI elements and alignment respond logically to the document direction.
- **Production Contexts:** Switch between a Marketing Landing Page, a Data Dashboard, and Technical Documentation.
- **Developer-Ready Export:** Grab your theme as CSS variables or a full Tailwind CSS configuration object.

---

## Getting Started

TypeHue is built with React and Vite. You can run it locally in seconds:

1. **Clone the repo**
   ```bash
   git clone https://github.com/ammar-sultan-89/typehue.git
   cd typehue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Fire it up**
   ```bash
   npm run dev
   ```

---

## Usage Walkthrough

The **Configuration Panel** on the right is your command center. Every change is instantly applied via CSS variables.

1. **Pick your fonts:** Select from a curated list of Google Fonts for both Display and Body. Adjust weights and line-heights live.
2. **Dial in the palette:** Pick a primary color and let the "Auto-Adjust" engine generate harmonies, or manually override every semantic role.
3. **Switch Layouts:** Toggle between the Landing Page, Dashboard, and Docs to see how your theme handles different information densities.
4. **Test RTL:** Switch the locale to Arabic to verify that your typography and layout hold up in a Right-To-Left context.
5. **Export:** Once it looks right, head to the Export tab and copy the code directly into your project.

**Pro Tip:** Hit the **Randomize** button. It’s the fastest way to discover harmonious combinations you wouldn’t have thought of.

---

## Project Structure

```text
src/
├── components/
│   ├── layouts/     # Main preview templates (Landing, Dashboard, Docs)
│   ├── panel/       # The configuration sidebar and controls
│   └── shared/      # Atomic UI components
├── data/            # Font lists, color presets, and layout registry
├── contexts/        # Theme and Locale state management
├── hooks/           # DOM observers (for chart reactivity) and history logic
└── utils/           # Color harmony algorithms and RTL helpers
```

---

## Contributing

I built this for myself, but I’d love for it to be useful to the community. Whether you're adding a new layout or just fixing a typo, contributions are welcome.

### How to help:
- **Add a Layout:** Create a new template (e.g., an E-commerce store or a Blog) to help users stress-test themes in more contexts.
- **Add Presets:** Contribute your favorite font pairings or color palettes to our curated lists in `src/data/`.
- **Improve / Extend:** Fix bugs, refactor architecture, improve color harmony logic, extend RTL support, add export formats,...
- **or anything else** that makes the tool better. No contribution is too small or too ambitious.

Check out the [Documentation](https://typehue.com/docs) for a deeper dive into the architecture.

---

## Roadmap

- [ ] **Local Font Support:** Test fonts from your own system or upload files.
- [ ] **Configuration Persistence:** Save/Load themes via JSON.
- [ ] **Import Theme:** Paste an existing Tailwind config to visualize it instantly.
- [ ] **More Layouts:** Blog, E-commerce, and Search results templates.
- [ ] **More Presets:** Expanding the library of curated "starting points".

---

## License

MIT © [Ammar Sultan](https://ammar-sultan.com)
