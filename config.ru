# Intended for development purposes only, do not upload or use in production.
# See https://github.com/siteleaf/siteleaf-gem for documentation.
require 'rubygems'
require 'siteleaf'
run Siteleaf::Server.new(:site_id => '587de3f46b56bf5710000118')

---
title: Snipcart
url: 'https://snipcart.github.io/snipcart-jamstack'
snipcart_api_key: ''
timezone: UTC
collections:
  posts:
    title: Posts
    output: true
  products:
    title: Products
    output: true
  uploads:
    title: Uploads
    output: true
defaults:
- scope:
    path: ''
    type: products
  values:
    layout: product
    permalink: "/products/:title/"
    name: ''
    price: 0.0
    sku: ''
    image: ''
    weight: 0.0
- scope:
    path: ''
    type: pages
  values:
    layout: page
permalink: pretty
