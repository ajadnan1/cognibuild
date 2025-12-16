import { siteConfig } from "@/app/config/site";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.png`,
        sameAs: [
            siteConfig.links.linkedin,
        ],
        description: siteConfig.description,
    };

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
