

//criar servidor

http.createServer(function(req, res) {

    console.log(req.url);
    var categoria = req.url;

    if (categoria == '/tecnologia'){
        res.end ('<html><h2>Tecnologia</h2></html>');      
    }

    else if (categoria == '/moda'){
        res.end ('<html><h2>Moda</h2></html>');      
    }

    else 
    {
    res.end ('<html><h2>teste</h2></html>');
}

}).listen(3000);

