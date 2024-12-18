export default function __(translations: any[],key: any, replacements?: Record<string, string>) {
  
    let translation = translations[key] || key;


    // // Handle replacements (if provided)
    // if (replacements) {
    //     Object.entries(replacements).forEach(([placeholder, value]) => {
    //         translation = translation.replace(`:${placeholder}`, value);
    //     });
    // }

    return translation;
}
