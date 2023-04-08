import React, { useState, useEffect } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
// import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterSubscribe from './NewsletterSubscribe';
export const Connect = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["ideas", "lorem", "ipsum"];
    // const MAILCHIMP_URL = "https://gmail.us21.list-manage.com/subscribe/post?u=bb47df5ca372d448ecdd95ea2&amp;id=fee513aebb&amp;f_id=00ba94e1f0";
    // const MAILCHIMP_URL = "https://gmail.us21.list-manage.com/subscribe/post?u=bb47df5ca372d448ecdd95ea2&amp;id=fee513aebb&amp;f_id=00ba94e1f0";
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    const submitForm = (event) => {
        event.preventDefault();

    }
    return (
        <div id="weInspire" className='connect row'>
            <div className='col-md-6 connect__left'>
                <h1 className='connect__left_staticText'>We cultivate</h1>
                <h1>
                    <span>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Plus Jakarta Sans',
                                color: '#E62B1E',
                                fontWeight: 800,
                                fontSize: '1em',
                            }}
                            startDelay={0}
                            cursorColor="#E62B1E"
                            multiText={[
                                'ideas',
                                'innovation',
                                'perseverance',

                            ]}
                            multiTextDelay={1000}
                            typeSpeed={10}
                            multiTextLoop = {true}

                        />
                    </span>
                </h1>
            </div>
            <div className='col-md-6 connect__right'>
                <p className='connect__right_text'>Be the first to hear about our upcoming events, early bird ticket sales and ideas worth sharing. Sign Up</p>
                <div className=''>
                    {/* <form onSubmit={submitForm}>
                    <input type="email" class="col-md-6 col-sm-12 " placeholder="Enter your email" />
                
                    <button type="submit" class="btn btn-danger btn-lg col-md-6 col-sm-12">INSPIRE ME</button>
                    </form> */}
                    <NewsletterSubscribe/>
                </div>
                {/* MAILCHIMP_STARTS */}
                

            </div>
        </div>
    )
}
