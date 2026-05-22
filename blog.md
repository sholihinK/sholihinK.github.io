---
layout: default
title: Blog
---

# Blog

## Posts

{% for post in site.posts %}
  ### [{{ post.title }}]({{ post.url }})
  {{ post.date | date: "%B %d, %Y" }}  
  {{ post.description }}

{% endfor %}
