import React from 'react'

const Faq = () => {
    const faqInfo=[
        {faq:"Faq1", id:"q_1", value:"question1"},
        {faq:"Faq2", id:"q_2", value:"question2"},
        {faq:"Faq3", id:"q_3", value:"question3"},
        {faq:"Faq4", id:"q_4", value:"question4"},
    ];
    const FaqRender=(faqValue,index)=>{
        return(
            // <div class="accordion accordion-flush " key={index}  >
            // <div class="accordion-item mb-4 border border-primary"  >
            //     <h2 class="accordion-header" id={faqValue.id}> <button  class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" href={ `#${faqValue.id}`} aria-controls="flush-collapseOne" > {faqValue.faq} </button> </h2>
            //     <div id={faqValue.id} class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
            //         <div class="accordion-body p-0" >
            //             <ul class="list-unstyled m-0">
            //                 <li><a href="#">{faqValue.value}</a></li>
            //                 <li><a href="#">{faqValue.value}</a></li>
            //                 <li><a href="#">{faqValue.value}</a></li>
            //                 <li><a href="#">{faqValue.value}</a></li>
            //                 <li><a href="#">{faqValue.value}</a></li>
            //             </ul>
            //         </div>
            //     </div>
            // </div>
            // </div>
            
<div class="accordion  accordion-flush " id="accordionFlushExample">
  <div class="accordion-item mb-4 border border-primary">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${faqValue.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
       {faqValue.faq}
      </button>
    </h2>
    <div id={faqValue.id} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  </div>

            
        )
    }
    return (
     <>
     <div className="container faq-section mb-5">
     <div class="wrapper bg-transparent rounded ">
    <div class="text-center mb-5 faq-heading">Frequently asked questions</div>
   {faqInfo.map(FaqRender)}
   </div>
   <div/>
{/* 
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne"> <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> Know About Pro </button> </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                <div class="accordion-body p-0">
                    <ul class="list-unstyled m-0">
                        <li><a href="#">How to upgrade to pro</a></li>
                        <li><a href="#">Benifits of Pro</a></li>
                        <li><a href="#">Payment methods to get Pro</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne"> <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> BBBootstrap Tools </button> </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                <div class="accordion-body p-0">
                    <ul class="list-unstyled m-0">
                        <li><a href="#">How to use Pro Online Editor</a></li>
                        <li><a href="#">Know Gradient generator</a></li>
                        <li><a href="#">Using Beautifier</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne"> <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"> Download Snippets </button> </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                <div class="accordion-body p-0">
                    <ul class="list-unstyled m-0">
                        <li><a href="#">How to download snippets</a></li>
                        <li><a href="#">Donate to Author</a></li>
                        <li><a href="#">Donation methods</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne"> <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive"> BBBootstrap Icons </button> </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                <div class="accordion-body p-0">
                    <ul class="list-unstyled m-0">
                        <li><a href="#">Adding icons to snippets</a></li>
                        <li><a href="#">Fontawesome Icons</a></li>
                        <li><a href="#">Material Design</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne"> <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix"> Policy & copyrights </button> </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                <div class="accordion-body p-0">
                    <ul class="list-unstyled m-0">
                        <li><a href="#">BBBootstrap Guidelines</a></li>
                        <li><a href="#">BBBootstrap Policies</a></li>
                        <li><a href="#">Copyright and right management</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> */}
</div>
     </>
    )
}

export default Faq
