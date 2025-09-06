export default function __(translations: any[],key: any, replacements?: Record<string, string>) {

    let translation = null;

    if (translations) {
      return translations[key] || key;
    } else {
      return key;
    }


    // // Handle replacements (if provided)
    // if (replacements) {
    //     Object.entries(replacements).forEach(([placeholder, value]) => {
    //         translation = translation.replace(`:${placeholder}`, value);
    //     });
    // }

    return translation;
}
