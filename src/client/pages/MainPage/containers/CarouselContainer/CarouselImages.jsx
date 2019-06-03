import React, {PureComponent} from 'react';
import {Carousel} from 'react-responsive-carousel';

import styles from './style.scss';

export default class CarouselImages extends PureComponent {
  render() {
    return (
      <section id="carouselimages-container" className={styles.mCarouselContainer}>
        <div className={styles.mCarouselContainerWrapper}>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            axis={'horizontal'}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={false}
            interval={6000}
            transitionTime={600}
          >
            <div className={styles.mCarouselSlide}>
              {/* <p id="m-carousel-text-1" className={styles.mCarouselText && styles.mCarouselText1}>
                Do you dream about being
              </p>
              <p id="m-carousel-text-2" className={styles.mCarouselText }>
                at such festival?
              </p> */}
              <img
                className={styles.mCarouselImage}
                src="https://vesti.dp.ua/wp-content/uploads/2018/07/lev.jpg"
                /* srcSet="http://178.128.174.121/images/wo.web.images/carousel/1/400x320.jpg 0w,
                                http://178.128.174.121/images/wo.web.images/carousel/1/600x480.jpg 600w,
                                http://178.128.174.121/images/wo.web.images/carousel/1/800x640.jpg 800w,
                                http://178.128.174.121/images/wo.web.images/carousel/1/1024x819.jpg 1024w,
                                http://178.128.174.121/images/wo.web.images/carousel/1/1280x1024.jpg 1280w" */
                alt=""
              />
              {/* <picture className='m-carousel-image}'>
                                <source media='(min-width: 0px) and (max-width: 500px)'
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/First_img/Fisrt_img_400x320_full.jpg' 
                                    alt='Music festival'/>
                                <source media='(min-width: 500px) and (max-width: 700px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/First_img/Fisrt_img_600x480_full.jpg' 
                                    alt='Music festival'/>
                                <source media='(min-width: 700px) and (max-width: 900px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/First_img/Fisrt_img_800x640_full.jpg' 
                                    alt='Music festival'/>
                                <source media='(min-width: 900px) and (max-width: 1100px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/First_img/Fisrt_img_1024x819_full.jpg' 
                                    alt='Music festival'/>
                                <source media='(min-width: 1100px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/First_img/Fisrt_img_1280x1024_full.jpg' 
                                    alt='Music festival'/>
                                <img  src='https://thumb.cloud.mail.ru/thumb/xw1/photos/First_img/Fisrt_img_600x480_full.jpg' alt='Music festival'/>
                            </picture>  */}
            </div>
            <div className={styles.mCarouselSlide}>
              {/* <p id="carousel-text-1" className="m-carousel-text m-carousel-text-1">
                Have you ever miss a concert
              </p>
              <p id="carousel-text-2" className="m-carousel-text m-carousel-text-2">
                of your favorite band?
              </p> */}
              <img
                className={styles.mCarouselImage}
                src="https://vesti.dp.ua/wp-content/uploads/2018/07/lev.jpg"
                /* srcSet="http://178.128.174.121/images/wo.web.images/carousel/2/400x320 0w,
                                http://178.128.174.121/images/wo.web.images/carousel/2/600x480.jpg 600w,
                                http://178.128.174.121/images/wo.web.images/carousel/2/800x640.jpg 800w,
                                http://178.128.174.121/images/wo.web.images/carousel/2/1024x819.jpg 1024w,
                                http://178.128.174.121/images/wo.web.images/carousel/2/1280x1024.jpg 1280w"
                alt="" */
              />
              {/* <picture className='m-carousel-image}'>
                                <source media='(min-width: 0px) and (max-width: 500px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Second_img/Second_img_400x313_full.jpg' 
                                    alt='Music concert'/>
                                <source media='(min-width: 500px) and (max-width: 700px)'  
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Second_img/Second_img_600x469_full.jpg' 
                                    alt='Music concert'/>
                                <source media='(min-width: 700px) and (max-width: 900px)'
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Second_img/Second_img_800x625_full.jpg' 
                                    alt='Music concert'/>
                                <source media='(min-width: 900px) and (max-width: 1100px)'
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Second_img/Second_img_1024x800_full.jpg' 
                                    alt='Music concert'/>
                                <source media='(min-width: 1100px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Second_img/Second_img_1280x1000_full.jpg' 
                                    alt='Music concert'/>
                                <img src='https://thumb.cloud.mail.ru/thumb/xw1/photos/Second_img/Second_img_600x469_full.jpg' alt='Music concert'/>
                            </picture> */}
            </div>
            <div className={styles.mCarouselSlide}>
              {/* <p id="carousel-text-1" className="m-carousel-text m-carousel-text-1">
                Don`t miss local matches!
              </p> */}
              <img
                className={styles.mCarouselImage}
                src="https://vesti.dp.ua/wp-content/uploads/2018/07/lev.jpg"
                /* srcSet="http://178.128.174.121/images/wo.web.images/carousel/3/400x320.jpg 0w,
                                http://178.128.174.121/images/wo.web.images/carousel/3/600x480.jpg 600w,
                                http://178.128.174.121/images/wo.web.images/carousel/3/800x640.jpg 800w,
                                http://178.128.174.121/images/wo.web.images/carousel/3/1024x819.jpg 1024w,
                                http://178.128.174.121/images/wo.web.images/carousel/3/1280x1024.jpg 1280w"
                alt="" */
              />

              {/* <picture className='m-carousel-image}'>
                                <source media='(min-width: 0px) and (max-width: 500px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Third_img/Third_img_400x320_full.jpg' 
                                    alt='Children are playing football'/>
                                <source media='(min-width: 500px) and (max-width: 700px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Third_img/Third_img_600x480_full.jpg' 
                                    alt='Children are playing football'/>
                                <source media='(min-width: 700px) and (max-width: 900px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Third_img/Third_img_800x640_full.jpg' 
                                    alt='Children are playing football'/>
                                <source media='(min-width: 900px) and (max-width: 1100px)'
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Third_img/Third_img_1024x819_full.jpg' 
                                    alt='Children are playing football'/>
                                <source media='(min-width: 1100px)' 
                                    srcSet='https://thumb.cloud.mail.ru/thumb/xw1/photos/Third_img/Third_img_1280x1024_full.jpg' 
                                    alt='Children are playing football'/>
                                <img src='https://thumb.cloud.mail.ru/thumb/xw1/photos/Third_img/Third_img_600x480_full.jpg' alt='Children are playing football'/>
                            </picture> */}
            </div>
          </Carousel>
        </div>
      </section>
    );
  }
}
