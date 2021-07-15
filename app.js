const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// app.get('/', (req, res)=>{
//    res.send("Hello World........")
// });

app.get('/', (req, resp)=>{

    const email = `
       <h3>Hello dee.....</h3>
       <ul>
         <li>Name: Deepak </li>
         <li>Email: dee@dee.com </li>
       </ul>
       <h2>Message<h2>
       <p>Wassup....howdeeee</p>
    `

    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: '587',
        auth: {
          user: 'deechris06@office365.com',
          pass: 'blahhhhh'
        },
        secureConnection: false,
        tls: { ciphers: 'SSLv3' }    
      })
    
      transporter.sendMail({
        from: 'deechris06@office365.com',
        to: 'deechris27@gmail.com',
        subject: 'Test for twix',
        text: 'hello twix',
        html: email
      }).then(res=>{

          console.log("success........", res)
          resp.send("yeahhhhhhhh", res);
      }).catch(e=>{
          console.log("failed........", e)
      })
})


app.listen(3000, console.log("Server listening to 3k"));