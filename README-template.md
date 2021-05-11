# react-semantic-breadcrumbs v2 [![Travis build status](https://travis-ci.org/rahulpv/react-semantic-breadcrumbs-v2.svg?branch=master)](https://travis-ci.org/rahulpv/react-semantic-breadcrumbs-v2/)
Forked from bradestey/react-semantic-breadcrumbs for react 16+

### React below 16
Check out [react-semantic-breadcrumbs](https://github.com/bradestey/react-semantic-breadcrumbs).

`react-semantic-breadcrumbs` makes it easy to render semantic breadcrumbs in RDFa, microdata, JSON-LD or plain HTML5.

## Installation

```jsx
npm i react-semantic-breadcrumbs --save
```
```jsx
import { BreadcrumbList, ListItem } from 'react-semantic-breadcrumbs'

```
```jsx
import React from 'react'
import { BreadcrumbList, ListItem } from 'react-semantic-breadcrumbs'

const breadcrumbs = (
  <BreadcrumbList format="RDFa" separator=" > ">
    <ListItem url="/">Home</ListItem>
    <ListItem url="/products">Products</ListItem>
    <ListItem url="/products/iphone-7-plus">iPhone 7 Plus</ListItem>
  </BreadcrumbList>
)
```

## Install

### npm

```bash
 npm i react-semantic-breadcrumbs-v2 --save
```

### yarn

```bash
yarn add react-semantic-breadcrumbs-v2
```

## Basic Usage

Just import the BreadcrumbList and ListItem components and pass your desired format.

```jsx
class MyComponent extends Component {
  componentDidMount() {
    // Focus the input and select "world"
    this.input.focus()
    this.input.setSelectionRange(6, 11)
  }
  render() {
    return (
      <Autocomplete
        ref={el => this.input = el}
        value="hello world"
        ...
      />
    )
  }
}
```
Will produce the following HTML:

```jsx
 <ol vocab="http://schema.org/" typeof="BreadcrumbList">
    <li property="itemListElement" typeof="ListItem">
      <a property="item" typeof="Thing" href="/">
        <span property="name">Home</span>
      </a> >
      <meta property="position" content="1" />
    </li>
    <li property="itemListElement" typeof="ListItem">
      <a property="item" typeof="Thing" href="/products">
        <span property="name">Products</span>
      </a> >
      <meta property="position" content="2" />
    </li>
    <li property="itemListElement" typeof="ListItem">
      <a property="item" typeof="Thing" href="/products/iphone-7-plus">
        <span property="name">iPhone 7 Plus</span>
      </a>
      <meta property="position" content="3" />
    </li>
  </ol>
```

## BreadcrumbList Props
* format string (Default: HTML5)
  Choose from “RDFa”, “Microdata”, “HTML5”, or “JSON-LD”. Case-insensitive.

* separator string (Default: null)
  The string to place between each ListItem. Ignored by JSON-LD.

* clickHandler function (Default: null)
  Listen for when a ListItem’s <a> tag is clicked.
  
## ListItem Props

* url `string` (Required)
The page to link to.

* type `string` (Default: Thing)
Uses schema.org types.

* clickHandler function (Default: null)
Listen for when the <a> tag is clicked. Takes precedence over BreadcrumbList’s clickHandler prop.

## Import Only a Specific Format

You may only want to ever use one specific format. To cherry-pick a format for smaller browserify/rollup/webpack bundles, you can do this:

```jsx
import BreadcrumbList from 'react-semantic-breadcrumbs/MicrodataBreadcrumbList'
import ListItem from 'react-semantic-breadcrumbs/MicrodataListItem'
```
* HTML5: HTML5BreadcrumbList & HTML5ListItem
* RDFa: RDFaBreadcrumbList & RDFaListItem
* Microdata: MicrodataBreadcrumbList & MicrodataListItem
* JSON-LD: JSONLDBreadcrumbList & JSONLDListItem