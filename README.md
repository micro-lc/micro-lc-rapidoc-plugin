# Microlc RapiDoc Plugin walkthrough

This plugin let you embed [RapiDoc](https://mrin9.github.io/RapiDoc/index.html) inside [microlc](https://github.com/mia-platform/microlc). 
It recives from the configuration the `openApiSpecUrl` to the .json file in order to obtain information about your APIs

## Configuration example

```json
{
    "id": "plugin-rapidoc",
    "label": "Rapidoc Plugin",
    "icon": "fas fa-redo",
    "order": 9,
    "integrationMode": "qiankun",
    "category": "API Documentation",
    "pluginRoute": "/rapidoc",
    "pluginUrl": "/micro-lc-rapidoc-plugin/",
    "props": {
    "openApiSpecUrl": "https://micro-lc.io/api/documentation/json"
    }
}
```