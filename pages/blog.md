---
layout: layouts/blog.njk
title: Blog
metaDescription: A sample Blog page listing various posts and authors.
date: 2017-01-01
# permalink: /blog/index.html
permalink: "/blog{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber }}{% endif %}/index.html"
eleventyNavigation:
  key: Blog
  order: 2
pagination:
  data: posts
  size: 2 # how many to show before next
---


