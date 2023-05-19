---
title: Blog
tagline: A full list of my blog posts.
layout: page
ref: blog
order: 1
---

{% for post in site.posts %}
{% assign currentdate = post.date | date: "%Y" %}
{% if currentdate != date %}
{% unless forloop.first %}</ul>{% endunless %}

<h2 id="y{{ post.date | date: "%Y" }}">{{ currentdate }}</h2>
<ul>
{% assign date = currentdate %}
{% endif %}
<li style="margin-left: 12px">
<span>{{ post.date | date: "%b %-d" }} - </span>
<a href="{{ site.url }}{{ post.url }}">
<span>{{ post.title }}</span>
</a>
</li>
{% if forloop.last %}
</ul>
{% endif %}
{% endfor %}
