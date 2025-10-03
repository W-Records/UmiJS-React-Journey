import { PageContainer } from '@ant-design/pro-components';
interface Article {
  title: string;
  content: string;
}

interface ChildrenModuleProps {
  id: number;
  articles: Article;
}
const ChildrenModule: React.FC<ChildrenModuleProps> = ({ id, articles }) => {
  return (
    <PageContainer ghost>
      <div>子组件拿到的数据</div>
      <div>id: {id}</div>
      <div>标题：{articles.title}</div>
      <div>标题：{articles.content}</div>
    </PageContainer>
  );
};

export default ChildrenModule;
