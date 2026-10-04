create table if not exists public.leads (
  id uuid primary key,
  created_at timestamptz not null default now(),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  website text,
  business_type text,
  challenge text not null,
  services jsonb not null default '[]'::jsonb,
  budget text,
  timeline text,
  message text not null,
  status text not null default 'new'
);

alter table public.leads enable row level security;

-- Do not expose the service-role key in the browser. The Next.js API route
-- writes with the service-role key on the server.
