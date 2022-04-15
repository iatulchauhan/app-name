import React from 'react'


export default function About() {

    // const [myStyle, setMyState] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     boxshadow: 'inset 0 -1px 0 rgb(0 0 0 / 13%)'
    // })

     const myStyle = {
        color: 'black',
        backgroundColor: 'white',
        boxshadow: 'inset 0 -1px 0 rgb(0 0 0 / 13%)'
    }

    // const [btnText, btnSetText] = useState('Enable Dark Mode')

    // const newStyle = (event) => {
    //     if (myStyle.color === 'white') {
    //         setMyState(
    //             {
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 boxshadow: 'inset 0 -1px 0 rgb(0 0 0 / 13%)'

    //             })
    //           btnSetText('Enable Dark Mode')

    //     } else {
    //         setMyState(
    //             {
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 boxshadow: 'inset 0 -1px 0 rgb(0 0 0 / 13%)'
    //             })
    //             btnSetText('Enable Light Mode')

    // //     }


    // }

    return (

        <div className='container' >
            <h1>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button className='btn btn-primary' onClick={newStyle}>{btnText}</button>
            </div> */}
        </div>
    )
}
