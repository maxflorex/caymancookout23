export const useDownload: any = (e: any, fileName: string) => {
    e.preventDefault()

    console.log(e.target.href);
    fetch(e.target.href, {
        method: "GET",
        headers: {}
    }).then(response => {
        response.arrayBuffer().then(function (buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", 'cc23.jpg'); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }).catch(err => {
        console.log(err);
    });

}