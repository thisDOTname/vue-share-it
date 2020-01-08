![Release](https://img.shields.io/npm/v/vue-share-it)
![Vue.js](https://img.shields.io/badge/vue-2.x-brightgreen)
![License](https://img.shields.io/npm/l/vue-share-it)

# vue-share-it
> A highly customizable Vue.js component for sharing links on social networks.

## Features

* Easy install
* Highly customizable
* Extensive documentation & examples
* Developer support
* SEO friendly

## Examples
[Live demo](https://codesandbox.io/s/vue-share-it-examples-hsmp4)

[Docs](https://thisdotname.github.io/vue-share-it/)

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
<script src="https://unpkg.com/vue-share-it@x.x.x/dist/vue-share-it.js"></script>
```

## Supported social-media platforms

|  Platform  |  Value   |
|:----------:|:---------|
| Twitter    | twitter  |
| LinkedIn   | linkedin |
| Facebook   | facebook |
| Whatsapp   | whatsapp |
| Reddit     | reddit   |
|            |          |


## API

**Props**

| Prop         | Data type | Default   | Description   |
|:------------:|:---------:|:---------:|:-------------:|
| text         | String    | ''        | Caption       |
| url          | String    | ''        | URL to share  |
| width        | Number    | 600       | Width of the share window      |
| height       | Number    | 600       | Height of the share window |
| dense        | Boolean   | false     | Dense button styling      |
| dark         | Boolean   | false     | Dark button styling      |
| targets      | Array     | []        | Specify social media targets, defaults to all available targets |
| icons        | Boolean   | false     | Use icons as buttons      |
| outline      | Boolean   | false     | Outline button styling |
| round        | Boolean   | false     | Round button styling for icons      |
| iconSize     | String    | lg        | Specify icon size. See [size chart](#sizeChart) below      |
| shareConfig  | Object    | {<br>linkedin: {},<br>twitter: {},<br>facebook: {},<br>whatsapp: {},<br>reddit: {},<br>} | Advanced configuration for target specific styling      |
|              |           |           |               |


**Events**

|    Name   |    Description                                            |    Value    |
|:---------:|:---------------------------------------------------------:|:------------|
| clicked   | Event that is emitted when a share button is clicked      | Returns social media platform which was clicked. E.g. ["twitter"] |
|           |                                                           |             |

**Slots**

|    Name              |    Description                  |
|:--------------------:|:-------------------------------:|
| `${platform}-icon`   |  Custom icon for platform       |
| `${platform}-label`  |  Custom label for platform      |
|                      |                                 |



## Examples

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
    label: "Custom label!",
    round: true,
  },
  linkedin: {
    size: "2x",
    color: "#333",
    backgroundColor: "yellow",
  },
  facebook: {
    size: "3x",
    dark: true
  },
  whatsapp: {
    size: "2x",
    dense: true,
    outline: true,
    color: 'green',
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
const iconConfig ={
  twitter: {
    icon: true,
    size: "sm",
    color: "#333",
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
**Using slots**
```html
<share-it>
  <template v-slot:twitter-icon>
    <v-icon>mdi-twitter</v-icon>
  </template>
  <template v-slot:twitter-label>
    <em>Tweet it!</em>
  </template>
  <template v-slot:whatsapp-icon>
    <v-icon>mdi-whatsapp</v-icon>
  </template>
  <template v-slot:whatsapp-label>
    <em>Share on Whatsapp</em>
  </template>
</share-it>
```

<a name="sizeChart">
</a>

**Size chart**

|    Code   |    Size    |
|:---------:|:----------:|
| xs        | .75em      |
| sm        | .875em     |
| lg        | 1.33em     |
| 2x        | 2em        |
| 3x        | 3em        |
| 4x        | 4em        |
| 5x        | 5em        |
| 6x        | 6em        |
| 7x        | 7em        |
| 8x        | 8em        |
| 9x        | 9em        |
| 10x       | 10em       |
|           |            |

