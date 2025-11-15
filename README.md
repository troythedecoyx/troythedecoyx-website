# troythedecoyx.com

Personal website for troythedecoyx - Streamer & Developer

## Overview

This is a modern, responsive website built to promote Troy's streaming channel and showcase coding projects/widgets for streamers. The site features a clean, professional design with smooth animations and is optimized for all devices.

## Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🎯 SEO-friendly structure
- 🚀 Fast loading times
- ♿ Accessible navigation

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal introduction and stats
3. **Projects** - Showcase of coding projects and widgets for streamers
4. **Contact** - Links to streaming platforms and social media

## Setup & Deployment

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. That's it! No build process required - it's pure HTML, CSS, and JavaScript

### Deployment to GoDaddy

1. **Via GoDaddy File Manager:**
   - Log into your GoDaddy account
   - Navigate to File Manager
   - Upload all files (`index.html`, `styles.css`, `script.js`) to your domain's root directory (usually `public_html` or `www`)

2. **Via FTP:**
   - Use an FTP client (FileZilla, WinSCP, etc.)
   - Connect to your GoDaddy hosting
   - Upload all files to the root directory

3. **Via cPanel:**
   - Log into cPanel
   - Use the File Manager
   - Navigate to `public_html`
   - Upload all files

### Customization

#### Update Contact Links

Edit `script.js` and update the `updateContactLinks()` function with your actual URLs:

```javascript
contactCards[0].href = 'https://twitch.tv/troythedecoyx';
contactCards[1].href = 'https://twitter.com/troythedecoyx';
contactCards[2].href = 'https://discord.gg/your-server';
contactCards[3].href = 'mailto:hello@troythedecoyx.com';
```

Or directly edit the `href` attributes in `index.html` for the contact cards.

#### Update Colors

Edit `styles.css` and modify the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... etc */
}
```

#### Add Real Projects

When you have projects ready, update the project cards in `index.html`:
- Replace "Coming Soon" badges with actual project links
- Add screenshots or demos
- Update descriptions with real project details

## File Structure

```
troythedecoyx.com/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add a blog section for streaming updates
- Integrate Twitch API to show live status
- Add a portfolio section with project details
- Create a contact form
- Add dark/light theme toggle
- Integrate analytics

## Notes

- The site is designed to be lightweight and fast
- All animations use CSS for optimal performance
- The design is mobile-first and responsive
- Ready for your rebrand and NYE/NYD relaunch! 🎉

## License

© 2024 troythedecoyx. All rights reserved.

---

Built with ❤️ while learning to code

