import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import style_fonts from '../../style_fonts.scss';
import classNames from 'classnames';

export default class NewEventBar extends PureComponent {
  render() {
    return (
      <div className={style.eBar}>
        <div className={style.eBarHeader}>
          <Link to="/user/dsf" className={style.eBarHeaderCreator}>
            <img
              src={'https://g.foolcdn.com/editorial/images/187129/captura-de-pantalla-2015-12-01-a-las-144754.png'}
            />
            <span>nike_russia wjdfbweibfijewbfjbwejfbwejbfwjebfjwe fwejf bwebfwe bfiwe</span>
          </Link>
          <Link to="/event/24tr34" className={style.eBarHeaderTime}>
            <span>in 22 minutes</span>
          </Link>
        </div>
        <Link to="/event/adfd" className={style.eBarImg}>
          <img src={'https://mc.igte.ch/wp-content/uploads/2016/10/SW16081_NIKE_HO16_DAY2_JJ3694_PR.jpg'} />
        </Link>
        <div className={style.eBarInfo}>
          <div className={style.eBarInfoMetrix}>
            <div className={style.eBarInfoMetrixBlock}>
              <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzUwIDM1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzUwIDM1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0xNzUsMTcxLjE3M2MzOC45MTQsMCw3MC40NjMtMzguMzE4LDcwLjQ2My04NS41ODZDMjQ1LjQ2MywzOC4zMTgsMjM1LjEwNSwwLDE3NSwwcy03MC40NjUsMzguMzE4LTcwLjQ2NSw4NS41ODcgICBDMTA0LjUzNSwxMzIuODU1LDEzNi4wODQsMTcxLjE3MywxNzUsMTcxLjE3M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0I4QjdCNyIgZGF0YS1vbGRfY29sb3I9IiNiOGI3YjciPjwvcGF0aD4KCTxwYXRoIGQ9Ik00MS45MDksMzAxLjg1M0M0MS44OTcsMjk4Ljk3MSw0MS44ODUsMzAxLjA0MSw0MS45MDksMzAxLjg1M0w0MS45MDksMzAxLjg1M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0I4QjdCNyIgZGF0YS1vbGRfY29sb3I9IiNiOGI3YjciPjwvcGF0aD4KCTxwYXRoIGQ9Ik0zMDguMDg1LDMwNC4xMDRDMzA4LjEyMywzMDMuMzE1LDMwOC4wOTgsMjk4LjYzLDMwOC4wODUsMzA0LjEwNEwzMDguMDg1LDMwNC4xMDR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNCOEI3QjciIGRhdGEtb2xkX2NvbG9yPSIjYjhiN2I3Ij48L3BhdGg+Cgk8cGF0aCBkPSJNMzA3LjkzNSwyOTguMzk3Yy0xLjMwNS04Mi4zNDItMTIuMDU5LTEwNS44MDUtOTQuMzUyLTEyMC42NTdjMCwwLTExLjU4NCwxNC43NjEtMzguNTg0LDE0Ljc2MSAgIHMtMzguNTg2LTE0Ljc2MS0zOC41ODYtMTQuNzYxYy04MS4zOTUsMTQuNjktOTIuODAzLDM3LjgwNS05NC4zMDMsMTE3Ljk4MmMtMC4xMjMsNi41NDctMC4xOCw2Ljg5MS0wLjIwMiw2LjEzMSAgIGMwLjAwNSwxLjQyNCwwLjAxMSw0LjA1OCwwLjAxMSw4LjY1MWMwLDAsMTkuNTkyLDM5LjQ5NiwxMzMuMDgsMzkuNDk2YzExMy40ODYsMCwxMzMuMDgtMzkuNDk2LDEzMy4wOC0zOS40OTYgICBjMC0yLjk1MSwwLjAwMi01LjAwMywwLjAwNS02LjM5OUMzMDguMDYyLDMwNC41NzUsMzA4LjAxOCwzMDMuNjY0LDMwNy45MzUsMjk4LjM5N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0I4QjdCNyIgZGF0YS1vbGRfY29sb3I9IiNiOGI3YjciPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />
              <span>324</span>
              {/* <p>people go</p> */}
            </div>
            <i />
            <div className={style.eBarInfoMetrixBlock}>
              <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDg4Ljg1IDQ4OC44NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg4Ljg1IDQ4OC44NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yNDQuNDI1LDk4LjcyNWMtOTMuNCwwLTE3OC4xLDUxLjEtMjQwLjYsMTM0LjFjLTUuMSw2LjgtNS4xLDE2LjMsMCwyMy4xYzYyLjUsODMuMSwxNDcuMiwxMzQuMiwyNDAuNiwxMzQuMiAgIHMxNzguMS01MS4xLDI0MC42LTEzNC4xYzUuMS02LjgsNS4xLTE2LjMsMC0yMy4xQzQyMi41MjUsMTQ5LjgyNSwzMzcuODI1LDk4LjcyNSwyNDQuNDI1LDk4LjcyNXogTTI1MS4xMjUsMzQ3LjAyNSAgIGMtNjIsMy45LTExMy4yLTQ3LjItMTA5LjMtMTA5LjNjMy4yLTUxLjIsNDQuNy05Mi43LDk1LjktOTUuOWM2Mi0zLjksMTEzLjIsNDcuMiwxMDkuMywxMDkuMyAgIEMzNDMuNzI1LDMwMi4yMjUsMzAyLjIyNSwzNDMuNzI1LDI1MS4xMjUsMzQ3LjAyNXogTTI0OC4wMjUsMjk5LjYyNWMtMzMuNCwyLjEtNjEtMjUuNC01OC44LTU4LjhjMS43LTI3LjYsMjQuMS00OS45LDUxLjctNTEuNyAgIGMzMy40LTIuMSw2MSwyNS40LDU4LjgsNTguOEMyOTcuOTI1LDI3NS42MjUsMjc1LjUyNSwyOTcuOTI1LDI0OC4wMjUsMjk5LjYyNXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0I4QjdCNyIgZGF0YS1vbGRfY29sb3I9IiNiOGI3YjciPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" />
              <span>6452345</span>
              {/* <p>views</p> */}
            </div>
          </div>
          <Link to="/event/dsgf" className={style.eBarInfoTitle}>
            <h3>Пробежка в Парке Горького с nfkrnt 4nk34 43n543n34 nnfkngnfegnfegnefngnkeg ekrnger</h3>
          </Link>
          <a
            className={style.eBarInfoAddress}
            href={'https://www.google.com/maps/?q=@' + this.props.latitude + ',' + this.props.longitude}
          >
            <i />
            <address>Moscow, Krymsky Val, 9s9</address>
          </a>
        </div>
      </div>
    );
  }
}
