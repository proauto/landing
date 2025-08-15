// Environment configuration
export const config = {
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || '',
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || ''
    },
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD
};

// Validate required environment variables
export function validateConfig() {
    const required = [
        'VITE_SUPABASE_URL',
        'VITE_SUPABASE_ANON_KEY'
    ];
    
    const missing = required.filter(key => !import.meta.env[key]);
    
    if (missing.length > 0) {
        console.warn('Missing environment variables:', missing);
        return false;
    }
    
    return true;
}