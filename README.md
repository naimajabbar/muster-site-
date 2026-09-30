# Muster Support Website

Static support / legal website for **Muster — Alarm & Habit App** by Jabbrix Studio.
Built as plain HTML + CSS + vanilla JS. No build step, no npm.

---

## Enabling GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under *Build and deployment*, set **Source** to `Deploy from a branch`.
4. Set **Branch** to `main` and the folder to `/docs`.
5. Click **Save**.
6. GitHub will provide a URL like `https://yourusername.github.io/your-repo-name/`.

The `.nojekyll` file in `/docs` tells GitHub Pages not to process the site with Jekyll.

---

## Where to paste the URLs

### App Store Connect

| Field                         | URL                                       |
|-------------------------------|-------------------------------------------|
| **Support URL**               | `https://yourdomain.com/` (root)          |
| **Privacy Policy URL**        | `https://yourdomain.com/privacy/`         |
| **Marketing URL**             | `https://yourdomain.com/` (root)          |
| **License Agreement (EULA)**  | `https://yourdomain.com/eula/`            |
| Terms of Use link in description | `https://yourdomain.com/terms/`        |

> Replace `yourdomain.com` with your custom domain, or use the `github.io` URL if no custom domain is configured.

### Google Play Console

| Field                         | URL                                       |
|-------------------------------|-------------------------------------------|
| **Privacy Policy**            | `https://yourdomain.com/privacy/`         |

---

## Custom domain (optional)

To use a custom domain (e.g. `support.muster.app`):

1. In the `/docs` folder, create a file named `CNAME` containing your domain name (no `https://`).
2. In your DNS settings, add a `CNAME` record pointing your subdomain to `yourusername.github.io`.
3. Back in GitHub Pages settings, enter the custom domain and enable **Enforce HTTPS**.

---

## Adding real assets

Drop the following files into `/docs/assets/`:

- `logo.png` — word-mark or lockup (transparent background, any reasonable size)
- `app-icon.png` — square app icon (512×512 recommended)

Drop screenshot files into `/docs/assets/screens/`:

- `muster_appstore_01.png` through `muster_appstore_10.png`, **excluding** `muster_appstore_08.png`

---

## TODO checklist

Before publishing, resolve every item marked `<!-- TODO: -->` or `[TODO]`:

| # | File                          | Item                                                                         |
|---|-------------------------------|------------------------------------------------------------------------------|
| 1 | `docs/terms/index.html`       | Set the **Effective Date**                                                   |
| 2 | `docs/terms/index.html`       | Set the **governing law jurisdiction**                                       |
| 3 | `docs/terms/index.html`       | Review the full draft and **remove the draft banner** when approved          |
| 4 | `docs/eula/index.html`        | Set the **Effective Date**                                                   |
| 5 | `docs/eula/index.html`        | Add the **developer legal address** (Section 8)                              |
| 6 | `docs/eula/index.html`        | Set the **governing law jurisdiction** (Section 12)                          |
| 7 | `docs/eula/index.html`        | Review the full draft and **remove the draft banner** when approved          |

---

## Pages

| Page                    | Path                    | Purpose                                              |
|-------------------------|-------------------------|------------------------------------------------------|
| Home / Support          | `/`                     | Hero, quick links, screenshot strip                  |
| Help & FAQ              | `/help/`                | Accordion FAQ covering all major topics              |
| Subscriptions & Billing | `/billing/`             | Plans, cancel, restore, refund, switching plans      |
| Privacy Policy          | `/privacy/`             | Full privacy policy with sticky TOC and summary      |
| Terms of Use            | `/terms/`               | Service terms — **draft, needs review**              |
| EULA                    | `/eula/`                | Apple-compliant EULA — **draft, needs review**       |
| Contact                 | `/contact/`             | mailto: link with prefilled template                 |
| 404                     | `/404.html`             | On-brand error page                                  |

---

## Support contact

**jabbrixstudio@gmail.com**

This email is defined in a comment at the top of each page so it can be swapped in one pass.
