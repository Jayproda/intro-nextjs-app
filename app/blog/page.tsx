import { getAllBlogPosts } from '../../lib/cms';
import Link from 'next/link';
import styles from '../../styles/home.module.css';

export default async function Blog() {
  const posts = await getAllBlogPosts();

  return (
    <div>
      {posts?.map((post, index) => (
        <div key={index}>
          <Link href={`/blog/${post?.slug}`} className={styles.link}>
            <h1>{post?.title}</h1>
          </Link>
          <p>{post?.body}</p>
        </div>
      ))}
    </div>
  );
}
