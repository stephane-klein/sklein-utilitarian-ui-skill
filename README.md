> [!NOTE]
> Rédaction initiale générée par Claude Sonnet, puis enrichie par itérations avec deepseek-v4-flash (session du 2026-07-05). Relecture humaine le 2026-07-05.
> Répartition estimée : ~50% humain (vision, intuitions, guidance), ~50% LLM (rédaction, recherche de ressources et concepts existants).

> [!WARNING]
> **Work in progress** — Ce skill est un premier jet. Je ne l'ai jamais appliqué sur un cas concret. Il formalise une intuition, pas une pratique éprouvée. Il évoluera au fil des projets réels.

# sklein Utilitarian UX

> Un skill de design pour construire des outils web fonctionnels, rapides et sobres, dans la tradition de [GoatCounter](https://www.goatcounter.com/), [Miniflux](https://miniflux.app/), [Hacker News](https://news.ycombinator.com/) et [Sourcehut](https://sr.ht/).

---

## Qu'est-ce que c'est ?

J'ai écrit ce skill suite à une tentative d'extraire l'essence UX de projets comme Miniflux et GoatCounter — un travail que j'ai mené en discutant avec Sonnet 4.6. J'apprécie leurs choix UX : des interfaces qui ne sont pas tape-à-l'oeil mais que je trouve très agréables à utiliser. J'ai eu envie de formaliser ce qu'elles partagent. Je l'appelle "utilitarian UX" faute de mieux — voir les propositions de noms en fin de document.

### L'idée centrale : outil plutôt que vitrine

Concevoir une interface comme un outil, pas comme une vitrine. Les conventions visuelles qui convainquent un visiteur en 10 secondes sur une landing page ralentissent un utilisateur quotidien qui veut juste accomplir une tâche.

Ce n'est pas du minimalisme esthétique, du moins pas seulement. C'est une position fonctionnelle : chaque élément visuel doit gagner sa place en servant l'utilisateur, pas en impressionnant le visiteur.

### La convivialité illichienne

J'ai découvert Ivan Illich et son concept de [convivialité](https://en.wikipedia.org/wiki/Tools_for_Conviviality) mi-2025, et j'ai été frappé par à quel point cela rejoint ce que je cherche à formaliser ici.  
Une mise en garde immédiate : la convivialité illichienne n'a rien à voir avec ce qu'on appelle une « interface conviviale » dans le jargon UX moderne. Une interface conviviale (au sens courant) évite à l'utilisateur d'avoir à comprendre le fonctionnement — elle est polie, intuitive, elle « devine » ce que tu veux. La complexité est portée par le concepteur, pas par l'utilisateur.  
Un outil convivial au sens d'Illich maximise l'autonomie durable : il est compréhensible, contrôlable, adaptable, quittable.  
Une interface web conviviale au sens d'Illich doit être non infantilisante : compréhensible (URL explicite, pas de magie), contrôlable (l'utilisateur décide, pas l'interface) et transparente (le fonctionnement est visible).  
Le paradoxe, c'est qu'une interface polie est souvent anti-conviviale (elle verrouille l'utilisateur dans une boîte noire gérée par un expert) tandis qu'une interface sobre, voire austère, peut être profondément conviviale (l'utilisateur voit comment elle marche). C'est exactement ce que utilitarian UX cherche : des outils que leur utilisateur maîtrise, pas l'inverse.

### Refus de l'infantilisation

Je pense par exemple à MacOS qui cache les fichiers système, à Chrome qui cache l'URL derrière le seul nom de domaine (desktop) ou le titre de la page (mobile) — [politique de simplification des URL](https://chromium.googlesource.com/chromium/src/+/main/docs/security/simplified-domains-policy.md) — rendant le partage précis impossible. Ce ne sont pas des outils conviviaux — ce sont des outils qui infantilisent en dissimulant le fonctionnement derrière une couche de polissage. Utilitarian UX refuse cette infantilisation : l'interface doit révéler, pas cacher.

### Pas de dark patterns

Dans le même esprit, utilitarian UX refuse les [dark patterns](https://en.wikipedia.org/wiki/Dark_pattern) — ces interfaces conçues pour tromper ou manipuler (confirmer un abonnement caché, déselectionner une option, rendre le désabonnement difficile). Le but n'est pas d'optimiser l'attention ou le temps passé, mais de permettre à l'utilisateur d'accomplir sa tâche et de repartir. Les limites et fonctionnalités indisponibles sont montrées explicitement — pas de bouton gris sans explication, pas de fonctionnalité cachée parce qu'elle n'est pas encore prête.

### Un signal visuel intentionnel

Je pense que ce choix esthétique pourrait avoir un effet secondaire intéressant. En adoptant ce style, l'outil envoie, il me semble, un signal visuel immédiat : un utilisateur qui tombe sur l'interface se dit « c'est bizarre, ce n'est pas comme les autres applis ».
J'aimerais que cette étrangeté intentionnelle dise : cet outil n'essaie pas de t'enfermer, de te vendre quelque chose, ou de te garder captif.
Là où l'esthétique marketing SaaS (software-as-a-service) signale « startup sérieuse », j'aimerais que l'esthétique utilitarian UX signale « outil convivial ».

---

## Historique et généalogie

J'ai rassemblé ici ce que je comprends de la généalogie de ce paradigme. Plusieurs questions restent ouvertes sur ses origines exactes.

### Les origines : le web pré-framework (avant 2010)

[Hacker News](https://news.ycombinator.com/) (2007) en est, je pense, le cas fondateur involontaire. [Paul Graham](https://paulgraham.com/) a lancé un forum sur du code Lisp brut, sans designer. Table HTML, liens orange, fond blanc. Il n'a jamais été redesigné. Aujourd'hui encore, c'est l'un des sites les plus lus par les développeurs du monde entier — ce qui me semble invalider empiriquement l'idée qu'un bon design est nécessaire pour retenir les utilisateurs.

[Craigslist](https://www.craigslist.org/) (1995) est l'exemple extrême : liste de liens, zéro image sur la homepage, interface quasi-identique depuis 30 ans, domination du marché des petites annonces aux USA pendant deux décennies avec environ 50 personnes. La sobriété n'y est pas une doctrine assumée mais de l'inertie — ce qui en fait un cas limite plutôt qu'une référence de qualité d'exécution, selon moi.

### La réaction : contre le web obèse (2012–2018)

À partir de 2012–2014, [Stripe](https://stripe.com/) redéfinit ce que sérieux signifie visuellement pour une startup : typographie soignée, micro-animations, attention au détail. L'esthétique est imitée massivement, mais sans en comprendre la raison, il me semble. Le résultat : la SaaS marketing aesthetic — gradients, cards avec shadows, hero sections — diffusée industriellement par [Tailwind UI](https://tailwindui.com/) et [shadcn/ui](https://ui.shadcn.com/) à partir de 2021.

C'est cette inflation visuelle qui provoque une réaction consciente chez quelques développeurs. Je ne sais pas s'ils se coordonnaient ou si chacun est arrivé à la même conclusion indépendamment :

Maciej Cegłowski ([Pinboard](https://pinboard.in/)) publie [The Website Obesity Crisis](https://idlewords.com/talks/website_obesity.htm) en 2015, un texte fondateur qui mesure concrètement le poids des pages et relie l'obésité web au manque de respect pour l'utilisateur.

[Drew DeVault](https://drewdevault.com/) ([Sourcehut](https://sr.ht/)) va plus loin : il publie [des benchmarks de performance](https://sourcehut.org/blog/2021-05-08-sourcehut-is-the-fastest-who-cares) comparant Sourcehut (60ms) à GitHub (3s+) et documente explicitement sa philosophie dans les pages de son site. Sourcehut est probablement l'exemple le plus intentionnel et articulé de ce paradigme, à mon avis.

[Martin Tournoij](https://www.arp242.net/) ([GoatCounter](https://www.goatcounter.com/)) écrit explicitement la distinction entre graphical design et good UI design. Ses [notes de design](https://goatcounter.com/design) documentent chaque choix : pourquoi une liste plutôt qu'une carte, pourquoi des liens texte plutôt qu'un dropdown, pourquoi Chrome plutôt que Chrome 124.0.6367.

[Frédéric Guillot](https://miniflux.app/) ([Miniflux](https://miniflux.app/)) pousse la logique jusqu'à en faire une politique produit : la page [/opinionated.html](https://miniflux.app/opinionated.html) documente les refus. The content is the most important thing. Everything else is just noise. Le design s'inspire explicitement de HN, [Lobsters](https://lobste.rs/), [Pinboard](https://pinboard.in/). Miniflux est aussi un cas exemplaire d'**URL-driven state** : aucune modale, chaque vue a sa propre URL, l'état est toujours dans la barre d'adresse.

### Aujourd'hui : une tradition sans école

Ce paradigme existe comme pratique partagée mais sans manifeste fondateur unique, sans conférence, sans communauté organisée, me semble-t-il. Les praticiens se reconnaissent par leurs références communes (Illich, la convivialité des outils, le FOSS — free and open-source software —, la souveraineté numérique) plus que par un label partagé.

Le mouvement [htmx](https://htmx.org/) (2020–) et la résurgence du server-side rendering avec [SvelteKit](https://kit.svelte.dev/) et [Astro](https://astro.build/) ont partiellement réhabilité l'approche document d'abord et le principe **URL-driven state** dans l'écosystème mainstream — sans nécessairement aller aussi loin sur le plan visuel, je pense.

---

## Vocabulaire

Quelques termes que j'utilise dans ce skill, sans prétendre qu'ils soient parfaits :

- **SaaS marketing aesthetic** — L'ensemble des conventions visuelles optimisées pour convaincre un visiteur non-technique en 10 secondes. Cards avec shadows, gradients, hero sections, animations au scroll. Diffusée par [Tailwind UI](https://tailwindui.com/) et [shadcn/ui](https://ui.shadcn.com/). À distinguer du bon design : [Stripe](https://stripe.com/) en est la source, mais ses imitateurs ont copié la forme sans la rigueur. Voir [Homogeneous by Design](https://joncphillips.com/homogeneous-by-design/) et [Why Every SaaS Looks the Same in 2026](https://brainy.ink/paper/why-every-saas-looks-the-same-2026).

- **Densité scannable** — Plus d'information par pixel qu'une interface SaaS typique, mais organisée hiérarchiquement. Dense ne veut pas dire chaotique. Une table de données bien structurée est plus dense et plus lisible qu'une grille de cards.

- **Friction salutaire** — Dans ce paradigme, la difficulté technique d'ajouter un élément décoratif est une feature : elle te force à te demander si cet élément est nécessaire. Le CSS brut crée cette friction ; Tailwind peut l'éliminer. Je n'ai pas encore tranché si c'est un problème ou une opportunité.

- **Middot navigation** — Le pattern de navigation Item A · Item B · Item C séparé par · (U+00B7, middot). Canonique dans cette esthétique, hérité de Hacker News.

Document flow — Le flux naturel du document HTML, sans position: fixed, sans min-height: 100vh, sans centering vertical. Les pages de login, d'erreur, et de settings s'inscrivent dans le même flux que les pages de contenu.

- **Convivialité illichienne** — Concept d'Ivan Illich (*Tools for Conviviality*, 1973) : un outil convivial est celui que l'utilisateur peut comprendre, contrôler, adapter et quitter sans dépendre d'un expert. Transposé à une interface web : compréhensible, contrôlable et transparente. À ne **pas** confondre avec « interface conviviale » (facile, intuitive) — les deux sont presque opposés. Voir le développement dans la section « Qu'est-ce que c'est ? ».

- **URL-driven state** — Principe selon lequel l'URL est la source de vérité pour l'état de l'interface : tout état significatif (onglet actif, filtre, page, paramètre) est encodé dans l'URL, pas caché dans du JS ou une boîte de dialogue. Conséquence directe : une modale a sa propre route, un résultat de filtre est partageable par copier-coller de l'URL, le refresh ne perd rien. Ce principe est notamment porté par les communautés SvelteKit et Remix.

- **Markdown natif** — Le Markdown est le format d'échange standard pour le texte structuré. Dans ce paradigme, il est supporté nativement comme format de saisie et d'affichage, sans être exclusif. Pas de barre d'outils WYSIWYG qui enferme dans un format propriétaire — l'utilisateur peut écrire en Markdown, copier-coller du Markdown, exporter en Markdown.

- **Clipboard sovereignty** — Principe selon lequel le navigateur ne doit jamais bloquer ou altérer le copier-coller. L'utilisateur contrôle son presse-papier. Pas de blocage « pour des raisons de sécurité » — la sécurité ne justifie pas de priver l'utilisateur du contrôle de ses données.

- **Comportement vs. markup** — La règle pour décider si un composant Svelte/React est justifié : un composant encapsule du comportement réutilisable, pas du markup. `<DataTable columns={...}>` avec 15 props est du markup déguisé en composant. InlineConfirm est du comportement légitime.

- **Rich text avec contrainte** — [ProseMirror](https://prosemirror.net/) est compatible avec ce paradigme quand le schéma est contraint : gras, italique, liens, listes, citations. Pas de sélecteur de couleur, pas de font picker, pas de toolbar flottante à la Notion.

---

## Propositions de noms

Je n'ai pas trouvé de terme consensuel pour désigner cette doctrine. Voici les candidats que j'ai rencontrés ou envisagés, avec leurs avantages et inconvénients tels que je les vois :

### Les plus descriptifs

- **Utilitarian UX** (utilisé dans ce skill) : Précis philosophiquement — renvoie à l'[utilitarisme](https://en.wikipedia.org/wiki/Utilitarianism) de Bentham/Mill, le plus grand bien pour le plus grand nombre, et au utilitarian design au sens de [David Pye](https://en.wikipedia.org/wiki/David_Pye_(craftsman)). Mais utilitarian a une connotation de laideur fonctionnelle dans le langage courant, je trouve.
- **Functional UI** : Simple et direct. Mais functional est aussi un terme de programmation (functional programming) et peut créer une confusion.
- **Document-first design** : Pointe vers la racine technique : le document HTML comme structure de base, avant toute abstraction UI. Précis, mais peu évocateur pour quelqu'un qui ne connaît pas l'histoire.

### Les plus évocateurs

- **Tool-mode design** : La distinction outil/vitrine est le coeur du paradigme. L'interface est en mode outil, pas en mode présentation. Court, mémorable.
- **Plain web / Plain UI** : En référence à plain text, plain speech. Évoque la sobriété sans l'austérité. Risque d'être confondu avec pas beau, probablement.
- **Workware design** : Par analogie avec workwear (vêtements de travail) : conçu pour durer, pas pour être vu. Robuste, fonctionnel, sans décoration superflue.
- **Quiet UI** : : Contre le bruit visuel de l'esthétique SaaS. Évocateur, mais peut sembler trop doux, il me semble.
- **Convivial UI / Convivial design** : Directement hérité d'Illich — un design qui privilégie des **URL explicites et partageables** (pas d'état caché dans du JS), la **vitesse et les fonctionnalités avant l'esthétisme**, qui ne fait pas de **signaling** (le but est de faire l'action, pas d'impressionner), et qui **explique son fonctionnement** plutôt que de le cacher derrière des abstractions magiques. Attention : ce terme souffre d'une homonymie trompeuse avec « interface conviviale », qui désigne presque l'inverse. Nécessite de préciser systématiquement « convivialité illichienne » pour éviter le contresens.

### Les plus honnêtes

- **Boring-good design** : En référence à boring technology ([Dan McKinley](https://mcfunley.com/choose-boring-technology), 2015) : la technologie ennuyeuse est souvent le meilleur choix. Boring-good capture l'idée que le paradigme est délibérément non-excitant et délibérément bon.
- **Anti-SaaS UI** : Définitionnel par la négative. Exact, mais agressif. Utile en interne, à éviter en externe, probablement.
- **Indie tool aesthetic** : Ancré dans le contexte socio-économique : ces interfaces sont produites par des développeurs indépendants, sans département marketing, sans VC qui exige de paraître sérieux. La contrainte économique produit l'esthétique.

### Ma préférence aujourd'hui

Pour la communication externe, je penche pour boring-good — il porte l'humour et la confiance en soi. Pour la communication technique, tool-mode explique le pourquoi du paradigme. Et utilitarian UX dans ce skill reste précis et sans ambiguïté pour un contexte de prompting.

Mais je n'exclus pas de changer d'avis en cours de route.

---

## Ce que ce skill n'est pas

Quelques malentendus à clarifier :

- Un jugement sur les apps qui ont une autre esthétique. [Figma](https://www.figma.com/), [Linear](https://linear.app/), et [Vercel](https://vercel.com/) ont des interfaces réfléchies et adaptées à leurs publics, je trouve.
- Une prescription de laideur. GoatCounter et Miniflux sont soignés dans leur sobriété.
- Une règle contre le rich text. ProseMirror + Markdown est compatible avec ce paradigme.
- Un dogme anti-Tailwind. Tailwind est un outil ; ce sont les patterns qu'il facilite qui peuvent poser problème, à mon avis.
- Un manifeste FOSS. La doctrine peut s'appliquer à des produits commerciaux. [Fastmail](https://www.fastmail.com/) en est un exemple partiel.

---

## Ressources du skill

- `references/` — pages HTML statiques illustrant les patterns du skill (`login.html`, `signup.html`, `forgot-password.html`, `profile.html`, `users.html`, `time-entries.html`, `admin-settings.html`, `admin-users.html`)
- `examples/chefchef-theme/` — implémentation SvelteKit 5 + UnoCSS des mêmes écrans

## Références et lectures

- [The Website Obesity Crisis](https://idlewords.com/talks/website_obesity.htm) — Maciej Cegłowski (2015) — Le texte fondateur
- [Notes de design GoatCounter](https://goatcounter.com/design) — Martin Tournoij — La doctrine documentée cas par cas
- [/opinionated.html](https://miniflux.app/opinionated.html) — Miniflux — La politique produit
- [Blog Drew DeVault](https://drewdevault.com/) — Les benchmarks Sourcehut vs GitHub (voir [Sourcehut is the fastest. So what?](https://sourcehut.org/blog/2021-05-08-sourcehut-is-the-fastest-who-cares))
- [Motherfucking Website](https://motherfuckingwebsite.com/) / [Better Motherfucking Website](http://bettermotherfuckingwebsite.com/) — La démonstration par l'absurde
- [Tools for Conviviality](https://en.wikipedia.org/wiki/Tools_for_Conviviality) — Ivan Illich (1973) — L'arrière-fond philosophique sur les outils qui émancipent vs. les outils qui aliènent
