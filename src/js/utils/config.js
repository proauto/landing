// Environment configuration with fallback handling
const getEnvVar = (key, fallback = '') => {
    try {
        return import.meta.env?.[key] || fallback;
    } catch (e) {
        console.warn(`Environment variable ${key} not available:`, e);
        return fallback;
    }
};

export const config = {
    api: {
        baseUrl: getEnvVar('DEV') ? '' : (typeof window !== 'undefined' ? window.location.origin : ''),
        assetsUrl: getEnvVar('DEV') ? '' : (typeof window !== 'undefined' ? window.location.origin : '')
    },
    isDevelopment: getEnvVar('DEV') === true,
    isProduction: !getEnvVar('DEV')
};

// Validate required environment variables (GCP configuration)
export function validateConfig() {
    // GCP-based configuration validation
    const apiUrl = config.api.baseUrl;
    
    if (!apiUrl) {
        console.warn('API base URL not configured');
        return false;
    }
    
    return true;
}