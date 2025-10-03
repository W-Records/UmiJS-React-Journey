import { PageContainer } from '@ant-design/pro-components';
import { useState } from 'react';

interface SonSendDataProps {
  onSonData: (data: any) => void;
}
const SonSendData: React.FC<SonSendDataProps> = ({ onSonData }) => {
  const [state, setState] = useState(true);
  const changeState = () => {
    console.log('上-子组件内的打印：', state); // 旧值
    // setState(!state); 直接传递值不推荐
    // 推荐下面这种函数式更新，
    // setState(prevState => { ... })
    // 这个函数在 React 内部调用，参数 prevState 是真实最新的状态值
    setState((prevState) => {
      const newState = !prevState;
      onSonData(newState); // 传入新值
      console.log('setState函数内-子组件内的打印：', newState);
      // return newState;告诉 React 新的状态值是什么
      // React 会将这个返回值作为新状态，安排重新渲染
      // 必须返回，否则 React 不知道新状态值
      return newState;
    });
    console.log('下-子组件内的打印：', state); // 旧值
  };

  return (
    <PageContainer ghost>
      <button onClick={changeState} type="button">
        点击切换状态
      </button>

      <div> 状态值：{state ? '默认值' : '修改后的值'} </div>
    </PageContainer>
  );
};

export default SonSendData;
