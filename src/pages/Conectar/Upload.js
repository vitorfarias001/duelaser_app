async function uploadFile() {
try {
    const data = new FormData();

    let img_f = data.uri;
    
    data.append('file', { uri: img_f, name: 'teste.jpg', type: 'image/jpg' });

    console.log(response);
}   catch (err) {
    console.log(err)
    }
}