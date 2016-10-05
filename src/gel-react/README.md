# Gel React

This is a library for standard gel react components made easy

The three things gel has:

* [Grid](#grid-api)
* [Typography](#typography-api)
* [Iconography](#iconography-api)

## Install

```
npm i -S gel-react
```

## Usage

```jsx
import React from 'react'
import { Wrap, Layout, LayoutItem } from 'gel-react/grid'
import { Canon, DoublePica, GreatPrimer, LongPrimer, } from 'gel-react/typography'
import { Audio } from 'gel-react/iconography'

let Component = () => {
  return <Wrap>
    <Layout
      layouts={['rev']}>
      <LayoutItem
        gels={['1/1', '1/2@m', '1/4@l']}>
        <Canon><Audio />First</Canon>
      </LayoutItem>
      <LayoutItem
        gels={['1/1', '1/2@m', '1/4@l']}>
        <GreatPrimer bold>Second</GreatPrimer>
      </LayoutItem>
      <LayoutItem
        gels={['1/1', '1/2@m', '1/4@l']}>
        <DoublePica>Third</DoublePica>
      </LayoutItem>
      <LayoutItem
        gels={['1/1', '1/2@m', '1/4@l']}>
        <LongPrimer>Fourth</LongPrimer>
      </LayoutItem>
    </Layout>
  </Wrap>
}

export default Component
```

## Grid API

Available gels and sizes:

* `1`
* `2`
* `3`
* `4`
* `5`
* `8`
* `10`
* `12`
* `24`
* `@s`
* `@m`
* `@l`
* `@xl`
* `@xxl`

Available layouts:

* `flush`
* `rev`
* `middle`
* `bottom`
* `right`
* `center`
* `auto`
* `equal`
* `fit`

### Wrap

```jsx
<Wrap
  gels={[
    '1/1',
    '1/2@m',
    '1/4@l'
  ]}>content</Wrap>
```

### Layout

```jsx
<Layout
  layouts={[
    'rev'
  ]}
  gels={[
    '1/1',
    '1/2@m',
    '1/4@l'
  ]}
  >content</Layout>
```

layouts can also be a string e.g.

```jsx
<Layout layouts='flush'>content</Layout>
```

### LayoutItem

```jsx
<LayoutItem
  gels={[
    '1/1',
    '1/2@m',
    '1/4@l'
  ]}>content</LayoutItem>
```

You can prefix the gels with `'gel-'` e.g.

```jsx
<LayoutItem gels={['gel-1/2', 'gel-1/4@m']}>content</LayoutItem>
```

gels can also be a string e.g.

```jsx
<LayoutItem gels='1/2'>content</LayoutItem>
```

## Typography API

All are the same

```jsx
<Canon bold={true} noTouch={true}>Your Content</Canon>
```

Available typographies:

* `Canon`
* `Trafalgar`
* `DoublePica`
* `GreatPrimer`
* `Pica`
* `LongPrimer`
* `Brevier`
* `Minion`
* `BodyCopy`

## Iconography API

```jsx
<IconName />
```

the output is an svg wrapped in a div with the class names `gel-icon` and `gel-icon-${icon-name}`

Available Icons: [Icon List](./icon-list.md)

If you need to update the icons do the following

```bash
git clone git@github.com:bbc/gel-iconography-assets.git gel-iconography-assets || pushd gel-iconography-assets && git pull && popd
node ./tasks/create-icons.js
cat iconography.js | cut -d'.' -f2 | cut -d' ' -f1 | sed -e 's/^/* /' > icon-list.md
```

You can find more documentation from [Gel](http://www.bbc.co.uk/gel)
