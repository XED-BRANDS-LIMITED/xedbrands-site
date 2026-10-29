XED Brands static website

Files:
- index.html: responsive one-page website
- CNAME: custom domain for GitHub Pages (xedbrands.com)

Publish:
1. Create a public GitHub repository (e.g. xedbrands-site).
2. Add/upload index.html and CNAME to the repository root.
3. Repository Settings > Pages > Build and deployment: Deploy from a branch; select main and /(root); Save.
4. In Settings > Pages, set Custom domain to xedbrands.com and save.
5. In Namecheap Advanced DNS, configure the GitHub Pages apex A records and a www CNAME (see official GitHub docs). Do not delete email-related MX/TXT records.
6. Once DNS verifies, enable Enforce HTTPS.
