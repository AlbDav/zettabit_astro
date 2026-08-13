// GA4 is opt-in at build time: without PUBLIC_GA4_ID nothing ships — no gtag,
// no consent banner, no "manage cookies" link. That keeps local dev and any
// preview deploy tracking-free unless the variable is set on purpose.
export const ga4Id = (import.meta.env.PUBLIC_GA4_ID ?? '').trim();

export const analyticsEnabled = ga4Id.length > 0;
