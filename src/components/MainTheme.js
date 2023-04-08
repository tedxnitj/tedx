import Carousel from 'react-bootstrap/Carousel';

export const MainTheme = () => {
    return (
        <div className='maintheme row justify-content-center'>

            <div className='maintheme__right col-md-6 col-sm-12 align-self-center'>
                <div className='inside'>
                    <div>
                        <h1>Theme : Reverbera<span className='makeitred'>TED</span></h1>
                        <h3>Lorem Ipsum dolor</h3>
                        <h3>Date: 15th April 2023</h3>
                    </div>

                </div>

            </div>
            <div className='maintheme__left col-md-6 col-sm-12 align-self-center'>
                <Carousel className='w-100 h-50'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 center"
                            src="https://www.aberdeen.sd.us/calendar/2015-07-15-1436963377-8493806-TEDxLogo.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://blog.funeralone.com/wp-content/uploads/2014/10/2014-10-14_1257.png"
                            alt="Second slide"
                        />
                        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.squarespace-cdn.com/content/v1/552ce6d0e4b0d3f184888632/1442077115790-UWF21ESYXW0MAO5GP1KG/image-asset.jpeg?format=2500w"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel></div>


        </div>
    );
}
