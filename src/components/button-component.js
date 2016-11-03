import React, { PropTypes } from 'react'
import { Link } from 'react-router'

function getHasClass (component, name) {
  if (component) return `button-has-${name}`
  return `button-has-no-${name}`
}

function getBeside (beside, name) {
  if (beside) return <div className={`beside ${name}`}>{beside}</div>
  return null
}

let Button = ({
  name, onClick, className, to, query, fill, link,
  beforeIcon, icon,
  beforeLabel, label, afterLabel
}) => {
  name = name || ''
  className = className || ''
  className = `${name} ${className}`
  onClick = onClick || function () {}
  if (name) name = `${name}-button`

  if (fill) fill = 'button-fill'
  else fill = ''

  let BeforeIcon = getBeside(beforeIcon, 'beforeIcon')
  let hasBeforeIcon = getHasClass(BeforeIcon, 'before-icon')

  let Icon = icon || null
  let hasIcon = getHasClass(Icon, 'icon')

  let BeforeLabel = getBeside(beforeLabel, 'before-label')
  let hasBeforeLabel = getHasClass(BeforeLabel, 'before-label')

  let Label = null
  if (label) Label = <span className='label'>{label}</span> || null
  let hasLabel = getHasClass(Label, 'label')

  let AfterLabel = getBeside(afterLabel, 'after-label')
  let hasAfterLabel = getHasClass(AfterLabel, 'after-label')

  if (link) return <a
    href={link}
    className={`button ${name} ${hasBeforeIcon} ${hasIcon} ${hasBeforeLabel} ${hasLabel} ${hasAfterLabel} ${className} ${fill}`.trim()}
    onClick={onClick}>
    {BeforeIcon}
    {Icon}
    {BeforeLabel}
    {Label}
    {AfterLabel}
  </a>
  else if (to && query) return <Link
    to={to}
    query={query}
    className={`button ${name} ${hasBeforeIcon} ${hasIcon} ${hasBeforeLabel} ${hasLabel} ${hasAfterLabel} ${className} ${fill}`.trim()}
    onClick={onClick}>
    {BeforeIcon}
    {Icon}
    {BeforeLabel}
    {Label}
    {AfterLabel}
  </Link>
  else if (to) return <Link
    to={to}
    className={`button ${name} ${hasBeforeIcon} ${hasIcon} ${hasBeforeLabel} ${hasLabel} ${hasAfterLabel} ${className} ${fill}`.trim()}
    onClick={onClick}>
    {BeforeIcon}
    {Icon}
    {BeforeLabel}
    {Label}
    {AfterLabel}
  </Link>
  return <button
    className={`button ${name} ${hasBeforeIcon} ${hasIcon} ${hasBeforeLabel} ${hasLabel} ${hasAfterLabel} ${className} ${fill}`.trim()}
    onClick={onClick}>
    {BeforeIcon}
    {Icon}
    {BeforeLabel}
    {Label}
    {AfterLabel}
  </button>
}

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  query: PropTypes.object,
  link: PropTypes.string,
  beforeIcon: PropTypes.any,
  icon: PropTypes.any,
  beforeLabel: PropTypes.any,
  label: PropTypes.string,
  afterLabel: PropTypes.any,
  fill: PropTypes.bool
}

export default Button
