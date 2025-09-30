import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Fragment, useState } from 'react';
const LearnPage: React.FC = () => {
  // 全局状态值
  const { name } = useModel('global');
  // 条件渲染
  const flag = true;
  let divContent = null;
  if (flag) {
    divContent = <div>flag为true--条件渲染</div>;
  } else {
    divContent = <div>flag为false--条件渲染</div>;
  }
  // 列表渲染
  const list = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
  ];
  const listContent = list.map((item) => (
    <Fragment key={item.id}>
      <li>
        {item.id}--{item.name}
      </li>
      <li>----------------</li>
    </Fragment>
  ));
  // 事件触发函数
  function handleClick() {
    alert('点击了按钮6699');
  }

  // 演示useState
  const [User, setUser] = useState({
    userName: 'Tom',
    userAge: 18,
  });
  function testUseState() {
    setUser({
      ...User,
      userAge: 11,
      userName: 'Toms',
    });
  }

  return (
    <PageContainer ghost>
      {/* 演示插值语法 */}
      <div title={name}>插值语法：{name}</div>

      {/* 演示条件渲染 */}
      {divContent}

      {/* 列表渲染，注意循环遍历时，每个节点存在多个标签时，需要使用<Fragment>包裹 */}
      <ul>{listContent}</ul>

      {/* 演示事件 */}
      <button onClick={handleClick} type="button">
        点击
      </button>

      {/* 演示响应式数据useState */}
      <button onClick={testUseState} type="button">
        点击修改状态
      </button>
      <i>
        {User.userName}----{User.userAge}
      </i>

      <div>React.FC 表示LearnPage变量为 React 函数组件</div>
      <div>
        PageContainer标签是Ant Design Pro的一个页面容器组件。
        自动生成标题：根据路由配置自动生成页面标题。
      </div>
    </PageContainer>
  );
};

export default LearnPage;
