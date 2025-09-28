import { H2, H4 } from "../styles/Styles";

const Blogs = ({ data }) => {
  return (
    <div>
      <H2>{data.title}</H2>
      <H4>Wrriten by {data.author}</H4>
      <p>{data.text}</p>
    </div>
  );
};

export default Blogs;
