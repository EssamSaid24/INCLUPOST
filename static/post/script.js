function previewImage(event) {
    var input = event.target;
    var imageName = input.files[0].name;
    console.log('Selected Image:', imageName);
}

function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    var dragArea = document.querySelector('.drag-area');
    dragArea.classList.add('drag-over');
}

function handleDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    var dragArea = document.querySelector('.drag-area');
    dragArea.classList.remove('drag-over');
}

function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    var input = document.getElementById('post-image');
    input.files = event.dataTransfer.files;
    previewImage(event);
    var dragArea = document.querySelector('.drag-area');
    dragArea.classList.remove('drag-over');
}

var dragArea = document.querySelector('.drag-area');
dragArea.addEventListener('dragover', handleDragOver);
dragArea.addEventListener('dragleave', handleDragLeave);
dragArea.addEventListener('drop', handleDrop);


$('form').submit(function (event) {
    event.preventDefault();
    var caption = $('#post-text').val();
    var image = $('#post-image')[0].files[0];
    var platforms = $('input[name="social-media"]:checked').map(function () {
        return $(this).val();
    }).get().join(', ');
    console.log(image);
    console.log('Caption: ' + caption);
    console.log('Image: ' + image);
    console.log('Platforms: ' + platforms);

    const postdata = {
        caption: caption,
        image: image,
        platforms: platforms
    };

    const file = image;
    uploadImage(file).then(
        url => {
            console.log("File uploaded:", url);
        },
        error => {
            console.log("Error uploading file:", error);
        }
    );



    //post Api call



    //make this without timer if posting success is confirmed
    //change the pop class display css proprty to block for 3 seconds

    setTimeout(function () {
        $('.popup').addClass('popup-show');
        $('.container').empty(); // clear the content inside the container
        var postText = $('#post-text').val(); // get the value of the post text
        if (image) {
            // create an image element and set its source to the selected image
            var img = $('<img>').attr('src', URL.createObjectURL(image))
                .addClass('img-fluid mx-auto d-block') // add Bootstrap classes
                .css({ 'max-width': '500px', 'max-height': '500px' }); // set max width and height
            $('.container').append(img); // append the image to the container
            if (caption) {
                // create a div element with Bootstrap classes for the caption
                var captionDiv = $('<div>').addClass('mt-2 text-center');
                // create a span element with larger font size and bold weight for the caption text
                var captionText = $('<pre>').text(`Image Description: A small Dog running across a grassy field, mouth open, ready to catch a tennis ball.\n
                My loyal companion, my shining star 🐶
               `).css({ 'font-size': '1.2rem', 'font-weight': 'bold' });
                captionDiv.append(captionText); // append the caption text to the div
                $('.container').append(captionDiv); // append the caption div to the container
            }
        }
    }, 2000);
});



