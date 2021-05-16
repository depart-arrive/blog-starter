// pages/tags/[tag].tsx
export const getStaticPaths = async () => {
  const tags = await getAllTags()
  const paths = tags.map(({ tag }) => ({
    params: {
      tag
    },
  }));

  return { paths, fallback: false };
};
