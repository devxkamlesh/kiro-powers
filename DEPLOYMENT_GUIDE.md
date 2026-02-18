# Deployment Guide

## Step 1: Push to GitHub

### Initialize Git (if not already done)

```bash
cd kiro-powers-portfolio
git init
git add .
git commit -m "Initial commit: Kiro Powers portfolio website"
```

### Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `kiro-powers`
3. Description: "CTO-in-a-box for SaaS Founders - Production-grade Kiro Powers portfolio"
4. Keep it Public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Push to GitHub

```bash
git remote add origin https://github.com/devxkamlesh/kiro-powers.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your `kiro-powers` repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
6. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? kiro-powers
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

### In Vercel Dashboard:

1. Go to your project settings
2. Click "Domains"
3. Add your domain: `kiro-powers.dev`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

### DNS Settings for kiro-powers.dev:

Add these records in your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Step 4: Verify Deployment

1. Visit your Vercel URL (e.g., `kiro-powers.vercel.app`)
2. Check all pages load correctly
3. Test responsive design on mobile
4. Verify animations work smoothly
5. Check custom domain (if configured)

## Environment Variables

This project doesn't require any environment variables for basic deployment.

If you add GitHub API integration later, you'll need:

```
GITHUB_TOKEN=your_github_personal_access_token
```

Add this in Vercel Dashboard → Settings → Environment Variables

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

To disable auto-deployment:
1. Go to Project Settings → Git
2. Configure deployment branches

## Troubleshooting

### Build Fails

Check build logs in Vercel dashboard. Common issues:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to test
- Environment variables: Ensure all required vars are set

### Slow Performance

- Enable Vercel Analytics in project settings
- Check Lighthouse scores
- Optimize images if needed
- Review bundle size with `npm run build`

### Custom Domain Not Working

- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain status in Vercel dashboard
- Ensure domain is not already in use

## Post-Deployment Checklist

- [ ] Site loads on production URL
- [ ] All pages render correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive design works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] OG images display correctly on social media
- [ ] Favicon appears in browser tab
- [ ] GitHub links work correctly
- [ ] Contact links functional

## Monitoring

### Vercel Analytics (Free)

Enable in Project Settings → Analytics to track:
- Page views
- Performance metrics
- User demographics
- Real User Monitoring (RUM)

### Google Analytics (Optional)

Add to `app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## Support

For deployment issues:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

Good luck with your deployment! 🚀
