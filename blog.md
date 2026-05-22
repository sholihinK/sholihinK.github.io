---
layout: default
title: Blog
---

# Blog

{% assign latest_post = site.posts.first %}

<div class="blog-hero">
  <div class="blog-hero__label">Latest Post</div>
  <h1 class="blog-hero__title">{{ latest_post.title }}</h1>
  <p class="blog-hero__excerpt">{{ latest_post.excerpt }}</p>
  <div class="blog-hero__meta">
    <span>{{ latest_post.date | date: "%b %d, %Y" }}</span>
    <span>•</span>
    <span>{{ latest_post.read_time }}</span>
  </div>
  <a href="{{ latest_post.url }}" class="blog-hero__cta">Read post →</a>
</div>

<h2 class="blog-section-title">All Posts</h2>

<div class="blog-grid">
  {% for post in site.posts %}
    <article class="blog-card">
      <div class="blog-card__date">{{ post.date | date: "%b %d, %Y" }}</div>
      <h3 class="blog-card__title">{{ post.title }}</h3>
      <div class="blog-card__meta">{{ post.read_time }}</div>
      <p class="blog-card__excerpt">{{ post.excerpt }}</p>
      <a href="{{ post.url }}" class="blog-card__read">Read more →</a>
    </article>
  {% endfor %}
</div>
