import fs from 'fs';
import path from 'path';

// Define LocalizedField type locally since the import path is not available
export type LocalizedField = {
    en: string;
    ar: string;
};

export type Developer = {
    id: string;
    name: string;
    slug: string;
    logo: string;
    projects: number;
    description: string;
};

export type UnifiedDeveloper = {
    id: string;
    name: LocalizedField;
    slug: string;
    logo: string;
    description: LocalizedField;
    projectCount: number;
};

/**
 * Dynamic developers array - reads from data directory at runtime
 * Fallback to hardcoded list if data directory is not available
 */
let dynamicDevelopers: Developer[] = [];

/**
 * Load developers dynamically from the data directory
 */
function loadDynamicDevelopers(): Developer[] {
    try {
        console.log('⚙️ Loading developers dynamically...');
        const dataDir = path.join(process.cwd(), 'data');
        
        if (!fs.existsSync(dataDir)) {
            console.warn('⚠️ Data directory not found, using fallback developers');
            return getFallbackDevelopers();
        }

        const entries = fs.readdirSync(dataDir, { withFileTypes: true });
        const developerSlugs = entries
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name.toLowerCase())
            .filter(name => !name.startsWith('.') && name !== 'node_modules' && name !== '__tests__');

        console.log(`⚙️ Found ${developerSlugs.length} developer directories: ${developerSlugs.join(', ')}`);

        const developers: Developer[] = developerSlugs.map(slug => {
            const developerDir = path.join(dataDir, slug);
            let projectCount = 0;

            try {
                // Count project folders
                const projectEntries = fs.readdirSync(developerDir, { withFileTypes: true });
                projectCount = projectEntries.filter(entry => entry.isDirectory()).length;
            } catch (error) {
                console.warn(`⚠️ Error counting projects for ${slug}:`, (error as Error).message);
            }

            return {
                id: slug,
                name: slug.charAt(0).toUpperCase() + slug.slice(1),
                slug: slug,
                logo: getDeveloperLogo(slug),
                projects: projectCount,
                description: getDeveloperDescription(slug)
            };
        });

        console.log(`✅ Loaded ${developers.length} developers with ${developers.reduce((sum, dev) => sum + dev.projects, 0)} total projects`);
        return developers;
    } catch (error) {
        console.warn('⚠️ Error loading dynamic developers, using fallback:', (error as Error).message);
        return getFallbackDevelopers();
    }
}

/**
 * Get fallback developers (hardcoded)
 */
function getFallbackDevelopers(): Developer[] {
    return [
        { id: 'damac', name: 'DAMAC Properties', slug: 'damac', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Damac_Properties_logo.svg', projects: 0, description: 'Luxury real estate developer in Dubai.' },
        { id: 'emaar', name: 'Emaar Properties', slug: 'emaar', logo: 'https://upload.wikimedia.org/wikipedia/en/3/33/Emaar_Properties_logo.svg', projects: 0, description: 'One of Dubai\'s largest developers.' },
        { id: 'nakheel', name: 'Nakheel', slug: 'nakheel', logo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Nakheel_Logo.svg', projects: 0, description: 'Developer of iconic waterfront projects.' },
        { id: 'sobha', name: 'Sobha Realty', slug: 'sobha', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Sobha_Developers_logo.svg', projects: 0, description: 'Focuses on high-quality construction.' },
    ];
}

/**
 * Get developer logo URL
 */
function getDeveloperLogo(slug: string): string {
    const logoMap: Record<string, string> = {
        'damac': 'https://upload.wikimedia.org/wikipedia/en/5/53/Damac_Properties_logo.svg',
        'emaar': 'https://upload.wikimedia.org/wikipedia/en/3/33/Emaar_Properties_logo.svg',
        'nakheel': 'https://upload.wikimedia.org/wikipedia/en/0/02/Nakheel_Logo.svg',
        'sobha': 'https://upload.wikimedia.org/wikipedia/en/5/5b/Sobha_Developers_logo.svg'
    };
    return logoMap[slug] || '';
}

/**
 * Get developer description
 */
function getDeveloperDescription(slug: string): string {
    const descriptionMap: Record<string, string> = {
        'damac': 'Luxury real estate developer in Dubai.',
        'emaar': 'One of Dubai\'s largest developers.',
        'nakheel': 'Developer of iconic waterfront projects.',
        'sobha': 'Focuses on high-quality construction.'
    };
    return descriptionMap[slug] || `${slug.charAt(0).toUpperCase() + slug.slice(1)} - Real Estate Developer`;
}

/**
 * Initialize dynamic developers
 */
dynamicDevelopers = loadDynamicDevelopers();

/**
 * Export dynamic developers array
 * This will be updated when the module is reloaded
 */
export const developers = dynamicDevelopers;

/**
 * Utility function to refresh developers array
 * Call this when data changes
 */
export function refreshDevelopers(): Developer[] {
    dynamicDevelopers = loadDynamicDevelopers();
    return dynamicDevelopers;
}

/**
 * Get developers as UnifiedDeveloper format
 */
export function getUnifiedDevelopers(): UnifiedDeveloper[] {
    return dynamicDevelopers.map(dev => ({
        id: dev.id,
        name: { en: dev.name, ar: dev.name },
        slug: dev.slug,
        logo: dev.logo,
        description: { en: dev.description, ar: dev.description },
        projectCount: dev.projects
    }));
}
