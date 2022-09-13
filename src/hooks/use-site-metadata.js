import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
    }
  `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;