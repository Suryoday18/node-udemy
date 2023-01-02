
const routes = (req, res) => {
    const url = req.url
    const method = req.method
    if(req.url === '/'){
        res.write('<html>')
        res.write('<head><title>Hello Users</title></head>')
        res.write('<body><h2>Welcome Users</h2></body>')
        res.write('<body><form action="create-user" method="POST"><input type="text" name="user-name" /><button type="submit">Submit</button>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/create-user' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        return  req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            console.log({parsedBody, message});
            return res.end()
        })
    }
    else if(req.url === '/users'){
        res.write('<html>')
        res.write('<head><title>Hello Users</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
        res.write('</html>')
        return res.end()
    }
}

module.exports = routes