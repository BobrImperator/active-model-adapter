// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import RouteTemplate from 'ember-route-template';
import type { TOC } from '@ember/component/template-only';
import type Car from '../models/car';
import type BlogPost from '../models/blog-post';

const ApplicationTemplate: TOC<{
  Args: { model: { cars: Car[]; blogPosts: BlogPost[] } };
}> = <template>
  <section id='cars'>
    <h1>Cars</h1>
    <ul>
      {{#each @model.cars as |car|}}
        <li>{{car.brand}}</li>
      {{/each}}
    </ul>
  </section>

  <section id='blog-posts'>
    <h1>Blog Posts</h1>
    {{#each @model.blogPosts as |post|}}
      <article class='blog-post'>
        <h2>{{post.postTitle}}</h2>
        <p class='author'>by
          {{post.blogAuthor.firstName}}
          {{post.blogAuthor.lastName}}</p>
        <p class='body'>{{post.bodyContent}}</p>
        <ul class='comments'>
          {{#each post.postComments as |comment|}}
            <li>{{comment.commentBody}}</li>
          {{/each}}
        </ul>
      </article>
    {{/each}}
  </section>
</template>;

export default RouteTemplate(ApplicationTemplate);
