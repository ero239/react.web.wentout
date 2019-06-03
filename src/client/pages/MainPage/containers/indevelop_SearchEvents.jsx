import React, {PureComponent} from 'react';
import styles from './style.css';
import {Parallax} from 'react-scroll-parallax';
import ScrollArea from 'react-scrollbar';

/** TODO
 *
 */
/** Notes
 *
 */

export default class FindEvents extends PureComponent {
  render() {
    return (
      <section className="m-findevents-container">
        <div className="m-findevents-form">
          <div className="m-findevents-form-marquee">
            <marquee
              className="m-findevents-form-marquee"
              direction=""
              onmouseover="this.stop();"
              onmouseout="this.start();"
            />
            <marquee
              className="m-findevents-form-marquee"
              direction=""
              onmouseover="this.stop();"
              onmouseout="this.start();"
            />
            <marquee
              className="m-findevents-form-marquee"
              direction=""
              onmouseover="this.stop();"
              onmouseout="this.start();"
            />
          </div>
        </div>
        <Parallax offsetYMax={-100} offsetYMin={100} offsetXMax={0} offsetXMin={0}>
          <a className="m-findevents-button">
            <i>Find event🎉</i>
          </a>
        </Parallax>
      </section>
    );
  }
}
