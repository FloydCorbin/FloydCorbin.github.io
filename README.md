# GitHub-Pages-Portfolio

## Clean-environment Lighthouse audit

A fresh Lighthouse audit was run against the portfolio in a controlled browser environment to separate browser-extension overhead from site-specific issues.

Methodology:
- Chrome Incognito session
- All browser extensions disabled
- Fresh audit run with no prior cached state
- Local static host serving the same GitHub Pages content used by the site

Audit summary (converted from Lighthouse's 0-1 scoring scale):
- Performance: 75/100
- Accessibility: 100/100
- Best Practices: 96/100

This baseline makes it clear that the current site is already strong in accessibility and best-practice compliance, with the main remaining opportunity being front-end performance optimizations rather than extension-related slowdown.
