// Route to display static src images 
app.get("/static", (req, res) => { 
    res.render("static"); 
}); 
  
// Route to display dynamic src images 
app.get("/dynamic", (req, res) => { 
    imageList = []; 
    imageList.push({ src: "images/git.png", name: "Git" }); 
    imageList.push({ src: "images/link.png", name: "Linkedln" }); 
    imageList.push({ src: "images/bc.jpg", name: "BC" }); 
    res.render("dynamic", { imageList: imageList }); 
});