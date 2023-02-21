const delay = (time: any) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

export const getAllBlogPosts = async () => {
  await delay(3000);

  return new Array(10).fill(1).map((_, i) => ({
    title: `This is post ${i}`,
    slug: `this-is-post-${i}`,
    body: 'Some text in here about the blog post',
  }));
};
