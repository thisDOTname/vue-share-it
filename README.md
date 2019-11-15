# vue-share-it
> A highly customizable Vue.js component for sharing links on social networks.

## Features

* Easy install
* Highly customizable
* Extensive documentation & examples
* Developer support
* SEO friendly

## Examples
[Live demo](http://github.com)

[Examples repository](http://github.com)

## Installation

```sh
# Yarn 
yarn add vue-share-it

# NPM 
npm install vue-share-it --save
```

## Usage

**Browserify / Webpack**

```javascript
import shareIt from 'vue-share-it';

Vue.use(shareIt);
```

**HTML**

```html
<script src="https://unpkg.com/vue-share-it@1.0.12/dist/vue-share-it.js"></script>
```

**Using vue-share-it component**

**Default**

```html
<share-it />
```
---
**Global configs**
```html
<share-it text="This is sample text" url="https://www.google.com" :height="600" :width="600" />
```
---
**Targets**
```html
<share-it :targets="['twitter', 'facebook']" />
```
---
**Dark**
```html
<share-it dark />
```
---
**Dense**
```html
<share-it dense />
```
---
**Outlined**
```html
<share-it outline />
```
---
**Button configs**
```javascript
const share = {
    twitter: {
         size: "2x",
         label: "Tweet it!"
    },
    linkedin: {
      size: "2x",
      color: "#828282",
      backgroundColor: "#25B89A"
    },
    facebook: {
      size: "2x",
      dark: true
    },
    whatsapp: {
      size: "2x",
      dense: true
    },
}
```
```html
<share-it :shareConfig="share" />
```
---
**Icons**
```html
<share-it icons />
```
---
**Outlined icons**
```html
<share-it icons outline />
```
---
**Rounded icons**
```html
<share-it icons outline round />
```
---
**Icon configs**
```javascript
const iconConfig = {
    twitter: {
      icon: true,
      size: "xs",
      color: "#feab6e",
      outline: true,
      round: true,
      backgroundColor: 'yellow'
    },
    linkedin: {
      icon: true,
      size: "lg",
      outline: true,
      round: true,
      
    },
    facebook: {
      icon: true,
      size: "2x",
      outline: true,
      round: true
    },
    whatsapp: {
      icon: true,
      size: "3x",
      outline: true,
      round: true
    },
    reddit: {
      icon: true,
      size: "4x",
      outline: true,
      round: true
    },
  }
```
```html
<share-it :shareConfig="iconConfig" />
```
---