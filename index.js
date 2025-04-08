const express = require('express');
const app = express();

// Serve static files (HTML)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Parse form data

app.post('/fill', (req, res) => {
    // Extract variable fields from form submission
    const { outingDate, outingTime, returnDate, returnTime, purpose } = req.body;

    // JavaScript to fill the form
    const fillScript = `
        <script>
            window.onload = function() {
                document.getElementById("QuestionId_r36e3756273664c9cb60d19ff61820915").value = "Kingsly Rufus K J";
                document.getElementById("QuestionId_rc44a6690878943aaab796b1884fd769b").value = "23BCS073";
                document.getElementById("QuestionId_r58430735a3544b2997994c3fd223f6b8").value = "9942555337";
                document.getElementById("QuestionId_r29db15822bde4c848cfcd465dad7b0b5").value = "MH - 02";
                document.getElementById("QuestionId_r9fcc4972f62f47468a0fb25c0c13ae74").value = "207";
                document.getElementById("QuestionId_re944ec370e9b4cada53745fb23ddc612").value = "yes";
                document.getElementById("QuestionId_r386f6785e13d43c9b639a5d7a3da7399").value = "${outingDate}";
                document.getElementById("QuestionId_r0f134f400d3e4e319163fd37284ccd74").value = "${outingTime}";
                document.getElementById("QuestionId_rd4356d23fabb49c0a1ad1e0db04fe922").value = "${returnDate}";
                document.getElementById("QuestionId_rad22bb46fa6149c9b2d0c9e189724927").value = "${returnTime}";
                document.getElementById("QuestionId_rc485d02d818d43a9ae2d851a4f3e4afe").value = "${purpose}";
            };
        </script>
    `;

    // Redirect to Microsoft Forms with the script injected
    const formsUrl = 'https://forms.office.com/pages/responsepage.aspx?id=loKLa_-92EqTrYS8vzhC9bKvBXTN0gZBlDaTlvDYFn5UOFhEN05BMzFYNzBDQVdDRjY1WTYzRUxZTS4u';
    res.send(`
        <html>
        <head>
            <meta http-equiv="refresh" content="0;url=${formsUrl}">
        </head>
        <body>
            <p>Redirecting to form...</p>
            ${fillScript}
        </body>
        </html>
    `);
});

// Export for Vercel
module.exports = app;