# Krishnam Academy

Marketing website for **Krishnam Academy** — a Mathematics & Science coaching centre in Savda, Maharashtra (CBSE Std. VIII–X).

Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in SMTP credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `SMTP_EMAIL` | Gmail address used to send contact form emails |
| `SMTP_PASSWORD` | Gmail [App Password](https://support.google.com/accounts/answer/185833) (not your regular password) |

Without these, the contact form still shows success in development but no email is sent.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Deploy on Vercel

1. Push to GitHub and import the repo on [Vercel](https://vercel.com).
2. Add `SMTP_EMAIL` and `SMTP_PASSWORD` in **Project Settings → Environment Variables**.
3. Set the production domain to `https://krishnamacademy.in`.
