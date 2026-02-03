# Rave JS

Display Johns Hopkins Rave Alerts on your website.

## Usage

### Plug & Play

Drop ready-to-use files directly into your HTML.

1. Include the CSS within the `<head>` tag:
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@johnshopkins/ravejs/dist/main.css" type="text/css" />
    ```
1. Include the JS just above the closing `<body>` tag:
    ```html
    <script type="module" src="https://cdn.jsdelivr.net/npm/@johnshopkins/ravejs/dist/main.iife.js"></script>
    ```

#### Default display location

By default, the Rave alert will be added just after the opening `<body>` tag if there is an active alert. If there is a "skip to main content" element present (identified by the `.jhu-skip-to-main` class), the alert will be inserted immediately after this element.

#### Customizing the alert display location

To display the Rave alert in a custom location, add the following element where you want the alert to display:
```html
<div id="jhu-rave-alert"></div>
```

### Using the library

If you are using a build system or module bundler, you can use the Rave JS library in your workflow.

1. Install the library:
    ```bash
    npm install @johnshopkins/ravejs --save
    ```
1. Use the library:
    ```javascript
    import RaveAlert from '@johnshopkins/ravejs';
    new RaveAlert();
    ```
1. Optionally, define the container that the Rave Alert should be dropped into:
    ```javascript
    new RaveAlert(document.getElementById('jhu-rave-alert'));
    ```

## Development

Install dependencies:
```bash
yarn install
```

Run the development server:
```bash
yarn run dev
```

Build the library:
```bash
yarn run build
```

Preview the build:
```bash
yarn run preview
```
