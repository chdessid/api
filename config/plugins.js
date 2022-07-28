module.exports = ({ env }) => ({
  "measurement-protocol": {
    config: {
      apiSecret: 'NBsHUHwLQve9M3nd6djcbw',
      measurementId: 'G-NY3Q6MBPT1',
      useValidationServer: false,
    }
  },
 deepl: {
    enabled: false,
    config: {
      // your DeepL API key
      apiKey: 'key',
      // whether to use the free or paid api, default true
      freeApi: true,
      // Which field types are translated (default string, text, richtext, components and dynamiczones)
      translatedFieldTypes: [
        'string',
        'text',
        'richtext',
        'component',
        'dynamiczone',
      ],
      // If relations should be translated (default true)
      translateRelations: true,
      // You can define a custom glossary to be used here (see https://www.deepl.com/docs-api/managing-glossaries/)
      glossaryId: 'customGlossary',
    },
  },
  'strapi-plugin-moesif': {
    enabled: false,
    config: {
      moesif: {

      }
    },
  },
  
});

