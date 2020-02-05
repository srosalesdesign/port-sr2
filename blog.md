---
layout: "layouts/posts.njk"
title: "Blog"
---


<p>Art 32, Winter 2020 Blog<br>
<span>with Prof. Brandon Lattu</span></p>

<div class="posts-wrapper">
<ul class="posts">
{%- for post in collections.post -%}
  <li class="post"><div class="post-content">
  <p class="date">{{ post.data.datetopost }}</p>
  <h4>{{ post.data.title }}</h4>
  <div class="post-detail">{{ post.templateContent | safe }}
  </div>


</div>
</li>
{%- endfor -%}
</ul>
</div>