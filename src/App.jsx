import './App.css';
import { Htag } from './components/Htag/Htag';

const App = () => {
  return (
    <div className="wrapper">
      <div className='title'>
        <Htag tag='h1'>1%-ое усиление</Htag>
      </div>
      <div className='work-area'>
        <div className='task-monitor'>
          <Htag tag='h2'>Набери сотку и получишь еще 1%</Htag>
          <span>Что это значит?</span>
          <img src='https://i.yapx.ru/SoDjB.png' />
          <div className='random-quote'>
            «Всё не так плохо, как кажется» — Автор неизвестен.
          </div>
        </div>
        <div className='task-list'>
          <Htag tag='h2'>Сегодняшние задачи</Htag>
          <div className='tasks'>
            sdsasd
            dasdasd
            adsada
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
