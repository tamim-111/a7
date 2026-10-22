## Folder Structure:

```

bazardor/
├── public/
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.ts
│   │   │
│   │   ├── signin/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── profile/
│   │   │   ├── page.tsx
│   │   │   └── update/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── PriceTicker.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── PriceRisers.tsx
│   │   │   └── PriceFallers.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductSkeleton.tsx
│   │   ├── categories/
│   │   │   └── CategorySort.tsx
│   │   ├── auth/
│   │   │   ├── SignInForm.tsx
│   │   │   └── SignUpForm.tsx
│   │   └── profile/
│   │       └── UpdateProfileForm.tsx
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── products.ts
│   │   │   └── categories.ts
│   │   ├── auth.ts
│   │   ├── auth-client.ts
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── category.ts
│   │   └── user.ts
│   │
│   └── hooks/
│       └── useSession.ts
│
├── .env.example
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```