import React, {PureComponent} from 'react';
import style from './style.scss';
import stylePage from '../../style.scss';
import classNames from 'classnames';
import Linkify from 'react-linkify';

export default class Description extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true,
      description: this.props.description
    };
  }

  showAll = () => {
    this.setState({
      showAll: !this.state.showAll
    });
  };

  render = () => {
    return (
      <section id="e-description" className={classNames(style.eDescription, stylePage.eGridMaxSize)}>
        <div className={stylePage.eSectionTitleFlex}>
          <h2 className={stylePage.eSectionTitleValue}>Description</h2>
          <button className={stylePage.eSectionButton} onClick={this.showAll.bind(this)}>
            {this.state.showAll ? 'Show All' : 'Show less'}
          </button>
        </div>
        <div className={style.eDescriptionTextFlex}>
          {/* <p className={_eventdescription_text}>
                        {this.state.description}
                    </p>  */}
          <Linkify
            className={classNames(
              this.state.showAll ? style.eDescriptionTextValueLess : style.eDescriptionTextValueMore
            )}
            properties={{target: '_blank', style: {color: 'blue'}}}
          >
            Третьяковская галерея открыла самую ожидаемую выставку года — ретроспективу Ильи Ефимовича Репина
            (1844–1930). Это крупнейший проект по объему подготовительной исследовательской работы, масштабу
            межмузейного сотрудничества и диапазону представленного материала. Экспозиция, расположенная на трех этажах
            самых крупных выставочных залов Новой Третьяковки, демонстрирует произведения мастера, созданные с 1870-х по
            конец 1920-х годов, и охватывает более 50 лет творчества Репина. Помимо хрестоматийных картин, известных
            всем с детства по школьным учебникам («Бурлаки на Волге», «Не ждали», «Запорожцы», «Торжественное заседание
            Государственного совета 7 мая 1901 года…» и других), демонстрируются малоизвестные произведения, которые
            станут открытием для московской публики. В связи с особыми условиями хранения произведений на бумаге —
            ограничением освещенности и максимально допустимым сроком экспонирования — залы графики будут доступны для
            осмотра до 30 июня. Ретроспектива Ильи Репина в Третьяковской галерее открывает серию выставок, посвященных
            175- летию со дня рождения художника, которые пройдут в 2019–2020 году в Государственном Русском музее в
            Санкт-Петербурге, в Пти-Пале в Париже и в Художественном музее Атенеум в Хельсинки. Этот международный
            проект призван не только акцентировать значение творчества Репина для отечественной культуры, но и
            подчеркнуть важность наследия мастера для европейского искусства в целом. Кураторы выставки Татьяна
            Витальевна Юденкова, доктор искусствоведения, заведующий отделом живописи второй половины XIX - начала XX
            века; Нина Кирилловна Маркова, хранитель музейных предметов 1 категории отдела графики XVII - начала XX
            века.
          </Linkify>
        </div>
        <div className={this.state.showAll ? style.eDescriptionTextValueFade : ''} />
      </section>
    );
  };
}
