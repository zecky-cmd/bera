

// Données statiques pour l'instant (à remplacer par Supabase plus tard)
export const projects = [
    {
        id: 1,
        title: "ERP de Gestion Scolaire (Backend)",
        description: "API robuste de gestion d'établissement scolaire incluant un système de sécurité RBAC (Admin, Direction, Enseignant, Parent, Élève), un moteur de calcul automatique des résultats académiques, le suivi financier des frais de scolarité et un tableau de bord analytique complet.",
        tags: ["NestJS", "Prisma", "PostgreSQL", "Docker", "Swagger", "JWT"],
        image: "https://placehold.co/600x400/0f172a/ffffff?text=School+Management+API",
        demoUrl: "http://localhost:3000/api/docs",
        githubUrl: "https://github.com/zecky-cmd/systeme-de-gestion-school.git"
    },
    {
        id: 2,
        title: "Pointage Trabad",
        description: "Conception et développement d'une application web de gestion du pointage du personnel (Next.js, React, TypeScript, Supabase), déployée sur Vercel et utilisée quotidiennement par l'ensemble des employés.",
        tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
        image: "https://placehold.co/600x400/1e293b/ffffff?text=Pointage",
        demoUrl: "#",
        githubUrl: "https://github.com/zecky-cmd/pointage-trabad.git",
    },
    {
        id: 3,
        title: "Portfolio Personnel",
        description: "Mon site personnel présentant mes projets et compétences. Design moderne et animations fluides.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "https://placehold.co/600x400/1e293b/ffffff?text=Portfolio",
        demoUrl: "#",
        githubUrl: "https://github.com/zecky-cmd/pointage-trabad.git",
    },

];