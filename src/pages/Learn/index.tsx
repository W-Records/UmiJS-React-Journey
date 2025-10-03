import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Fragment, useRef, useState } from 'react';
import ChildrenModule from './ChildrenModule';
import MySlot from './MySlot';
import SonSendData from './SonSendData';
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

  // 演示useState----数组演示
  const [arr, setArr] = useState([
    { id: 1, name: 'Tom' },
    { id: 2, name: 'King' },
    { id: 3, name: 'Jerry' },
  ]);
  function testUseStateUpdateArr() {
    // 数组是有序的，这样前后写不会覆盖只是修改数组位置
    // 里面也可以直接写一个有返回值的函数，反正是直接覆盖掉原始的
    setArr([
      { id: 666, name: '前面添加' },
      ...arr,
      { id: 4, name: '后面添加' },
    ]);
  }
  // 创建tsx，渲染页面
  const arrContent = arr.map((item) => <li key={item.id}>{item.name}</li>);

  // 编辑标签的属性
  const setProps = {
    className: 'Myimg',
    style: {
      width: '50px',
      height: '50px',
    },
  };

  // 父组件给子组件传递值
  const deliveryData = {
    id: 116,
    articles: {
      title: '牛逼标题66991',
      content: '文章内容',
    },
  };

  // 子组件给父组件传递值
  function getSonData(data: any) {
    console.log('子组件的数据', data);
  }

  // 演示useRef
  const inputRef = useRef<HTMLInputElement>(null);
  function DomOperation() {
    inputRef.current?.focus();
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

      {/* 演示响应式数据useState----数组演示 */}
      <button onClick={testUseStateUpdateArr} type="button">
        点击修改数组
      </button>
      <ul>{arrContent}</ul>

      {/* 演示tsx的标签属性props */}
      <img
        src="https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg"
        alt="提示词语"
        {...setProps}
      />

      {/* 父组件给子组件传递值 */}
      <ChildrenModule {...deliveryData} />

      {/* 父组件给子组件传递tsx，插槽 */}
      <MySlot
        Mytitle="插槽标题6699"
        footer={
          <div>
            <div>底部内容footer</div>
            <small>插槽内容small标签</small>
          </div>
        }
      >
        <div>插槽内容div</div>
        <i>插槽内容i标签斜体字</i>
      </MySlot>

      {/* 子组件 给 父组件传值 */}
      <SonSendData onSonData={getSonData} />

      {/* 演示useRef */}
      <button onClick={DomOperation} type="button">
        点击使输入框获得焦点
      </button>
      <input type="text" ref={inputRef} />

      <div>React.FC 表示LearnPage变量为 React 函数组件</div>
      <div>
        PageContainer标签是Ant Design Pro的一个页面容器组件。
        自动生成标题：根据路由配置自动生成页面标题。
      </div>
    </PageContainer>
  );
};

export default LearnPage;
