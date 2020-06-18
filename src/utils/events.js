// Source: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
export const dropHandler = (event) => {
  // reset opacity of target element
  event.target.style.opacity = 1;

  event.preventDefault();

  if (event.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < event.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (event.dataTransfer.items[i].kind === "file") {
        var file = event.dataTransfer.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + file.name);
        console.log(file);
        let reader = new FileReader();
        reader.readAsText(file);
        console.log(reader);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < event.dataTransfer.files.length; i++) {
      console.log(
        "... file[" + i + "].name = " + event.dataTransfer.files[i].name
      );
    }
  }
};

export const dragOverHandler = (event) => {
  // change opacity of target element
  event.target.style.opacity = 0.6;

  // Prevent default behavior (Prevent file from being opened)
  event.preventDefault();
};
