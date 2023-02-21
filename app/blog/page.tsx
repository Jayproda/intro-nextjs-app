import { getAllBlogPosts } from '../../lib/cms';
import { Link } from 'react-router-dom';

export default async function Blog() {
  const posts = await getAllBlogPosts();

  return (
    <div>
      {posts?.map((post, index) => (
        <Link href={`/${post?.slug}`} key={index}>
          <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
