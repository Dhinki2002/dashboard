//   const handleDownloadPDF = () => {
    //     const resumeComponent = (
    //       <Resume template={id} values={inputValues} img={imageSrc} />
    //     );
    //     const htmlContent = `
    //     <html>
    //       <head>
    //         <style>
    //         * {
    //         box-sizing: border-box;
    //       }
    //       .rela-block {
    //         display: block;
    //         position: relative;
    //         margin: auto;
    //         overflow:clip;
    //       }
    //       .rela-inline {
    //         display: inline-block;
    //         position: relative;
    //         margin: auto;
    //       }
    //       .floated {
    //         display: inline-block;
    //         position: relative;
    //         margin: false;
    //         float: left;
    //       }
    //       .abs-center {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: 50%;
    //         left: 50%;
    //         right: false;
    //         bottom: false;
    //         transform: translate(-50%, -50%);
    //         text-align: center;
    //         width: 88%;
    //       }
    //       body {
    //         font-family: 'Open Sans';
    //         font-size: 0.48vw;
    //         letter-spacing: 0.00vw;
    //         font-weight: 400;
    //         line-height: 0.74vw;
    //         background: url("http://kingofwallpapers.com/leaves/leaves-016.jpg") right no-repeat;
    //         background-size: cover;
    //       }
    //       body:before {
    //         content: "";
    //         display: false;
    //         position: fixed;
    //         margin: 0;
    //         top: 0;
    //         left: 0;
    //         right: 0;
    //         bottom: 0;
    //         background-color: rgba(255,255,255,0.92);
    //       }
    //       .caps {
    //         text-transform: uppercase;
    //       }
    //       .justified {
    //         text-align: justify;
    //         word-wrap: break-word;
    //       }
    //       p.light {
    //         color: #777;
    //       }
    //       h2 {
    //         font-family: 'Open Sans';
    //         font-size: 0.79vw;
    //         letter-spacing: 0.13vw;
    //         font-weight: 600;
    //         line-height: 1.06vw;
    //         color: #000;
    //       }
    //       h3 {
    //         font-family: 'Open Sans';
    //         font-size: 0.56vw;
    //         letter-spacing: 0.03vw;
    //         font-weight: 600;
    //         line-height: 0.74vw;
    //         color: #000;
    //       }
    //       .page {
    //         width: 90%;
    //         max-width: 31.74vw;
    //         margin: 2.12vw auto;
    //         background-color: #fff;
    //         box-shadow: 0.16vw 0.26vw 0.74vw 0.00vw rgba(0,0,0,0.4);
    //         height: 40vw;
    //       }
    //       .top-bar {
    //         height: 5.82vw;
    //         background-color: #848484;
    //         color: #fff;
    //       }
    //       .name {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: false;
    //         left: calc(9.26vw + 5%);
    //         right: 0;
    //         bottom: 0;
    //         height: 3.17vw;
    //         text-align: center;
    //         font-family: 'Raleway';
    //         font-size: 1.53vw;
    //         letter-spacing: 0.21vw;
    //         font-weight: 100;
    //         line-height: 1.59vw;
    //       }
    //       .name div {
    //         width: 94%;
    //       }
    //       .side-bar {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: 1.59vw;
    //         left: 5%;
    //         right: false;
    //         bottom: 0;
    //         width: 9.26vw;
    //         background-color: #f7e0c1;
    //         padding: 8.46vw 0.79vw 1.32vw;
    //         font-size: 0.5vw;
    //       }
    //       .side-bar1 {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: 1.59vw;
    //         left: 5%;
    //         right: false;
    //         bottom: 0;
    //         width: 9.26vw;
    //         background-color: rgb(181, 206, 206);
    //         padding: 8.46vw 0.79vw 1.32vw;
    //         font-size: 0.5vw;
    //       }
    //       .side-bar2 {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: 1.59vw;
    //         left: 5%;
    //         right: false;
    //         bottom: 0;
    //         width: 9.26vw;
    //         background-color: #b2b3ff;
    //         padding: 8.46vw 0.79vw 1.32vw;
    //         font-size: 0.5vw;
    //         color:black
    //       }
    //       .mugshot {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: 1.32vw;
    //         left: 1.85vw;
    //         right: false;
    //         bottom: false;
    //         height: 5.55vw;
    //         width: 5.55vw;
    //       }
    //       .mugshot .logo {
    //         margin: -0.61vw;
    //       }
    //       .logo {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: 0;
    //         left: 0;
    //         right: false;
    //         bottom: false;
    //         z-index: 100;
    //         margin: 0;
    //         color: #000;
    //         height: 6.61vw;
    //         width: 6.61vw;
    //       }
    //       .logo .logo-svg {
    //         height: 80%;
    //         width: 80%;
    //         stroke: #000;
    //         cursor: pointer;
    //         border-radius: 4.91vw;
    //       }
    //       .logo .logo-text {
    //         display: false;
    //         position: absolute;
    //         margin: false;
    //         top: 58%;
    //         right: 16%;
    //         cursor: pointer;
    //         font-family: "Montserrat";
    //         font-size: 1.45vw;
    //         letter-spacing: 0.00vw;
    //         font-weight: 400;
    //         line-height: 1.54vw;
    //       }
    //       .social {
    //         padding-left: 0;
    //         margin-bottom: 0.53vw;
    //       }

    //       .side-header {
    //         font-family: 'Open Sans';
    //         font-size: 0.48vw;
    //         letter-spacing: 0.11vw;
    //         font-weight: 600;
    //         line-height: 0.74vw;
    //         margin: 1.59vw auto 0.26vw;
    //         padding-bottom: 0.13vw;
    //         border-bottom: 0.03vw solid #888;
    //       }
    //       .list-thing {
    //         padding-left: 0.66vw;
    //         margin-bottom: 0.26vw;
    //       }
    //       .content-container {
    //         margin-right: 0;
    //         width: calc(95% - 9.26vw);
    //         padding: 0.66vw 1.06vw 1.32vw;
    //         font-size: 0.55vw;
    //       }
    //       .content-container > * {
    //         margin: 0 auto 0.66vw;
    //       }
    //       .content-container > h3 {
    //         margin: 0 auto 0.13vw;
    //       }
    //       .content-container > p.long-margin {
    //         margin: 0 auto 1.32vw;
    //         word-wrap: break-word;
    //       }
    //       .title {
    //         width: 80%;
    //         text-align: center;
    //       }
    //       .separator {
    //         width: 6.35vw;
    //         height: 0.05vw;
    //         background-color: #999;
    //       }
    //       .greyed {
    //         background-color: #ddd;
    //         width: 100%;
    //         max-width: 15.34vw;
    //         text-align: center;
    //         font-family: 'Open Sans';
    //         font-size: 0.48vw;
    //         letter-spacing: 0.16vw;
    //         font-weight: 600;
    //         line-height: 0.74vw;
    //       }
    //       .degree-year{
    //         display: flex;
    //         justify-content: space-between;
    //       }
    //       @media screen and (max-width: 40.42vw) {
    //         .name {
    //           color: #fff;
    //           font-family: 'Raleway';
    //           font-size: 1.01vw;
    //           letter-spacing: 0.16vw;
    //           font-weight: 100;
    //           line-height: 1.27vw;
    //         }
    //       }

    //         </style>
    //       </head>
    //       <body>
    //         <div>
    //           <div class="rela-block page">
    //     <div class="rela-block top-bar">
    //         <div class="caps name"><div class="abs-center">${inputValues[0][0]}${inputValues[1][0]}</div></div>
    //     </div>
    //     <div class="side-bar">
    //         <div class="mugshot">
    //             <div class="logo">
    //                 <div class="rela-block logo-svg">
    //                     <path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" stroke-width="2.5" fill="none"/>
    //                 </div>
    //                 <p class="logo-text">kj</p>
    //             </div>
    //         </div>
    //         <p>123 My Place Drive</p>
    //         <p>Astoria, New York 11105</p>
    //         <p>1-800-CALLPLZ</p>
    //         <p>emailsareforsquares@gmail.com</p><br>
    //         <p class="rela-block social twitter">Twitter stuff</p>
    //         <p class="rela-block social pinterest">Pinterest things</p>
    //         <p class="rela-block social linked-in">Linked-in man</p>
    //         <p class="rela-block caps side-header">Expertise</p>
    //         <p class="rela-block list-thing">HTML</p>
    //         <p class="rela-block list-thing">CSS (Stylus)</p>
    //         <p class="rela-block list-thing">JavaScript & jQuery</p>
    //         <p class="rela-block list-thing">Killer Taste</p>
    //         <p class="rela-block caps side-header">Education</p>
    //         <p class="rela-block list-thing">Advanced potion making</p>
    //         <p class="rela-block list-thing">Degree in popping and locking</p>
    //         <p class="rela-block list-thing">Knitting game on point</p>
    //         <p class="rela-block list-thing">Culinary af</p>
    //     </div>
    //     <div class="rela-block content-container">
    //         <h2 class="rela-block caps title">Jr Front-End Developer</h2>
    //         <div class="rela-block separator"></div>
    //         <div class="rela-block caps greyed">Profile</div>
    //         <p class="long-margin">Retro DIY quinoa, mixtape williamsburg master cleanse bushwick tumblr chillwave dreamcatcher hella wolf paleo. Knausgaard semiotics truffaut cornhole hoodie, YOLO meggings gochujang tofu. Locavore ugh kale chips iPhone biodiesel typewriter freegan, kinfolk brooklyn kitsch man bun. Austin neutra etsy, lumbersexual paleo cornhole sriracha kinfolk meggings kickstarter. </p>
    //         <div class="rela-block caps greyed">Experience</div>

    //         <h3>Job #1</h3>
    //         <p class="light">First job description</p>
    //         <p class="justified">Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave meh paleo freegan ramps. Letterpress shabby chic fixie semiotics. Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle rights aesthetic hella PBR&B. </p>

    //         <h3>Job #2</h3>
    //         <p class="light">Second Job Description</p>
    //         <p class="justified">Beard before they sold out photo booth distillery health goth. Hammock franzen green juice meggings, ethical sriracha tattooed schlitz mixtape man bun stumptown swag whatever distillery blog. Affogato iPhone normcore, meggings actually direct trade lomo plaid franzen shoreditch. Photo booth pug paleo austin, pour-over banh mi scenester vice food truck slow-carb. Street art kogi normcore, vice everyday carry crucifix thundercats man bun raw denim echo park pork belly helvetica vinyl. </p>

    //         <h3>Job #3</h3>
    //         <p class="light">Third Job Description</p>
    //         <p class="justified">Next level roof party lo-fi fingerstache skateboard, kogi tumblr. Shabby chic put a bird on it chambray, 3 wolf moon swag beard brooklyn post-ironic taxidermy art party microdosing keffiyeh marfa. Put a bird on it 3 wolf moon cliche helvetica knausgaard. Mumblecore fingerstache lomo, artisan freegan keffiyeh paleo kinfolk kale chips street art blog flannel.</p>
    //     </div>
    // </div>
    //         </div>
    //       </body>
    //     </html>
    //   `;

    //     const element = document.createElement('div');
    //     element.innerHTML = htmlContent;

    //     html2pdf(element, {
    //       margin: 10,
    //       filename: 'resume_2020A7PS.pdf',
    //       image: { type: 'jpeg', quality: 0.98 },
    //       html2canvas: { scale: 2 },
    //       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    //     });
    //   };