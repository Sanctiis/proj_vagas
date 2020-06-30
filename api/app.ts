import StartUp from './startUp'

let port = process.env.PORT || '3003';

StartUp.app.listen(port, function() {
    console.log(`listening on ${port}`);
});