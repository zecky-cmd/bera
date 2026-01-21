-- Create the table for personal information
create table public.personal_info (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  first_name text null,
  last_name text null,
  avatar_url text null,
  role text null,
  bio text null,
  email text null,
  linkedin_url text null,
  github_url text null,
  constraint personal_info_pkey primary key (id)
);
-- Enable Row Level Security (RLS)
alter table public.personal_info enable row level security;
-- Create a policy that allows anyone to read the data
create policy "Enable read access for all users" on public.personal_info
  for select using (true);
-- Insert initial data (You can edit this before running)
insert into public.personal_info (first_name, last_name, bio, role, avatar_url, email)
values (
  'Ezchiel',
  'YAO',
  'Je conçois des solutions performantes et esthétiques. Passionné par le code propre et les interfaces utilisateur intuitives.',
  'Développeur Web & Data Analyst',
  'https://placehold.co/400x400/1e293b/ffffff?text=Ezechiel',
  'contact@example.com'
);