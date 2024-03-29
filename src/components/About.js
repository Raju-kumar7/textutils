import React from 'react'

export default function About(props) {

  return (
    <div className='container' id='About' style={{backgroundColor:props.mode==='dark'?'#4f4d4d':'white', color:props.mode==='dark'?'white':'black'}}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion p-2" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?'rgb(101, 100, 100)':'#eaeaea', color:props.mode==='dark'?'white':'black',border:'1px solid', borderColor:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'rgb(101, 100, 100)':'#eaeaea', color:props.mode==='dark'?'white':'black',border:'1px solid', borderColor:props.mode==='dark'?'white':'black'}}>
                    TextEditor gives you a way to analyze your text quickly and efficiently. Be it word count,character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?'rgb(101, 100, 100)':'#eaeaea', color:props.mode==='dark'?'white':'black',border:'1px solid', borderColor:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'rgb(101, 100, 100)':'#eaeaea', color:props.mode==='dark'?'white':'black',border:'1px solid', borderColor:props.mode==='dark'?'white':'black'}}>
                    TextEditor is a free character counter tool that provides instant character count and word count statistics for a given text. TextEditor reports the number of words and characters. Thus it is suitable for for writing text word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?'rgb(101, 100, 100)':'#eaeaea', color:props.mode==='dark'?'white':'black',border:'1px solid', borderColor:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'rgb(101, 100, 100)':'#eaeaea', color:props.mode==='dark'?'white':'black',border:'1px solid', borderColor:props.mode==='dark'?'white':'black'}}>
                    This word counter softwareworks in any web browser such as Chrome, Firefox, Internet Explorer, Safari Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

