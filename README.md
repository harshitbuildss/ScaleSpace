# Premium Digital Growth Agency — Next.js

A production-oriented, premium B2B agency website focused on sales conversion, digital growth systems, AI automation, web/product development and personal branding.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Lead form

The form posts to `/api/leads` and is functional out of the box for validation and development logging. For production persistence, add the variables in `.env.example`.

### Supabase

Create a `leads` table (or set `SUPABASE_LEADS_TABLE`) with columns matching the payload in `app/api/leads/route.ts`.

### n8n / Make / webhook

Set `LEAD_WEBHOOK_URL` to forward each submitted lead to your automation system. Optionally set `LEAD_WEBHOOK_SECRET`.

## Replace before launch

- `[AGENCY NAME]`
- `[FOUNDER NAME]`
- Social profile links
- Legal links
- Metadata/domain
- Real client proof/testimonials/case studies when available

## Design notes

The site intentionally uses CSS/SVG animations rather than a heavy 3D library. It includes animated flowing background lines, moving data packets, interactive service cards, a business-problem diagnostic, dynamic workflow visuals, responsive navigation, FAQ accordions, and reduced-motion support.
