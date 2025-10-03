import { PageContainer } from '@ant-design/pro-components';

interface MySlotProps {
  Mytitle: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const MySlot: React.FC<MySlotProps> = ({ children, Mytitle, footer }) => {
  return (
    <PageContainer ghost>
      <h1>{Mytitle}</h1>
      <div>演示插槽：</div>
      {children}
      {footer}
    </PageContainer>
  );
};

export default MySlot;
